import { Language } from "@/app/types";

export const TESTIMONIALS_API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export type LangRecord = Record<Language, string>;

export interface TestimonialItem {
  id: string;
  author: string;
  avatar: string;
  rate: number;
  published: boolean;
  text: LangRecord;
}

interface ApiEnvelope<T> {
  success: boolean;
  data: T;
}

export const resolveTestimonialAvatar = (avatar: string) => {
  if (!avatar) return "";
  return avatar.startsWith("http")
    ? avatar
    : `${TESTIMONIALS_API_URL}${avatar}`;
};

export const fetchTestimonials = async (): Promise<TestimonialItem[]> => {
  try {
    const response = await fetch(
      `${TESTIMONIALS_API_URL}/api/testimonials?published=true`,
      { cache: "no-store" }
    );

    if (!response.ok) return [];

    const payload: ApiEnvelope<TestimonialItem[]> = await response.json();
    return payload.data ?? [];
  } catch {
    // Backend vaqtincha ishlamasa ham bo'lim sindirilmasin — bo'sh ro'yxat
    // qaytadi va Testimonials komponenti "hozircha fikrlar yo'q" holatini ko'rsatadi.
    return [];
  }
};
