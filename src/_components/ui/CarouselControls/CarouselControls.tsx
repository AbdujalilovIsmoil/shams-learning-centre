import {
  CarouselSmallArrowIcon,
  CarouselArrowLeftIcon,
  CarouselArrowRightIcon,
} from "@/assets/images/svg";
import { getLabels } from "@/a11y/labels";
import CarouselDots from "../CarouselDots";
import {
  Controls,
  ControlIcon,
  ControlButton,
  LargeControlIcon,
  LargeControlButton,
  LargeControlContainer,
} from "./style";

interface CarouselControlsProps {
  total: number;
  active: number;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
  prevDisabled?: boolean;
  nextDisabled?: boolean;
  // ekran o'qish dasturlari uchun tugma yozuvlari tili
  language?: string;
  // "large" — "Guruhlar uchun tariflar" qismidagi katta strelkalar bilan bir xil
  variant?: "small" | "large";
  hidden?: boolean;
  marginTop?: number;
}

// Strelkalar va ular orasidagi nuqtalar.
const CarouselControls = ({
  total,
  active,
  onPrev,
  onNext,
  onSelect,
  prevDisabled = false,
  nextDisabled = false,
  language,
  variant = "small",
  hidden = false,
  marginTop = 44,
}: CarouselControlsProps) => {
  const isLarge = variant === "large";
  const labels = getLabels(language);

  return (
    <Controls
      $marginTop={marginTop}
      $hidden={hidden}
      $large={isLarge}
      role="group"
      aria-label={labels.carousel}
    >
      {isLarge ? (
        <LargeControlContainer $disabled={prevDisabled}>
          <LargeControlButton
            type="button"
            aria-label={labels.prev}
            disabled={prevDisabled}
            onClick={onPrev}
          >
            <LargeControlIcon width={60} height={60} alt="" src={CarouselArrowLeftIcon} />
          </LargeControlButton>
        </LargeControlContainer>
      ) : (
        <ControlButton
          type="button"
          aria-label={labels.prev}
          disabled={prevDisabled}
          onClick={onPrev}
        >
          <ControlIcon width={18} height={18} alt="" src={CarouselSmallArrowIcon} />
        </ControlButton>
      )}

      <CarouselDots total={total} active={active} onSelect={onSelect} />

      {isLarge ? (
        <LargeControlContainer $disabled={nextDisabled}>
          <LargeControlButton
            type="button"
            aria-label={labels.next}
            disabled={nextDisabled}
            onClick={onNext}
          >
            <LargeControlIcon width={60} height={60} alt="" src={CarouselArrowRightIcon} />
          </LargeControlButton>
        </LargeControlContainer>
      ) : (
        <ControlButton
          type="button"
          aria-label={labels.next}
          disabled={nextDisabled}
          onClick={onNext}
        >
          <ControlIcon width={18} height={18} alt="" src={CarouselSmallArrowIcon} />
        </ControlButton>
      )}
    </Controls>
  );
};

export default CarouselControls;
