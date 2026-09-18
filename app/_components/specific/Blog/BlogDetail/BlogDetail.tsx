"use client";

import Aos from "aos";
import { useEffect, useState } from "react";
import { Language } from "@/app/types";
import { usePathname } from "next/navigation";
import { blogPageText } from "../data";
import {
  fetchBlogPostBySlug,
  fetchBlogPosts,
  resolveBlogImage,
  type BlogPost,
} from "../api";
import { CarouselArrowLeftIcon } from "@/public/images/svg";
import {
  BlogDetailBack,
  BlogDetailBackIcon,
  BlogDetailHeader,
  BlogDetailCategory,
  BlogDetailTitle,
  BlogDetailMeta,
  BlogDetailContent,
  BlogDetailRichContent,
  BlogDetailCta,
  BlogDetailCtaTitle,
  BlogDetailCtaText,
  BlogDetailCtaButton,
  BlogDetailRelated,
  BlogDetailRelatedTitle,
  BlogDetailRelatedGrid,
  BlogDetailRelatedCard,
  BlogDetailRelatedImageWrapper,
  BlogDetailRelatedImage,
  BlogDetailRelatedContent,
  BlogDetailRelatedCardTitle,
  BlogDetailSection,
  BlogNotFoundBox,
  BlogNotFoundTitle,
  BlogNotFoundText,
  BlogNotFoundLink,
} from "./style";

const BlogDetail = () => {
  const pathName = usePathname();
  const parts = pathName.split("/").filter(Boolean);
  const language = (parts[0] || "uz") as Language;
  const slug = parts[2] || "";
  const text = blogPageText[language] ?? blogPageText.uz;

  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const html = document.querySelector("html");

    html?.setAttribute("lang", language);
    html?.setAttribute("dir", language === "ar" ? "rtl" : "ltr");

    Aos.init();
    Aos.refresh();
  }, [language]);

  useEffect(() => {
    let isCancelled = false;
    setIsLoading(true);

    Promise.all([fetchBlogPostBySlug(slug), fetchBlogPosts()])
      .then(([foundPost, allPosts]) => {
        if (isCancelled) return;
        setPost(foundPost);
        setRelatedPosts(
          allPosts.filter((el) => el.slug !== slug).slice(0, 3)
        );
      })
      .finally(() => {
        if (!isCancelled) setIsLoading(false);
      });

    return () => {
      isCancelled = true;
    };
  }, [slug]);

  useEffect(() => {
    Aos.refresh();
  }, [post]);

  if (isLoading) {
    return (
      <BlogDetailSection dir={language === "ar" ? "rtl" : "ltr"}>
        <div className="container" />
      </BlogDetailSection>
    );
  }

  if (!post) {
    return (
      <BlogDetailSection dir={language === "ar" ? "rtl" : "ltr"}>
        <div className="container">
          <BlogNotFoundBox>
            <BlogNotFoundTitle>{text.notFoundTitle}</BlogNotFoundTitle>
            <BlogNotFoundText>{text.notFoundText}</BlogNotFoundText>
            <BlogNotFoundLink href={`/${language}/blog`}>
              {text.backToBlog}
            </BlogNotFoundLink>
          </BlogNotFoundBox>
        </div>
      </BlogDetailSection>
    );
  }

  return (
    <BlogDetailSection dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="container">
        <BlogDetailBack href={`/${language}/blog`} data-aos="fade-up">
          <BlogDetailBackIcon
            width={18}
            height={18}
            src={CarouselArrowLeftIcon}
            alt="arrow left icon"
          />
          {text.backToBlog}
        </BlogDetailBack>

        <BlogDetailHeader data-aos="fade-up">
          <BlogDetailCategory>{post.category[language]}</BlogDetailCategory>
          <BlogDetailTitle>{post.title[language]}</BlogDetailTitle>
          <BlogDetailMeta>
            <span>{post.date}</span>
            <span>·</span>
            <span>
              {post.readTime} {text.minRead}
            </span>
          </BlogDetailMeta>
        </BlogDetailHeader>

        <BlogDetailContent data-aos="fade-up">
          <BlogDetailRichContent
            dir={language === "ar" ? "rtl" : "ltr"}
            dangerouslySetInnerHTML={{ __html: post.content[language] }}
          />
        </BlogDetailContent>

        <BlogDetailCta data-aos="fade-up">
          <BlogDetailCtaTitle>{text.ctaTitle}</BlogDetailCtaTitle>
          <BlogDetailCtaText>{text.ctaText}</BlogDetailCtaText>
          <BlogDetailCtaButton
            target="_blank"
            href="https://t.me/Shams_markaz_admin"
          >
            {text.ctaButton}
          </BlogDetailCtaButton>
        </BlogDetailCta>

        {relatedPosts.length > 0 && (
          <BlogDetailRelated>
            <BlogDetailRelatedTitle>
              {text.relatedTitle}
            </BlogDetailRelatedTitle>
            <BlogDetailRelatedGrid>
              {relatedPosts.map((el) => (
                <BlogDetailRelatedCard
                  key={el.id}
                  data-aos="fade-up"
                  href={`/${language}/blog/${el.slug}`}
                >
                  <BlogDetailRelatedImageWrapper>
                    <BlogDetailRelatedImage
                      src={resolveBlogImage(el.image)}
                      alt={el.title[language]}
                    />
                  </BlogDetailRelatedImageWrapper>
                  <BlogDetailRelatedContent>
                    <BlogDetailRelatedCardTitle>
                      {el.title[language]}
                    </BlogDetailRelatedCardTitle>
                  </BlogDetailRelatedContent>
                </BlogDetailRelatedCard>
              ))}
            </BlogDetailRelatedGrid>
          </BlogDetailRelated>
        )}
      </div>
    </BlogDetailSection>
  );
};

export default BlogDetail;
