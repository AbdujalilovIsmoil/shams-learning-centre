import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// `next/navigation` o'rniga
export const usePathname = () => useLocation().pathname;

export const useRouter = () => {
  const navigate = useNavigate();

  return useMemo(
    () => ({
      push: (to: string) => navigate(to),
      replace: (to: string) => navigate(to, { replace: true }),
      back: () => navigate(-1),
      forward: () => navigate(1),
      refresh: () => window.location.reload(),
    }),
    [navigate]
  );
};
