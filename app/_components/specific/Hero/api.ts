export const HERO_STATS_API_URL = "https://api.shamsoquvmarkaz.uz";

export interface SiteStats {
  studentsCount: number;
  c1Students: number;
  b1Students: number;
  teachersTrained: number;
}

interface ApiEnvelope<T> {
  success: boolean;
  data: T;
}

// Admin panel "Statistika" sahifasida o'zgartirilgunga qadar (yoki backend
// vaqtincha ishlamay qolsa) ko'rsatiladigan qiymatlar.
export const DEFAULT_SITE_STATS: SiteStats = {
  studentsCount: 2000,
  c1Students: 110,
  b1Students: 500,
  teachersTrained: 20,
};

export const fetchSiteStats = async (): Promise<SiteStats> => {
  try {
    const response = await fetch(`${HERO_STATS_API_URL}/api/site-stats`, {
      cache: "no-store",
    });

    if (!response.ok) return DEFAULT_SITE_STATS;

    const payload: ApiEnvelope<SiteStats | null> = await response.json();
    if (!payload.data) return DEFAULT_SITE_STATS;

    return {
      studentsCount: payload.data.studentsCount,
      c1Students: payload.data.c1Students,
      b1Students: payload.data.b1Students,
      teachersTrained: payload.data.teachersTrained,
    };
  } catch {
    return DEFAULT_SITE_STATS;
  }
};
