import { Language } from "@/app/types";

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
