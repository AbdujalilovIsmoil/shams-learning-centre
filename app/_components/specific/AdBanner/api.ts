export const AD_BANNER_API_URL = "https://api.shamsoquvmarkaz.uz";

// AdBanner o'z balandligini shu hodisa orqali xabar qiladi — Header shuni
// eshitib, o'zini banner ostiga joylashtiradi va scroll qilinganda tepaga
// "yopishib qolguncha" birga suriladi (Header.tsx'ga qarang).
export const AD_BANNER_HEIGHT_EVENT = "ad-banner:height";

interface ApiEnvelope<T> {
  success: boolean;
  data: T;
}

interface RawBannerItem {
  id?: number;
  imageUrl: string;
  linkUrl: string;
  durationSeconds: number;
  isEnabled: boolean;
}

interface RawBanner {
  isEnabled: boolean;
  items: RawBannerItem[];
}

export interface AdBannerItem {
  imageUrl: string;
  linkUrl?: string;
  durationSeconds: number;
}

export const resolveBannerImage = (imageUrl: string) =>
  imageUrl.startsWith("http") ? imageUrl : `${AD_BANNER_API_URL}${imageUrl}`;

// Admin panel "Banner" sahifasida yoqilgan va kamida bitta to'liq element
// bo'lgandagina ro'yxat qaytariladi — aks holda bo'sh, komponent hech narsa
// chizmaydi.
export const fetchBanner = async (): Promise<AdBannerItem[]> => {
  try {
    const response = await fetch(`${AD_BANNER_API_URL}/api/banner`, {
      cache: "no-store",
    });

    if (!response.ok) return [];

    const payload: ApiEnvelope<RawBanner | null> = await response.json();
    const data = payload.data;

    if (!data || !data.isEnabled || !Array.isArray(data.items)) {
      return [];
    }

    return data.items
      .filter((item) => item.isEnabled !== false && item.imageUrl)
      .map((item) => ({
        imageUrl: item.imageUrl,
        linkUrl: item.linkUrl || undefined,
        durationSeconds: item.durationSeconds > 0 ? item.durationSeconds : 5,
      }));
  } catch {
    return [];
  }
};
