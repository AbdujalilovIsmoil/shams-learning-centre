"use client";

import { useEffect, useRef, useState } from "react";
import {
  AD_BANNER_HEIGHT_EVENT,
  AdBannerData,
  fetchBanner,
  resolveBannerImage,
} from "./api";
import { AdBannerImage, AdBannerLink } from "./style";

// Admin panelning "Banner" sahifasida yoqilgan bo'lsa, sayt eng tepasida
// (Header'dan ham yuqorida) ko'rinadi va bosilganda kiritilgan havolaga olib
// boradi. Yoqilmagan yoki sozlanmagan bo'lsa hech narsa chizmaydi.
const AdBanner = () => {
  const [banner, setBanner] = useState<AdBannerData | null>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    let active = true;

    fetchBanner().then((data) => {
      if (active) setBanner(data);
    });

    return () => {
      active = false;
    };
  }, []);

  // Header shu balandlikni bilib, o'zini banner ostiga joylashtirishi va
  // scroll qilinganda tepaga birga surilib "yopishib qolishi" uchun —
  // ResizeObserver rasm yuklangach/ekran o'lchami o'zgarganda ham to'g'ri
  // qiymatni ushlab turadi.
  useEffect(() => {
    if (!banner) {
      window.dispatchEvent(
        new CustomEvent(AD_BANNER_HEIGHT_EVENT, { detail: 0 })
      );
      return;
    }

    const el = linkRef.current;
    if (!el) return;

    const notify = () => {
      window.dispatchEvent(
        new CustomEvent(AD_BANNER_HEIGHT_EVENT, { detail: el.offsetHeight })
      );
    };

    notify();

    const observer = new ResizeObserver(notify);
    observer.observe(el);

    return () => {
      observer.disconnect();
      window.dispatchEvent(
        new CustomEvent(AD_BANNER_HEIGHT_EVENT, { detail: 0 })
      );
    };
  }, [banner]);

  if (!banner) return null;

  return (
    <AdBannerLink
      ref={linkRef}
      href={banner.linkUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <AdBannerImage
        src={resolveBannerImage(banner.imageUrl)}
        alt="reklama"
      />
    </AdBannerLink>
  );
};

export default AdBanner;
