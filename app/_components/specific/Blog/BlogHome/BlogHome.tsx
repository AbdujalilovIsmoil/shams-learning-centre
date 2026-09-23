"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Language } from "@/app/types";
import { usePathname } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ArrowRightIcon, CarouselSmallArrowIcon } from "@/public/images/svg";
import { blogHomeText } from "../data";
import { fetchBlogPosts, type BlogPost } from "../api";
import BlogHomeCardImages from "./BlogHomeCardImages";
import {
  BlogHomeCard,
  BlogHomeGrid,
  BlogHomeBadge,
  BlogHomeTitle,
  BlogHomeFooter,
  BlogHomeHeader,
  BlogHomeSection,
  BlogHomeSubtitle,
  BlogHomeCardLink,
  BlogHomeCardMeta,
  BlogHomeEmptyText,
  BlogHomeCardTitle,
  BlogHomeEmptyTitle,
  BlogHomeEmptyState,
  BlogHomeSkeletonBody,
  BlogHomeSkeletonCard,
  BlogHomeSkeletonLine,
  BlogHomeCardContent,
  BlogHomeCardExcerpt,
  BlogHomeViewAllLink,
  BlogHomeCardLinkIcon,
  BlogHomeViewAllIcon,
  BlogHomeCardCategory,
  BlogHomeSkeletonImage,
  BlogHomeCardImageWrapper,
  BlogHomeNavigation,
  BlogHomeNavigations,
  BlogHomeNavigationImage,
  BlogHomePagination,
  BlogHomeCarouselWrapper,
} from "./style";

const BLOG_HOME_LIMIT = 6;

const BlogHome = () => {
  const pathName = usePathname();
  const language = (pathName.split("/")[1] || "uz") as Language;
  const text = blogHomeText[language] ?? blogHomeText.uz;

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    setIsLoading(true);
    fetchBlogPosts()
      .then((data) => {
        if (isCancelled) return;
        const sorted = [...data].sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        setPosts(sorted.slice(0, BLOG_HOME_LIMIT));
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

  const showEmptyState = !isLoading && (hasError || posts.length === 0);

  return (
    <BlogHomeSection id="blog">
      <div className="container">
        <BlogHomeHeader data-aos="fade-up">
          <BlogHomeBadge>{text.badge}</BlogHomeBadge>
          <BlogHomeTitle>{text.title}</BlogHomeTitle>
          <BlogHomeSubtitle>{text.subtitle}</BlogHomeSubtitle>
        </BlogHomeHeader>

        {isLoading && (
          <BlogHomeGrid>
            {Array.from({ length: BLOG_HOME_LIMIT }).map((_, index) => (
              <BlogHomeSkeletonCard key={index}>
                <BlogHomeSkeletonImage />
                <BlogHomeSkeletonBody>
                  <BlogHomeSkeletonLine $width="40%" $height="12px" />
                  <BlogHomeSkeletonLine $width="90%" $height="20px" />
                  <BlogHomeSkeletonLine $width="70%" $height="20px" />
                  <BlogHomeSkeletonLine $width="60%" $height="14px" />
                </BlogHomeSkeletonBody>
              </BlogHomeSkeletonCard>
            ))}
          </BlogHomeGrid>
        )}

        {showEmptyState && (
          <BlogHomeEmptyState data-aos="fade-up">
            <BlogHomeEmptyTitle>{text.emptyTitle}</BlogHomeEmptyTitle>
            <BlogHomeEmptyText>{text.emptyText}</BlogHomeEmptyText>
          </BlogHomeEmptyState>
        )}

        {!isLoading && !hasError && posts.length > 0 && (
          <BlogHomeCarouselWrapper>
            <Swiper
              loop={posts.length > 3}
              key={language}
              slidesPerView={1}
              modules={[Autoplay, Navigation, Pagination]}
              dir={language === "ar" ? "rtl" : "ltr"}
              navigation={{
                prevEl: ".blog-home-prev",
                nextEl: ".blog-home-next",
              }}
              pagination={{
                el: ".blog-home-pagination",
                clickable: true,
                dynamicBullets: true,
                dynamicMainBullets: 3,
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              spaceBetween={28}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 20 },
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 28 },
              }}
            >
              {posts.map((post, index) => (
                <SwiperSlide key={post.id}>
                  <BlogHomeCard
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <Link href={`/${language}/blog/${post.slug}`}>
                      <BlogHomeCardImageWrapper>
                        <BlogHomeCardImages
                          images={post.images ?? []}
                          alt={post.title[language]}
                        />
                        <BlogHomeCardCategory>
                          {post.category[language]}
                        </BlogHomeCardCategory>
                      </BlogHomeCardImageWrapper>
                    </Link>

                    <BlogHomeCardContent>
                      <BlogHomeCardMeta>
                        {post.date} · {post.readTime} {text.minRead}
                      </BlogHomeCardMeta>
                      <BlogHomeCardTitle>
                        <Link href={`/${language}/blog/${post.slug}`}>
                          {post.title[language]}
                        </Link>
                      </BlogHomeCardTitle>
                      <BlogHomeCardExcerpt>
                        {post.excerpt[language]}
                      </BlogHomeCardExcerpt>
                      <BlogHomeCardLink
                        href={`/${language}/blog/${post.slug}`}
                      >
                        {text.readMore}
                        <BlogHomeCardLinkIcon
                          width={18}
                          height={18}
                          src={ArrowRightIcon}
                          alt="arrow right icon"
                        />
                      </BlogHomeCardLink>
                    </BlogHomeCardContent>
                  </BlogHomeCard>
                </SwiperSlide>
              ))}
            </Swiper>

            <BlogHomeNavigations>
              <BlogHomeNavigation type="button" className="blog-home-prev">
                <BlogHomeNavigationImage
                  width={18}
                  height={18}
                  alt="arrow left"
                  src={CarouselSmallArrowIcon}
                />
              </BlogHomeNavigation>

              <BlogHomePagination className="blog-home-pagination" />

              <BlogHomeNavigation type="button" className="blog-home-next">
                <BlogHomeNavigationImage
                  width={18}
                  height={18}
                  alt="arrow right"
                  src={CarouselSmallArrowIcon}
                />
              </BlogHomeNavigation>
            </BlogHomeNavigations>
          </BlogHomeCarouselWrapper>
        )}

        <BlogHomeFooter data-aos="fade-up">
          <BlogHomeViewAllLink href={`/${language}/blog`}>
            {text.viewAll}
            <BlogHomeViewAllIcon
              width={18}
              height={18}
              src={ArrowRightIcon}
              alt="arrow right icon"
            />
          </BlogHomeViewAllLink>
        </BlogHomeFooter>
      </div>
    </BlogHomeSection>
  );
};

export default BlogHome;
