"use client";

import { useEffect, useState } from "react";
import { AdBannerData, fetchBanner, resolveBannerImage } from "./api";
import { AdBannerImage, AdBannerLink } from "./style";

// Admin panelning "Banner" sahifasida yoqilgan bo'lsa, sayt eng tepasida
// (Header'dan ham yuqorida) ko'rinadi va bosilganda kiritilgan havolaga olib
// boradi. Yoqilmagan yoki sozlanmagan bo'lsa hech narsa chizmaydi.
const AdBanner = () => {
  const [banner, setBanner] = useState<AdBannerData | null>(null);

  useEffect(() => {
    let active = true;

    fetchBanner().then((data) => {
      if (active) setBanner(data);
    });

    return () => {
      active = false;
    };
  }, []);

  if (!banner) return null;

  return (
    <AdBannerLink
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
