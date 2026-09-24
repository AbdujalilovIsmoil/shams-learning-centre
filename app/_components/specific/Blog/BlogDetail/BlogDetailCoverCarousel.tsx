"use client";

import { useEffect, useState } from "react";
import { CarouselArrowLeftIcon, CarouselArrowRightIcon } from "@/public/images/svg";
import { resolveBlogImage } from "../api";
import {
  BlogDetailCover,
  BlogDetailCoverTrack,
  BlogDetailCoverSlide,
  BlogDetailCoverImage,
  BlogDetailCoverNav,
  BlogDetailCoverNavIcon,
  BlogDetailCoverDots,
  BlogDetailCoverDot,
} from "./style";

const AUTOPLAY_DELAY = 4000;

interface BlogDetailCoverCarouselProps {
  images: string[];
  alt: string;
}

const BlogDetailCoverCarousel = ({ images, alt }: BlogDetailCoverCarouselProps) => {
  const slides = images.filter(Boolean);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [images]);

  useEffect(() => {
    if (slides.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_DELAY);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goTo = (next: number) => {
    setIndex((next + slides.length) % slides.length);
  };

  if (slides.length === 0) return null;

  return (
    <BlogDetailCover>
      <BlogDetailCoverTrack $index={index} $count={slides.length}>
        {slides.map((image, slideIndex) => (
          <BlogDetailCoverSlide key={`${image}-${slideIndex}`} $count={slides.length}>
            <BlogDetailCoverImage
              src={resolveBlogImage(image)}
              alt={`${alt} ${slideIndex + 1}`}
            />
          </BlogDetailCoverSlide>
        ))}
      </BlogDetailCoverTrack>

      {slides.length > 1 && (
        <>
          <BlogDetailCoverNav
            type="button"
            className="blog-detail-cover-prev"
            aria-label="previous image"
            onClick={() => goTo(index - 1)}
          >
            <BlogDetailCoverNavIcon
              width={18}
              height={18}
              src={CarouselArrowLeftIcon}
              alt="arrow left icon"
            />
          </BlogDetailCoverNav>

          <BlogDetailCoverNav
            type="button"
            className="blog-detail-cover-next"
            aria-label="next image"
            onClick={() => goTo(index + 1)}
          >
            <BlogDetailCoverNavIcon
              width={18}
              height={18}
              src={CarouselArrowRightIcon}
              alt="arrow right icon"
            />
          </BlogDetailCoverNav>

          <BlogDetailCoverDots>
            {slides.map((_, dotIndex) => (
              <BlogDetailCoverDot
                key={dotIndex}
                $active={dotIndex === index}
                onClick={() => goTo(dotIndex)}
              />
            ))}
          </BlogDetailCoverDots>
        </>
      )}
    </BlogDetailCover>
  );
};

export default BlogDetailCoverCarousel;
