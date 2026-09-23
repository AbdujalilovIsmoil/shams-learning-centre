"use client";

import Aos from "aos";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Language } from "@/app/types";
import { usePathname } from "next/navigation";
import { ArrowRightIcon } from "@/public/images/svg";
import { blogPageText, blogFilterText } from "../data";
import { fetchBlogPosts, resolveBlogImage, type BlogPost } from "../api";
import FilterBar from "./FilterBar";
import { type SelectOptionType } from "./CustomSelect";
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
  BlogEmptyText,
  BlogEmptyTitle,
  BlogEmptyState,
  BlogSkeletonBody,
  BlogSkeletonCard,
  BlogSkeletonLine,
  BlogCardLinkIcon,
  BlogSkeletonImage,
  BlogCardCategory,
  BlogHeroSubtitle,
  BlogCardImageWrapper,
} from "./style";

const SORT_NEWEST = "newest";
const SORT_OLDEST = "oldest";
const SORT_READ_SHORT = "read-short";
const SORT_READ_LONG = "read-long";
const CATEGORY_ALL = "all";
const SKELETON_COUNT = 6;

const BlogList = () => {
  const pathName = usePathname();
  const language = (pathName.split("/")[1] || "uz") as Language;
  const text = blogPageText[language] ?? blogPageText.uz;
  const filterText = blogFilterText[language] ?? blogFilterText.uz;

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const [category, setCategory] = useState(CATEGORY_ALL);
  const [sort, setSort] = useState(SORT_NEWEST);
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

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

  useEffect(() => {
    Aos.refresh();
  }, [category, sort, dateFrom, dateTo, isLoading]);

  const categoryOptions: SelectOptionType[] = useMemo(() => {
    const seen = new Map<string, string>();

    posts.forEach((post) => {
      const key = post.category?.uz ?? post.category?.[language];
      if (key && !seen.has(key)) {
        seen.set(key, post.category[language] ?? key);
      }
    });

    return [
      { value: CATEGORY_ALL, label: filterText.categoryAll },
      ...Array.from(seen.entries()).map(([value, label]) => ({
        value,
        label,
      })),
    ];
  }, [posts, language, filterText.categoryAll]);

  const sortOptions: SelectOptionType[] = useMemo(
    () => [
      { value: SORT_NEWEST, label: filterText.sortNewest },
      { value: SORT_OLDEST, label: filterText.sortOldest },
      { value: SORT_READ_SHORT, label: filterText.sortReadShort },
      { value: SORT_READ_LONG, label: filterText.sortReadLong },
    ],
    [filterText]
  );

  const filteredPosts = useMemo(() => {
    let result = [...posts];

    if (category !== CATEGORY_ALL) {
      result = result.filter((post) => (post.category?.uz ?? post.category?.[language]) === category);
    }

    if (dateFrom) {
      const fromTime = new Date(dateFrom).getTime();
      result = result.filter((post) => new Date(post.date).getTime() >= fromTime);
    }

    if (dateTo) {
      const toTime = new Date(dateTo).getTime();
      result = result.filter((post) => new Date(post.date).getTime() <= toTime);
    }

    result.sort((a, b) => {
      switch (sort) {
        case SORT_OLDEST:
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case SORT_READ_SHORT:
          return a.readTime - b.readTime;
        case SORT_READ_LONG:
          return b.readTime - a.readTime;
        case SORT_NEWEST:
        default:
          return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    });

    return result;
  }, [posts, category, dateFrom, dateTo, sort, language]);

  const isFiltered =
    category !== CATEGORY_ALL || sort !== SORT_NEWEST || Boolean(dateFrom) || Boolean(dateTo);

  const handleReset = () => {
    setCategory(CATEGORY_ALL);
    setSort(SORT_NEWEST);
    setDateFrom("");
    setDateTo("");
  };

  return (
    <BlogSection dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="container">
        <BlogHero data-aos="fade-up">
          <BlogBadge>{text.badge}</BlogBadge>
          <BlogHeroTitle>{text.title}</BlogHeroTitle>
          <BlogHeroSubtitle>{text.subtitle}</BlogHeroSubtitle>
        </BlogHero>

        {!isLoading && !hasError && posts.length > 0 && (
          <FilterBar
            text={filterText}
            categoryOptions={categoryOptions}
            category={category}
            onCategoryChange={setCategory}
            sortOptions={sortOptions}
            sort={sort}
            onSortChange={setSort}
            dateFrom={dateFrom}
            onDateFromChange={setDateFrom}
            dateTo={dateTo}
            onDateToChange={setDateTo}
            isFiltered={isFiltered}
            onReset={handleReset}
            resultsCount={filteredPosts.length}
          />
        )}

        {isLoading && (
          <BlogGrid>
            {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
              <BlogSkeletonCard key={index}>
                <BlogSkeletonImage />
                <BlogSkeletonBody>
                  <BlogSkeletonLine $width="35%" $height="12px" />
                  <BlogSkeletonLine $width="90%" $height="22px" />
                  <BlogSkeletonLine $width="70%" $height="22px" />
                  <BlogSkeletonLine $width="100%" $height="14px" />
                  <BlogSkeletonLine $width="60%" $height="14px" />
                </BlogSkeletonBody>
              </BlogSkeletonCard>
            ))}
          </BlogGrid>
        )}

        {!isLoading && hasError && (
          <BlogEmptyState>
            <BlogEmptyTitle>{text.notFoundTitle}</BlogEmptyTitle>
            <BlogEmptyText>{text.notFoundText}</BlogEmptyText>
          </BlogEmptyState>
        )}

        {!isLoading && !hasError && filteredPosts.length === 0 && (
          <BlogEmptyState>
            <BlogEmptyTitle>{filterText.noResults}</BlogEmptyTitle>
            <BlogEmptyText>{filterText.noResultsHint}</BlogEmptyText>
          </BlogEmptyState>
        )}

        {!isLoading && !hasError && filteredPosts.length > 0 && (
          <BlogGrid>
            {filteredPosts.map((post, index) => (
              <BlogCard
                key={post.id}
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100}
              >
                <Link href={`/${language}/blog/${post.slug}`}>
                  <BlogCardImageWrapper>
                    <BlogCardImage
                      src={resolveBlogImage(post.images?.[0] ?? "")}
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
