import { forwardRef, type ImgHTMLAttributes } from "react";

type StaticImport = { src: string; width?: number; height?: number };

export type ImageProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "width" | "height"
> & {
  src: string | StaticImport;
  alt: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
  fill?: boolean;
  priority?: boolean;
  quality?: number | `${number}`;
  placeholder?: string;
  blurDataURL?: string;
  unoptimized?: boolean;
  loader?: unknown;
  onLoadingComplete?: (img: HTMLImageElement) => void;
};

// `next/image` o'rniga: oddiy <img>, lekin Next.js'dagi kabi statik import
// obyektini ({ src, width, height }) ham, oddiy URL satrini ham qabul qiladi.
const Image = forwardRef<HTMLImageElement, ImageProps>(function Image(
  {
    src,
    width,
    height,
    fill,
    priority,
    style,
    loading,
    // quyidagilar faqat Next.js uchun — DOM'ga o'tmasligi kerak
    quality: _quality,
    placeholder: _placeholder,
    blurDataURL: _blurDataURL,
    unoptimized: _unoptimized,
    loader: _loader,
    onLoadingComplete,
    onLoad,
    ...rest
  },
  ref
) {
  const isStatic = typeof src === "object";
  const resolvedSrc = isStatic ? src.src : src;
  const resolvedWidth = width ?? (isStatic ? src.width : undefined);
  const resolvedHeight = height ?? (isStatic ? src.height : undefined);

  const fillStyle = fill
    ? { position: "absolute", inset: 0, width: "100%", height: "100%" }
    : undefined;

  return (
    <img
      {...rest}
      ref={ref}
      src={resolvedSrc}
      width={fill ? undefined : resolvedWidth}
      height={fill ? undefined : resolvedHeight}
      loading={loading ?? (priority ? "eager" : "lazy")}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      style={{ color: "transparent", ...fillStyle, ...style } as React.CSSProperties}
      onLoad={(e) => {
        onLoad?.(e);
        onLoadingComplete?.(e.currentTarget);
      }}
    />
  );
});

export default Image;
