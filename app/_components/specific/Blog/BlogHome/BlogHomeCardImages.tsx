"use client";

import { useEffect, useState } from "react";
import { CarouselArrowLeftIcon, CarouselArrowRightIcon } from "@/public/images/svg";
import { resolveBlogImage } from "../api";
import {
  BlogHomeCardImage,
  BlogHomeCardImageTrack,
  BlogHomeCardImageSlide,
  BlogHomeCardImageNav,
  BlogHomeCardImageNavIcon,
  BlogHomeCardImageDots,
  BlogHomeCardImageDot,
} from "./style";

const AUTOPLAY_DELAY = 3500;

interface BlogHomeCardImagesProps {
  images: string[];
  alt: string;
}

const BlogHomeCardImages = ({ images, alt }: BlogHomeCardImagesProps) => {
  const slides = images.length > 0 ? images : [""];
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

  const goTo = (event: React.MouseEvent, next: number) => {
    event.preventDefault();
    event.stopPropagation();
    setIndex((next + slides.length) % slides.length);
  };

  return (
    <>
      <BlogHomeCardImageTrack $index={index} $count={slides.length}>
        {slides.map((image, slideIndex) => (
          <BlogHomeCardImageSlide key={`${image}-${slideIndex}`} $count={slides.length}>
            <BlogHomeCardImage
              src={resolveBlogImage(image)}
              alt={`${alt} ${slideIndex + 1}`}
            />
          </BlogHomeCardImageSlide>
        ))}
      </BlogHomeCardImageTrack>

      {slides.length > 1 && (
        <>
          <BlogHomeCardImageNav
            type="button"
            className="blog-home-card-image-prev"
            aria-label="previous image"
            onClick={(event) => goTo(event, index - 1)}
          >
            <BlogHomeCardImageNavIcon
              width={14}
              height={14}
              src={CarouselArrowLeftIcon}
              alt="arrow left icon"
            />
          </BlogHomeCardImageNav>

          <BlogHomeCardImageNav
            type="button"
            className="blog-home-card-image-next"
            aria-label="next image"
            onClick={(event) => goTo(event, index + 1)}
          >
            <BlogHomeCardImageNavIcon
              width={14}
              height={14}
              src={CarouselArrowRightIcon}
              alt="arrow right icon"
            />
          </BlogHomeCardImageNav>

          <BlogHomeCardImageDots>
            {slides.map((_, dotIndex) => (
              <BlogHomeCardImageDot
                key={dotIndex}
                $active={dotIndex === index}
                onClick={(event) => goTo(event, dotIndex)}
              />
            ))}
          </BlogHomeCardImageDots>
        </>
      )}
    </>
  );
};

export default BlogHomeCardImages;
