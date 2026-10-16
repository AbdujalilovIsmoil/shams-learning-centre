const AUTOPLAY_DELAY = 4000;

const CAROUSEL_SELECTOR = ".blog-content-carousel";
const TRACK_SELECTOR = ".blog-content-carousel-track";

// Maqola matni (post.content) CKEditor'dan xom HTML sifatida keladi va
// dangerouslySetInnerHTML orqali React nazoratisiz DOM'ga qo'yiladi.
// Shu uchun ".blog-content-carousel" bloklarini interaktiv (strelka, nuqta,
// autoplay) qilish React state emas, balki shu funksiyadagi kabi to'g'ridan
// -to'g'ri DOM manipulyatsiyasi orqali amalga oshiriladi.
export const enhanceContentCarousels = (root: HTMLElement): (() => void) => {
  const carousels = Array.from(
    root.querySelectorAll<HTMLElement>(CAROUSEL_SELECTOR)
  );
  const cleanups: Array<() => void> = [];

  carousels.forEach((carousel) => {
    if (carousel.dataset.enhanced === "true") return;

    const track = carousel.querySelector<HTMLElement>(TRACK_SELECTOR);
    const slides = track ? Array.from(track.children) : [];
    if (!track || slides.length === 0) return;

    carousel.dataset.enhanced = "true";

    let index = 0;
    let dots: HTMLElement[] = [];

    const update = () => {
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((dot, dotIndex) =>
        dot.classList.toggle("is-active", dotIndex === index)
      );
    };

    const goTo = (next: number) => {
      index = (next + slides.length) % slides.length;
      update();
    };

    let prevBtn: HTMLButtonElement | null = null;
    let nextBtn: HTMLButtonElement | null = null;
    let dotsWrap: HTMLDivElement | null = null;
    let timer: ReturnType<typeof setInterval> | null = null;

    if (slides.length > 1) {
      prevBtn = document.createElement("button");
      prevBtn.type = "button";
      prevBtn.className = "blog-content-carousel-nav blog-content-carousel-prev";
      prevBtn.setAttribute("aria-label", "previous image");
      prevBtn.textContent = "‹";
      prevBtn.addEventListener("click", () => goTo(index - 1));

      nextBtn = document.createElement("button");
      nextBtn.type = "button";
      nextBtn.className = "blog-content-carousel-nav blog-content-carousel-next";
      nextBtn.setAttribute("aria-label", "next image");
      nextBtn.textContent = "›";
      nextBtn.addEventListener("click", () => goTo(index + 1));

      dotsWrap = document.createElement("div");
      dotsWrap.className = "blog-content-carousel-dots";
      dots = slides.map((_, dotIndex) => {
        const dot = document.createElement("span");
        dot.className = "blog-content-carousel-dot";
        dot.addEventListener("click", () => goTo(dotIndex));
        dotsWrap?.appendChild(dot);
        return dot;
      });

      carousel.append(prevBtn, nextBtn, dotsWrap);
      timer = setInterval(() => goTo(index + 1), AUTOPLAY_DELAY);
    }

    update();

    cleanups.push(() => {
      if (timer) clearInterval(timer);
      prevBtn?.remove();
      nextBtn?.remove();
      dotsWrap?.remove();
      delete carousel.dataset.enhanced;
    });
  });

  return () => cleanups.forEach((cleanup) => cleanup());
};
