import { forwardRef, type AnchorHTMLAttributes } from "react";
import { Link as RouterLink } from "react-router-dom";

export type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  replace?: boolean;
  scroll?: boolean;
  prefetch?: boolean | null;
};

const isInternal = (href: string) => href.startsWith("/") && !href.startsWith("//");

// `next/link` o'rniga: ichki yo'llar react-router orqali, tashqi havolalar,
// `#anchor`, `mailto:` va `tel:` esa oddiy <a> orqali ishlaydi.
const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { href, replace, scroll: _scroll, prefetch: _prefetch, ...rest },
  ref
) {
  if (isInternal(href)) {
    return <RouterLink ref={ref} to={href} replace={replace} {...rest} />;
  }

  return <a ref={ref} href={href} {...rest} />;
});

export default Link;
