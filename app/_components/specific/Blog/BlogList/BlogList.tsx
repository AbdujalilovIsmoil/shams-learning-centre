"use client";

import Aos from "aos";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Language } from "@/app/types";
import { usePathname } from "next/navigation";
import { ArrowRightIcon } from "@/public/images/svg";
import { blogPageText } from "../data";
import { fetchBlogPosts, resolveBlogImage, type BlogPost } from "../api";
import {
  BlogCard,
  BlogGrid,
  BlogHero,
  BlogBadge,
  BlogSection,
  BlogCardLink,
  BlogCardMeta,
  BlogCardTitle,
  BlogHeroTitle,
  BlogCardImage,
  BlogCardContent,
  BlogCardExcerpt,
  BlogCardLinkIcon,
  BlogCardCategory,
  BlogHeroSubtitle,
  BlogCardImageWrapper,
} from "./style";

const BlogList = () => {
  const pathName = usePathname();
  const language = (pathName.split("/")[1] || "uz") as Language;
  const text = blogPageText[language] ?? blogPageText.uz;

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

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
    fetchBlogPosts()
      .then((data) => {
        if (isCancelled) return;
        setPosts(data);
        setHasError(false);
      })
      .catch(() => {
        if (!isCancelled) setHasError(true);
      })
      .finally(() => {
        if (!isCancelled) setIsLoading(false);
      });

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <BlogSection dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="container">
        <BlogHero data-aos="fade-up">
          <BlogBadge>{text.badge}</BlogBadge>
          <BlogHeroTitle>{text.title}</BlogHeroTitle>
          <BlogHeroSubtitle>{text.subtitle}</BlogHeroSubtitle>
        </BlogHero>

        {isLoading && <p>...</p>}

        {!isLoading && hasError && <p>{text.notFoundText}</p>}

        {!isLoading && !hasError && (
          <BlogGrid>
            {posts.map((post, index) => (
              <BlogCard
                key={post.id}
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100}
              >
                <Link href={`/${language}/blog/${post.slug}`}>
                  <BlogCardImageWrapper>
                    <BlogCardImage
                      src={resolveBlogImage(post.image)}
                      alt={post.title[language]}
                    />
                    <BlogCardCategory>
                      {post.category[language]}
                    </BlogCardCategory>
                  </BlogCardImageWrapper>
                </Link>

                <BlogCardContent>
                  <BlogCardMeta>
                    {post.date} · {post.readTime} {text.minRead}
                  </BlogCardMeta>
                  <BlogCardTitle>
                    <Link href={`/${language}/blog/${post.slug}`}>
                      {post.title[language]}
                    </Link>
                  </BlogCardTitle>
                  <BlogCardExcerpt>{post.excerpt[language]}</BlogCardExcerpt>
                  <BlogCardLink href={`/${language}/blog/${post.slug}`}>
                    {text.readMore}
                    <BlogCardLinkIcon
                      width={18}
                      height={18}
                      src={ArrowRightIcon}
                      alt="arrow right icon"
                    />
                  </BlogCardLink>
                </BlogCardContent>
              </BlogCard>
            ))}
          </BlogGrid>
        )}
      </div>
    </BlogSection>
  );
};

export default BlogList;
