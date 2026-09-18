"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const API_URL = "https://api.shamsoquvmarkaz.uz";

// Admin panelda "Saytga jami tashriflar" statistikasi shu yerdan keladi —
// har bir sahifa ochilganda (ichki navigatsiya bilan almashganda ham)
// backendga bir marta hisoblash so'rovi yuboriladi.
const SiteViewTracker = () => {
  const pathname = usePathname();

  useEffect(() => {
    fetch(`${API_URL}/api/all-view`, { method: "POST" }).catch(() => {});
  }, [pathname]);

  return null;
};

export default SiteViewTracker;
