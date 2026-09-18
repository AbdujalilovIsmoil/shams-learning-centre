import { Language } from "@/app/types";

export const BLOG_API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export type LangRecord = Record<Language, string>;

export interface BlogPost {
  id: string;
  slug: string;
  image: string;
  date: string;
  readTime: number;
  published: boolean;
  category: LangRecord;
  title: LangRecord;
  excerpt: LangRecord;
  content: LangRecord;
  createdAt: string;
  updatedAt: string;
}

interface ApiEnvelope<T> {
  success: boolean;
  data: T;
}

export const resolveBlogImage = (image: string) => {
  if (!image) return "";
  return image.startsWith("http") ? image : `${BLOG_API_URL}${image}`;
};

export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  const response = await fetch(`${BLOG_API_URL}/api/posts?published=true`, {
    cache: "no-store",
  });

  if (!response.ok) return [];

  const payload: ApiEnvelope<BlogPost[]> = await response.json();
  return payload.data ?? [];
};

export const fetchBlogPostBySlug = async (
  slug: string
): Promise<BlogPost | null> => {
  const response = await fetch(`${BLOG_API_URL}/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!response.ok) return null;

  const payload: ApiEnvelope<BlogPost> = await response.json();
  return payload.data ?? null;
};
