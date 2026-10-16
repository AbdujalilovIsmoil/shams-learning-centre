
import Link from "@/lib/Link";
import { useEffect, useRef, useState } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { getDotsState } from "@/_components/ui/CarouselDots";
import CarouselControls from "@/_components/ui/CarouselControls";
import { Language } from "@/types";
import { getSwiperA11y } from "@/a11y/labels";
import { usePathname } from "@/lib/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper/modules";
import { ArrowRightIcon } from "@/assets/images/svg";
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
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalDots, setTotalDots] = useState(0);
  const [isBeginning, setIsBeginning] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  // Ekranga hamma maqola sig'sa (aylantiradigan joy yo'q) strelka va
  // nuqtalar kerak emas — ularni yashiramiz.
  const [isLocked, setIsLocked] = useState(false);

  const syncCarousel = (swiper: SwiperInstance) => {
    const { active, total, isBeginning, isEnd } = getDotsState(swiper, posts.length);
    setActiveIndex(active);
    setTotalDots(total);
    setIsBeginning(isBeginning);
    setIsEnd(isEnd);
    setIsLocked(swiper.isLocked);
  };

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
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                syncCarousel(swiper);
              }}
              onSlideChange={syncCarousel}
              onBreakpoint={syncCarousel}
              onResize={syncCarousel}
              onLock={() => setIsLocked(true)}
              onUnlock={() => setIsLocked(false)}
              modules={[A11y, Autoplay]}
              a11y={getSwiperA11y(language)}
              dir={language === "ar" ? "rtl" : "ltr"}
              autoplay={{
                delay: 4000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
              }}
              spaceBetween={28}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 20 },
                640: { slidesPerView: 2, spaceBetween: 20 },
                1100: { slidesPerView: 3, spaceBetween: 28 },
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
                          alt=""
                        />
                      </BlogHomeCardLink>
                    </BlogHomeCardContent>
                  </BlogHomeCard>
                </SwiperSlide>
              ))}
            </Swiper>

            <CarouselControls
              language={language}
              marginTop={32}
              hidden={isLocked}
              total={totalDots}
              active={activeIndex}
              prevDisabled={isBeginning}
              nextDisabled={isEnd}
              onPrev={() => swiperRef.current?.slidePrev()}
              onNext={() => swiperRef.current?.slideNext()}
              onSelect={(index) => swiperRef.current?.slideToLoop(index)}
            />
          </BlogHomeCarouselWrapper>
        )}

        <BlogHomeFooter data-aos="fade-up">
          <BlogHomeViewAllLink href={`/${language}/blog`}>
            {text.viewAll}
            <BlogHomeViewAllIcon
              width={18}
              height={18}
              src={ArrowRightIcon}
              alt=""
            />
          </BlogHomeViewAllLink>
        </BlogHomeFooter>
      </div>
    </BlogHomeSection>
  );
};

export default BlogHome;
