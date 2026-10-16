import { useEffect, useRef, useState } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import {
  Dot,
  Track,
  Viewport,
  DOT_SLOT,
  DOT_VISIBLE,
} from "./style";

interface CarouselDotsProps {
  total: number;
  active: number;
  onSelect: (index: number) => void;
}

// Swiper holatidan nuqtalar uchun kerakli qiymatlarni oladi: loop yoqilgan
// bo'lsa har bir slayd bitta nuqta, aks holda swiper'ning scroll nuqtalari.
export const getDotsState = (swiper: SwiperInstance, itemsCount: number) => {
  const isLoop = Boolean(swiper.params.loop);

  return {
    active: isLoop ? swiper.realIndex : swiper.snapIndex,
    total: isLoop ? itemsCount : swiper.snapGrid.length,
    // loop'da aylanib o'tiladi, shuning uchun chekka (disabled) holat yo'q
    isBeginning: !isLoop && swiper.isBeginning,
    isEnd: !isLoop && swiper.isEnd,
  };
};

// Ko'p slayd bo'lsa ham bir vaqtda ~5 ta nuqta ko'rinadi. Faol nuqta doim
// o'rtada turadi, slayd almashganda butun qator aynan bitta nuqtaga siljiydi.
const CarouselDots = ({ total, active, onSelect }: CarouselDotsProps) => {
  const [isInstant, setIsInstant] = useState(false);
  const prevActive = useRef(active);

  // oxirgidan birinchiga (yoki teskari) aylanib o'tganda qator butun uzunlikni
  // sirpanib o'tmasligi uchun shu bir marta animatsiyasiz siljiydi
  useEffect(() => {
    const isWrap =
      total > 2 && Math.abs(active - prevActive.current) === total - 1;
    prevActive.current = active;

    if (!isWrap) return;

    setIsInstant(true);
    const frame = requestAnimationFrame(() =>
      requestAnimationFrame(() => setIsInstant(false))
    );

    return () => cancelAnimationFrame(frame);
  }, [active, total]);

  if (total <= 1) return null;

  const offset = (Math.floor(DOT_VISIBLE / 2) - active) * DOT_SLOT;

  return (
    <Viewport>
      <Track
        style={{
          transform: `translateX(${offset}px)`,
          transitionDuration: isInstant ? "0s" : undefined,
        }}
      >
        {Array.from({ length: total }, (_, index) => (
          <Dot
            key={index}
            type="button"
            aria-label={`${index + 1} / ${total}`}
            aria-current={index === active ? "true" : undefined}
            $distance={Math.abs(index - active)}
            onClick={() => onSelect(index)}
          />
        ))}
      </Track>
    </Viewport>
  );
};

export default CarouselDots;
