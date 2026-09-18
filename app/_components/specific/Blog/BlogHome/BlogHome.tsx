"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Language } from "@/app/types";
import { usePathname } from "next/navigation";
import { ArrowRightIcon } from "@/public/images/svg";
import { blogHomeText } from "../data";
import { fetchBlogPosts, resolveBlogImage, type BlogPost } from "../api";
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
  BlogHomeCardImage,
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
} from "./style";

const BLOG_HOME_LIMIT = 3;

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
          <BlogHomeGrid>
            {posts.map((post, index) => (
              <BlogHomeCard
                key={post.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Link href={`/${language}/blog/${post.slug}`}>
                  <BlogHomeCardImageWrapper>
                    <BlogHomeCardImage
                      src={resolveBlogImage(post.image)}
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
                  <BlogHomeCardLink href={`/${language}/blog/${post.slug}`}>
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
            ))}
          </BlogHomeGrid>
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
