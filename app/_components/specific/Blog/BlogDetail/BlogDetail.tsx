"use client";

import Aos from "aos";
import { useEffect, useState } from "react";
import { Language } from "@/app/types";
import { usePathname } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { blogPageText } from "../data";
import {
  fetchBlogPostBySlug,
  fetchBlogPosts,
  resolveBlogImage,
  type BlogPost,
} from "../api";
import {
  CarouselArrowLeftIcon,
  CarouselArrowRightIcon,
} from "@/public/images/svg";
import {
  BlogDetailBack,
  BlogDetailBackIcon,
  BlogDetailHeader,
  BlogDetailCategory,
  BlogDetailTitle,
  BlogDetailMeta,
  BlogDetailCover,
  BlogDetailCoverImage,
  BlogDetailCoverNavigation,
  BlogDetailCoverNavigationImage,
  BlogDetailCoverPagination,
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

        {post.images?.length > 0 && (
          <BlogDetailCover data-aos="fade-up">
            <Swiper
              loop={post.images.length > 1}
              key={post.slug}
              slidesPerView={1}
              modules={[Autoplay, Navigation, Pagination]}
              dir={language === "ar" ? "rtl" : "ltr"}
              navigation={{
                prevEl: ".blog-detail-cover-prev",
                nextEl: ".blog-detail-cover-next",
              }}
              pagination={{
                el: ".blog-detail-cover-pagination",
                clickable: true,
              }}
              autoplay={
                post.images.length > 1
                  ? { delay: 5000, disableOnInteraction: false }
                  : false
              }
            >
              {post.images.map((image, index) => (
                <SwiperSlide key={`${image}-${index}`}>
                  <BlogDetailCoverImage
                    src={resolveBlogImage(image)}
                    alt={`${post.title[language]} ${index + 1}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {post.images.length > 1 && (
              <>
                <BlogDetailCoverNavigation
                  type="button"
                  className="blog-detail-cover-prev"
                  aria-label="previous image"
                >
                  <BlogDetailCoverNavigationImage
                    width={18}
                    height={18}
                    src={CarouselArrowLeftIcon}
                    alt="arrow left icon"
                  />
                </BlogDetailCoverNavigation>

                <BlogDetailCoverNavigation
                  type="button"
                  className="blog-detail-cover-next"
                  aria-label="next image"
                >
                  <BlogDetailCoverNavigationImage
                    width={18}
                    height={18}
                    src={CarouselArrowRightIcon}
                    alt="arrow right icon"
                  />
                </BlogDetailCoverNavigation>

                <BlogDetailCoverPagination className="blog-detail-cover-pagination" />
              </>
            )}
          </BlogDetailCover>
        )}

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
                      src={resolveBlogImage(el.images?.[0] ?? "")}
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
