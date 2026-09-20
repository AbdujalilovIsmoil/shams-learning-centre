export const AD_BANNER_API_URL = "https://api.shamsoquvmarkaz.uz";

// AdBanner o'z balandligini shu hodisa orqali xabar qiladi — Header shuni
// eshitib, o'zini banner ostiga joylashtiradi va scroll qilinganda tepaga
// "yopishib qolguncha" birga suriladi (Header.tsx'ga qarang).
export const AD_BANNER_HEIGHT_EVENT = "ad-banner:height";

interface ApiEnvelope<T> {
  success: boolean;
  data: T;
}

interface RawBanner {
  imageUrl: string | null;
  linkUrl: string | null;
  isEnabled: boolean;
}

export interface AdBannerData {
  imageUrl: string;
  linkUrl: string;
}

export const resolveBannerImage = (imageUrl: string) =>
  imageUrl.startsWith("http") ? imageUrl : `${AD_BANNER_API_URL}${imageUrl}`;

// Admin panel "Banner" sahifasida yoqilgan va rasm/havolasi to'liq bo'lgandagina
// banner qaytariladi — aks holda `null`, komponent hech narsa chizmaydi.
export const fetchBanner = async (): Promise<AdBannerData | null> => {
  try {
    const response = await fetch(`${AD_BANNER_API_URL}/api/banner`, {
      cache: "no-store",
    });

    if (!response.ok) return null;

    const payload: ApiEnvelope<RawBanner | null> = await response.json();
    const data = payload.data;

    if (!data || !data.isEnabled || !data.imageUrl || !data.linkUrl) {
      return null;
    }

    return { imageUrl: data.imageUrl, linkUrl: data.linkUrl };
  } catch {
    return null;
  }
};
