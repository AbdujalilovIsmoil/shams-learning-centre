import type { Language } from "@/types";

// Ekran o'qish dasturlari uchun matnlar (aria-label va alt) — to'rt tilda.
interface A11yLabels {
  prev: string;
  next: string;
  carousel: string;
  closeMenu: string;
  toggleMenu: string;
  selectLanguage: string;
  chatClose: string;
  chatSend: string;
  chatMessages: string;
  mapAlt: string;
  aboutAlt: string;
  teachersAlt: string;
  successAlt: string;
  adAlt: string;
  socialNav: string;
  results: string;
}

const labels: Record<Language, A11yLabels> = {
  uz: {
    prev: "Oldingi",
    next: "Keyingi",
    carousel: "Karusel boshqaruvi",
    closeMenu: "Menyuni yopish",
    toggleMenu: "Menyuni ochish yoki yopish",
    selectLanguage: "Tilni tanlash",
    chatClose: "Chatni yopish",
    chatSend: "Xabarni yuborish",
    chatMessages: "Suhbat xabarlari",
    mapAlt: "Shams o'quv markazining xaritadagi joylashuvi",
    aboutAlt: "Shams o'quv markazida dars jarayoni",
    teachersAlt: "Shams o'quv markazi ustozlari",
    successAlt: "Shams o'quv markazining muvaffaqiyatli bitiruvchilari",
    adAlt: "Reklama",
    socialNav: "Ijtimoiy tarmoqlar",
    results: "Natijalar va fikrlar",
  },
  ru: {
    prev: "Назад",
    next: "Вперёд",
    carousel: "Управление каруселью",
    closeMenu: "Закрыть меню",
    toggleMenu: "Открыть или закрыть меню",
    selectLanguage: "Выбрать язык",
    chatClose: "Закрыть чат",
    chatSend: "Отправить сообщение",
    chatMessages: "Сообщения чата",
    mapAlt: "Расположение учебного центра «Шамс» на карте",
    aboutAlt: "Занятия в учебном центре «Шамс»",
    teachersAlt: "Преподаватели учебного центра «Шамс»",
    successAlt: "Успешные выпускники учебного центра «Шамс»",
    adAlt: "Реклама",
    socialNav: "Социальные сети",
    results: "Результаты и отзывы",
  },
  en: {
    prev: "Previous",
    next: "Next",
    carousel: "Carousel controls",
    closeMenu: "Close menu",
    toggleMenu: "Open or close menu",
    selectLanguage: "Select language",
    chatClose: "Close chat",
    chatSend: "Send message",
    chatMessages: "Chat messages",
    mapAlt: "Shams Learning Center location on the map",
    aboutAlt: "A lesson at Shams Learning Center",
    teachersAlt: "Teachers of Shams Learning Center",
    successAlt: "Successful graduates of Shams Learning Center",
    adAlt: "Advertisement",
    socialNav: "Social media",
    results: "Results and reviews",
  },
  ar: {
    prev: "السابق",
    next: "التالي",
    carousel: "عناصر التحكم في العرض",
    closeMenu: "إغلاق القائمة",
    toggleMenu: "فتح القائمة أو إغلاقها",
    selectLanguage: "اختيار اللغة",
    chatClose: "إغلاق الدردشة",
    chatSend: "إرسال الرسالة",
    chatMessages: "رسائل الدردشة",
    mapAlt: "موقع مركز شمس التعليمي على الخريطة",
    aboutAlt: "درس في مركز شمس التعليمي",
    teachersAlt: "معلمو مركز شمس التعليمي",
    successAlt: "خريجو مركز شمس التعليمي الناجحون",
    adAlt: "إعلان",
    socialNav: "وسائل التواصل الاجتماعي",
    results: "النتائج والآراء",
  },
};

export const getLabels = (lang: string | undefined): A11yLabels =>
  labels[(lang as Language) in labels ? (lang as Language) : "uz"];

// Swiper'ning ichki a11y moduli (slaydlar uchun aria-label va xabarlar)
const slideLabel: Record<Language, string> = {
  uz: "{{slidesLength}} tadan {{index}}-slayd",
  ru: "Слайд {{index}} из {{slidesLength}}",
  en: "Slide {{index}} of {{slidesLength}}",
  ar: "الشريحة {{index}} من {{slidesLength}}",
};

export const getSwiperA11y = (lang: string | undefined) => {
  const l = getLabels(lang);
  const key = ((lang as Language) in slideLabel ? lang : "uz") as Language;

  return {
    enabled: true,
    prevSlideMessage: l.prev,
    nextSlideMessage: l.next,
    slideLabelMessage: slideLabel[key],
    containerMessage: l.carousel,
  };
};
