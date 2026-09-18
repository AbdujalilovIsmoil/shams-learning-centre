import { Language } from "@/app/types";

interface BlogHomeText {
  badge: string;
  title: string;
  subtitle: string;
  viewAll: string;
  minRead: string;
  readMore: string;
  emptyTitle: string;
  emptyText: string;
}

export const blogHomeText: Record<Language, BlogHomeText> = {
  uz: {
    badge: "Shams blog",
    title: "So‘nggi maqolalar",
    subtitle:
      "Arab tilini o‘rganish va ta’lim metodlari haqida foydali maslahatlar",
    viewAll: "Barcha maqolalarni ko‘rish",
    minRead: "daqiqa o‘qish",
    readMore: "Batafsil",
    emptyTitle: "Tez orada yangi maqolalar",
    emptyText: "Hozircha blog maqolalari qo‘shilmagan, tez orada paydo bo‘ladi",
  },
  ru: {
    badge: "Блог Shams",
    title: "Последние статьи",
    subtitle:
      "Полезные советы об изучении арабского языка и методах обучения",
    viewAll: "Смотреть все статьи",
    minRead: "мин. чтения",
    readMore: "Читать",
    emptyTitle: "Новые статьи скоро появятся",
    emptyText: "Пока статей блога нет, но они появятся совсем скоро",
  },
  en: {
    badge: "Shams blog",
    title: "Latest articles",
    subtitle: "Helpful tips about learning Arabic and teaching methods",
    viewAll: "View all articles",
    minRead: "min read",
    readMore: "Read more",
    emptyTitle: "New articles coming soon",
    emptyText: "There are no blog articles yet, check back soon",
  },
  ar: {
    badge: "مدونة شمس",
    title: "أحدث المقالات",
    subtitle: "نصائح مفيدة حول تعلّم اللغة العربية وطرق التدريس",
    viewAll: "عرض جميع المقالات",
    minRead: "دقيقة قراءة",
    readMore: "قراءة",
    emptyTitle: "مقالات جديدة قريباً",
    emptyText: "لا توجد مقالات بعد، ترقّب المزيد قريباً",
  },
};

interface BlogFilterText {
  filterLabel: string;
  categoryLabel: string;
  categoryAll: string;
  sortLabel: string;
  sortNewest: string;
  sortOldest: string;
  sortReadShort: string;
  sortReadLong: string;
  dateFromLabel: string;
  dateToLabel: string;
  reset: string;
  resultsFound: string;
  noResults: string;
  noResultsHint: string;
}

export const blogFilterText: Record<Language, BlogFilterText> = {
  uz: {
    filterLabel: "Filtrlash",
    categoryLabel: "Kategoriya",
    categoryAll: "Barcha kategoriyalar",
    sortLabel: "Saralash",
    sortNewest: "Avval yangilari",
    sortOldest: "Avval eskilari",
    sortReadShort: "O‘qish vaqti: qisqa",
    sortReadLong: "O‘qish vaqti: uzun",
    dateFromLabel: "Sanadan",
    dateToLabel: "Sanagacha",
    reset: "Tozalash",
    resultsFound: "ta maqola topildi",
    noResults: "Hech qanday maqola topilmadi",
    noResultsHint: "Filtrlarni o‘zgartirib qayta urinib ko‘ring",
  },
  ru: {
    filterLabel: "Фильтр",
    categoryLabel: "Категория",
    categoryAll: "Все категории",
    sortLabel: "Сортировка",
    sortNewest: "Сначала новые",
    sortOldest: "Сначала старые",
    sortReadShort: "Время чтения: короткое",
    sortReadLong: "Время чтения: долгое",
    dateFromLabel: "С даты",
    dateToLabel: "По дату",
    reset: "Сбросить",
    resultsFound: "статей найдено",
    noResults: "Статьи не найдены",
    noResultsHint: "Попробуйте изменить параметры фильтра",
  },
  en: {
    filterLabel: "Filters",
    categoryLabel: "Category",
    categoryAll: "All categories",
    sortLabel: "Sort by",
    sortNewest: "Newest first",
    sortOldest: "Oldest first",
    sortReadShort: "Read time: short",
    sortReadLong: "Read time: long",
    dateFromLabel: "From date",
    dateToLabel: "To date",
    reset: "Reset",
    resultsFound: "articles found",
    noResults: "No articles found",
    noResultsHint: "Try adjusting the filters and search again",
  },
  ar: {
    filterLabel: "تصفية",
    categoryLabel: "الفئة",
    categoryAll: "جميع الفئات",
    sortLabel: "ترتيب حسب",
    sortNewest: "الأحدث أولاً",
    sortOldest: "الأقدم أولاً",
    sortReadShort: "وقت القراءة: قصير",
    sortReadLong: "وقت القراءة: طويل",
    dateFromLabel: "من تاريخ",
    dateToLabel: "إلى تاريخ",
    reset: "إعادة تعيين",
    resultsFound: "مقالة موجودة",
    noResults: "لم يتم العثور على مقالات",
    noResultsHint: "حاول تغيير عوامل التصفية والمحاولة مرة أخرى",
  },
};

interface BlogPageText {
  badge: string;
  title: string;
  subtitle: string;
  readMore: string;
  backToBlog: string;
  minRead: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  relatedTitle: string;
  notFoundTitle: string;
  notFoundText: string;
}

export const blogPageText: Record<Language, BlogPageText> = {
  uz: {
    badge: "Shams blog",
    title: "Bilim va tajriba xazinasi",
    subtitle:
      "Arab tilini o‘rganish, ta’lim metodlari va markazimiz yangiliklari haqida foydali maqolalar",
    readMore: "Batafsil o‘qish",
    backToBlog: "Blogga qaytish",
    minRead: "daqiqa o‘qish",
    ctaTitle: "Bilimga chanqoqmisiz?",
    ctaText:
      "Bizning kurslarimizga yoziling va o‘z sur’atingizda arab tilini mukammal egallang.",
    ctaButton: "Kursga yozilish",
    relatedTitle: "O‘xshash maqolalar",
    notFoundTitle: "Maqola topilmadi",
    notFoundText:
      "Siz izlagan maqola mavjud emas yoki o‘chirilgan bo‘lishi mumkin.",
  },
  ru: {
    badge: "Блог Shams",
    title: "Сокровищница знаний и опыта",
    subtitle:
      "Полезные статьи об изучении арабского языка, методах обучения и новостях нашего центра",
    readMore: "Читать далее",
    backToBlog: "Вернуться в блог",
    minRead: "мин. чтения",
    ctaTitle: "Жаждете знаний?",
    ctaText:
      "Запишитесь на наши курсы и в своём темпе в совершенстве овладейте арабским языком.",
    ctaButton: "Записаться на курс",
    relatedTitle: "Похожие статьи",
    notFoundTitle: "Статья не найдена",
    notFoundText:
      "Статья, которую вы ищете, не существует или была удалена.",
  },
  en: {
    badge: "Shams blog",
    title: "A treasury of knowledge and experience",
    subtitle:
      "Helpful articles about learning Arabic, teaching methods, and news from our center",
    readMore: "Read more",
    backToBlog: "Back to blog",
    minRead: "min read",
    ctaTitle: "Thirsty for knowledge?",
    ctaText:
      "Enroll in our courses and master Arabic at your own pace with expert guidance.",
    ctaButton: "Enroll now",
    relatedTitle: "Related articles",
    notFoundTitle: "Article not found",
    notFoundText: "The article you are looking for does not exist or was removed.",
  },
  ar: {
    badge: "مدونة شمس",
    title: "خزانة المعرفة والخبرة",
    subtitle:
      "مقالات مفيدة حول تعلّم اللغة العربية وطرق التدريس وأخبار مركزنا",
    readMore: "قراءة المزيد",
    backToBlog: "العودة إلى المدونة",
    minRead: "دقيقة قراءة",
    ctaTitle: "هل أنت متعطش للمعرفة؟",
    ctaText:
      "سجّل في دوراتنا وأتقن اللغة العربية بالوتيرة التي تناسبك مع إرشاد الخبراء.",
    ctaButton: "التسجيل الآن",
    relatedTitle: "مقالات ذات صلة",
    notFoundTitle: "المقالة غير موجودة",
    notFoundText: "المقالة التي تبحث عنها غير موجودة أو تم حذفها.",
  },
};
