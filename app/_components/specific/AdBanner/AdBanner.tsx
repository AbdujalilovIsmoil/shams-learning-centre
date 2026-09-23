"use client";

import { useEffect, useRef, useState } from "react";
import {
  AD_BANNER_HEIGHT_EVENT,
  AdBannerItem,
  fetchBanner,
  resolveBannerImage,
} from "./api";
import { AdBannerImage, AdBannerLabel, AdBannerLink } from "./style";

// Admin panelning "Banner" sahifasida yoqilgan bo'lsa, sayt eng tepasida
// (Header'dan ham yuqorida) ko'pi bilan 5 ta rasm navbat bilan (har biri o'z
// soniyasi bo'yicha) almashib turadi va bosilganda o'sha rasmning havolasiga
// olib boradi. Yoqilmagan yoki sozlanmagan bo'lsa hech narsa chizmaydi.
const AdBanner = () => {
  const [items, setItems] = useState<AdBannerItem[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    let active = true;

    fetchBanner().then((data) => {
      if (active) setItems(data);
    });

    return () => {
      active = false;
    };
  }, []);

  // Har bir rasm o'zining durationSeconds'i tugagach navbatdagisiga
  // o'tadi, oxirgisidan keyin boshiga qaytadi.
  useEffect(() => {
    if (items.length <= 1) return;

    const current = items[activeIndex] ?? items[0];
    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, Math.max(current.durationSeconds, 1) * 1000);

    return () => clearTimeout(timer);
  }, [items, activeIndex]);

  useEffect(() => {
    if (activeIndex >= items.length) setActiveIndex(0);
  }, [items, activeIndex]);

  // Header shu balandlikni bilib, o'zini banner ostiga joylashtirishi va
  // scroll qilinganda tepaga birga surilib "yopishib qolishi" uchun —
  // ResizeObserver ekran o'lchami o'zgarganda ham to'g'ri qiymatni ushlab
  // turadi (rasmlar almashsa ham balandlik CSS orqali doim bir xil).
  useEffect(() => {
    if (items.length === 0) {
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
  }, [items.length]);

  if (items.length === 0) return null;

  const current = items[activeIndex] ?? items[0];

  return (
    <AdBannerLink
      ref={linkRef}
      as={current.linkUrl ? "a" : "div"}
      href={current.linkUrl}
      target={current.linkUrl ? "_blank" : undefined}
      rel={current.linkUrl ? "noopener noreferrer" : undefined}
    >
      {items.map((item, index) => (
        <AdBannerImage
          key={`${item.imageUrl}-${index}`}
          src={resolveBannerImage(item.imageUrl)}
          alt="reklama"
          $active={index === activeIndex}
        />
      ))}
      <AdBannerLabel>REKLAMA</AdBannerLabel>
    </AdBannerLink>
  );
};

export default AdBanner;
