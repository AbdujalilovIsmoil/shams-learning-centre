import {
  CourseImageAr1,
  CourseImageAr2,
  CourseImageAr3,
  CourseImageEn1,
  CourseImageEn2,
  CourseImageEn3,
  CourseImageRu1,
  CourseImageRu2,
  CourseImageRu3,
  CourseImageUz1,
  CourseImageUz2,
  CourseImageUz3,
} from "@/public/images/jpg";
import {
  PremiumCoursesContentSpan,
  PremiumCoursesContentTitle,
} from "../style";

export const translations = {
  uz: {
    title: (
      <PremiumCoursesContentTitle>
        <PremiumCoursesContentSpan>Premium</PremiumCoursesContentSpan>{" "}
        individual kurs tariflari
      </PremiumCoursesContentTitle>
    ),
    paragraph: (
      <>
        Har bir o‘quvchiga individual yondashuv, yuqori sifat va qulaylik. Bilim
        olishni yanada samarali va qulay qilish uchun premium kurslarimizni
        tanlang.
      </>
    ),
  },

  ru: {
    title: (
      <PremiumCoursesContentTitle>
        <PremiumCoursesContentSpan>Премиум</PremiumCoursesContentSpan>{" "}
        индивидуальные тарифы курсов
      </PremiumCoursesContentTitle>
    ),
    paragraph: (
      <>
        Индивидуальный подход к каждому ученику, высокое качество и комфорт.
        Выберите наши премиум-курсы, чтобы сделать обучение ещё более
        эффективным и удобным.
      </>
    ),
  },

  en: {
    title: (
      <PremiumCoursesContentTitle>
        <PremiumCoursesContentSpan>Premium</PremiumCoursesContentSpan>{" "}
        individual course plans
      </PremiumCoursesContentTitle>
    ),
    paragraph: (
      <>
        Individual approach for each student, high quality, and convenience.
        Choose our premium courses to make your learning even more effective and
        comfortable.
      </>
    ),
  },

  ar: {
    title: (
      <PremiumCoursesContentTitle dir="rtl">
        <PremiumCoursesContentSpan>بريميوم</PremiumCoursesContentSpan> خطط
        الدورات الفردية
      </PremiumCoursesContentTitle>
    ),
    paragraph: (
      <>
        نهج فردي لكل طالب، جودة عالية وراحة. اختر دوراتنا البريميوم لجعل عملية
        التعلم أكثر فعالية وراحة.
      </>
    ),
  },
};

export const lessonType = {
  uz: "Bu tariflar individual (1:1) shakldagi ta’lim uchun! Guruhda o‘qish narxlari alohida bo‘limda keltirilgan.",
  ru: "Данные тарифы предназначены для индивидуальных (1:1) занятий! Цены на обучение в группе указаны в отдельном разделе.",
  en: "These plans are for individual (1:1) lessons! Prices for group lessons are provided in a separate section.",
  ar: "هذه الأسعار مخصصة للدروس الفردية (1:1)! أسعار الدروس الجماعية مذكورة في قسم منفصل.",
};

export const contactUs = {
  ar: "تواصل معنا",
  en: "Contact us",
  ru: "Свяжитесь с нами",
  uz: "Biz bilan bog‘laning",
};

export const premiumCourses = {
  uz: [
    {
      id: 1,
      dollar: "$132",
      image: CourseImageUz1,
      soum: "1 700 000 so’m",
      courseType: "Yengil tarif",
      data: [
        {
          id: 1,
          text: "1 oyda 15 ta onlayn dars. Har bir dars 40 daqiqa",
        },
        {
          id: 2,
          text: "40 daqiqa dars yozib olinmaydi bu tarifda",
        },
        {
          id: 3,
          text: "Darslar kunlarga emas, soniga qarab hisoblanadi",
        },
      ],
    },
    {
      id: 2,
      dollar: "$177.33",
      image: CourseImageUz2,
      soum: "2 300 000 so’m",
      courseType: "O‘rta tarif",
      data: [
        {
          id: 1,
          text: "1 oyda 20 ta onlayn dars. Har bir dars 40 daqiqa",
        },
        {
          id: 2,
          text: "40 daqiqa dars yozib olinmaydi bu tarifda",
        },
        {
          id: 3,
          text: "Darslar soni bilan hisoblanadi, kun bilan emas",
        },
        {
          id: 4,
          text: "Testlar va pdf kitoblar beriladi va video darslar yozib olinadi.",
        },
      ],
    },
    {
      id: 3,
      dollar: "$215.88",
      image: CourseImageUz3,
      soum: "2 800 000 so’m",
      courseType: "Katta tarif",
      data: [
        {
          id: 1,
          text: "1 oyda 25 ta onlayn dars. Har bir dars 40 daqiqa",
        },
        {
          id: 2,
          text: "Qo‘shimcha materiallar, testlar va video yozuvlar mavjud",
        },
        {
          id: 3,
          text: "Bizda darslar aniq son bilan belgilanadi",
        },
      ],
    },
    {
      id: 4,
      dollar: "$132",
      image: CourseImageUz1,
      soum: "1 700 000 so’m",
      courseType: "Yengil tarif",
      data: [
        {
          id: 1,
          text: "1 oyda 15 ta onlayn dars. Har bir dars 40 daqiqa",
        },
        {
          id: 2,
          text: "40 daqiqa dars yozib olinmaydi bu tarifda",
        },
        {
          id: 3,
          text: "Darslar kunlarga emas, soniga qarab hisoblanadi",
        },
      ],
    },
    {
      id: 5,
      dollar: "$177.33",
      image: CourseImageUz2,
      soum: "2 300 000 so’m",
      courseType: "O‘rta tarif",
      data: [
        {
          id: 1,
          text: "1 oyda 20 ta onlayn dars. Har bir dars 40 daqiqa",
        },
        {
          id: 2,
          text: "40 daqiqa dars yozib olinmaydi bu tarifda",
        },
        {
          id: 3,
          text: "Darslar soni bilan hisoblanadi, kun bilan emas",
        },
        {
          id: 4,
          text: "Testlar va pdf kitoblar beriladi va video darslar yozib olinadi.",
        },
      ],
    },
    {
      id: 6,
      dollar: "$215.88",
      image: CourseImageUz3,
      soum: "2 800 000 so’m",
      courseType: "Katta tarif",
      data: [
        {
          id: 1,
          text: "1 oyda 25 ta onlayn dars. Har bir dars 40 daqiqa",
        },
        {
          id: 2,
          text: "Qo‘shimcha materiallar, testlar va video yozuvlar mavjud",
        },
        {
          id: 3,
          text: "Bizda darslar aniq son bilan belgilanadi",
        },
      ],
    },
  ],
  ru: [
    {
      id: 1,
      dollar: "$132",
      image: CourseImageRu1,
      soum: "1 700 000 сум",
      courseType: "Лёгкий тариф",
      data: [
        {
          id: 1,
          text: "15 онлайн-уроков в месяц. Каждый урок длится 40 минут.",
        },
        { id: 2, text: "40-минутные уроки не записываются в этом тарифе." },
        {
          id: 3,
          text: "Занятия рассчитываются по количеству, а не по дням.",
        },
      ],
    },
    {
      id: 2,
      dollar: "$177.33",
      image: CourseImageRu2,
      soum: "2 300 000 сум",
      courseType: "Средний тариф",
      data: [
        { id: 1, text: "20 онлайн-уроков в месяц. Каждый урок 40 минут." },
        { id: 2, text: "40-минутные уроки не записываются в этом тарифе." },
        { id: 3, text: "Уроки считаются по количеству, а не по дням." },
        {
          id: 4,
          text: "Предоставляются тесты, PDF-книги, а также видеоуроки записываются.",
        },
      ],
    },
    {
      id: 3,
      dollar: "$215.88",
      image: CourseImageRu3,
      soum: "2 800 000 сум",
      courseType: "Полный тариф",
      data: [
        { id: 1, text: "25 онлайн-уроков в месяц. Каждый урок 40 минут." },
        {
          id: 2,
          text: "Включены дополнительные материалы, тесты и видеозаписи.",
        },
        { id: 3, text: "У нас уроки определяются по точному количеству." },
      ],
    },
    {
      id: 4,
      dollar: "$132",
      image: CourseImageRu1,
      soum: "1 700 000 сум",
      courseType: "Лёгкий тариф",
      data: [
        {
          id: 1,
          text: "15 онлайн-уроков в месяц. Каждый урок длится 40 минут.",
        },
        { id: 2, text: "40-минутные уроки не записываются в этом тарифе." },
        {
          id: 3,
          text: "Занятия рассчитываются по количеству, а не по дням.",
        },
      ],
    },
    {
      id: 5,
      dollar: "$177.33",
      image: CourseImageRu2,
      soum: "2 300 000 сум",
      courseType: "Средний тариф",
      data: [
        { id: 1, text: "20 онлайн-уроков в месяц. Каждый урок 40 минут." },
        { id: 2, text: "40-минутные уроки не записываются в этом тарифе." },
        { id: 3, text: "Уроки считаются по количеству, а не по дням." },
        {
          id: 4,
          text: "Предоставляются тесты, PDF-книги, а также видеоуроки записываются.",
        },
      ],
    },
    {
      id: 6,
      dollar: "$215.88",
      image: CourseImageRu3,
      soum: "2 800 000 сум",
      courseType: "Полный тариф",
      data: [
        { id: 1, text: "25 онлайн-уроков в месяц. Каждый урок 40 минут." },
        {
          id: 2,
          text: "Включены дополнительные материалы, тесты и видеозаписи.",
        },
        { id: 3, text: "У нас уроки определяются по точному количеству." },
      ],
    },
  ],
  en: [
    {
      id: 1,
      dollar: "$132",
      soum: "1,700,000 UZS",
      image: CourseImageEn1,
      courseType: "Basic Plan",
      data: [
        {
          id: 1,
          text: "15 online lessons per month. Each lesson lasts 40 minutes.",
        },
        { id: 2, text: "Lessons are not recorded in this plan." },
        { id: 3, text: "Lessons are counted by number, not by days." },
      ],
    },
    {
      id: 2,
      dollar: "$177.33",
      image: CourseImageEn2,
      soum: "2,300,000 UZS",
      courseType: "Standard Plan",
      data: [
        {
          id: 1,
          text: "20 online lessons per month. Each lesson lasts 40 minutes.",
        },
        { id: 2, text: "Lessons are not recorded in this plan." },
        { id: 3, text: "Lessons are counted by number, not by days." },
        {
          id: 4,
          text: "Includes tests, PDF books, and recorded video lessons.",
        },
      ],
    },
    {
      id: 3,
      dollar: "$215.88",
      image: CourseImageEn3,
      soum: "2,800,000 UZS",
      courseType: "Premium Plan",
      data: [
        {
          id: 1,
          text: "25 online lessons per month. Each lesson lasts 40 minutes.",
        },
        {
          id: 2,
          text: "Includes extra materials, tests, and video recordings.",
        },
        {
          id: 3,
          text: "Lessons are defined by exact number, not by schedule.",
        },
      ],
    },
    {
      id: 4,
      dollar: "$132",
      soum: "1,700,000 UZS",
      image: CourseImageEn1,
      courseType: "Basic Plan",
      data: [
        {
          id: 1,
          text: "15 online lessons per month. Each lesson lasts 40 minutes.",
        },
        { id: 2, text: "Lessons are not recorded in this plan." },
        { id: 3, text: "Lessons are counted by number, not by days." },
      ],
    },
    {
      id: 5,
      dollar: "$177.33",
      image: CourseImageEn2,
      soum: "2,300,000 UZS",
      courseType: "Standard Plan",
      data: [
        {
          id: 1,
          text: "20 online lessons per month. Each lesson lasts 40 minutes.",
        },
        { id: 2, text: "Lessons are not recorded in this plan." },
        { id: 3, text: "Lessons are counted by number, not by days." },
        {
          id: 4,
          text: "Includes tests, PDF books, and recorded video lessons.",
        },
      ],
    },
    {
      id: 6,
      dollar: "$215.88",
      image: CourseImageEn3,
      soum: "2,800,000 UZS",
      courseType: "Premium Plan",
      data: [
        {
          id: 1,
          text: "25 online lessons per month. Each lesson lasts 40 minutes.",
        },
        {
          id: 2,
          text: "Includes extra materials, tests, and video recordings.",
        },
        {
          id: 3,
          text: "Lessons are defined by exact number, not by schedule.",
        },
      ],
    },
  ],
  ar: [
    {
      id: 1,
      dollar: "$132",
      image: CourseImageAr1,
      soum: "1 700 000 سوم",
      courseType: "الخطة الأساسية",
      data: [
        { id: 1, text: "15 درسًا عبر الإنترنت شهريًا، مدة كل درس 40 دقيقة." },
        {
          id: 2,
          text: "الدروس التي مدتها 40 دقيقة لا يتم تسجيلها في هذه الخطة.",
        },
        { id: 3, text: "يتم حساب الدروس حسب العدد وليس حسب الأيام." },
      ],
    },
    {
      id: 2,
      dollar: "$177.33",
      image: CourseImageAr2,
      soum: "2 300 000 سوم",
      courseType: "الخطة المتوسطة",
      data: [
        { id: 1, text: "20 درسًا عبر الإنترنت شهريًا، مدة كل درس 40 دقيقة." },
        {
          id: 2,
          text: "الدروس التي مدتها 40 دقيقة لا يتم تسجيلها في هذه الخطة.",
        },
        { id: 3, text: "يتم حساب الدروس حسب العدد وليس حسب الأيام." },
        {
          id: 4,
          text: "يتم توفير اختبارات وكتب PDF وتسجيل دروس الفيديو.",
        },
      ],
    },
    {
      id: 3,
      dollar: "$215.88",
      image: CourseImageAr3,
      soum: "2 800 000 سوم",
      courseType: "الخطة الممتازة",
      data: [
        { id: 1, text: "25 درسًا عبر الإنترنت شهريًا، مدة كل درس 40 دقيقة." },
        {
          id: 2,
          text: "تتضمن مواد إضافية واختبارات وتسجيلات فيديو.",
        },
        { id: 3, text: "يتم تحديد الدروس حسب العدد الدقيق وليس حسب الأيام." },
      ],
    },
    {
      id: 4,
      dollar: "$132",
      image: CourseImageAr1,
      soum: "1 700 000 سوم",
      courseType: "الخطة الأساسية",
      data: [
        { id: 1, text: "15 درسًا عبر الإنترنت شهريًا، مدة كل درس 40 دقيقة." },
        {
          id: 2,
          text: "الدروس التي مدتها 40 دقيقة لا يتم تسجيلها في هذه الخطة.",
        },
        { id: 3, text: "يتم حساب الدروس حسب العدد وليس حسب الأيام." },
      ],
    },
    {
      id: 5,
      dollar: "$177.33",
      image: CourseImageAr2,
      soum: "2 300 000 سوم",
      courseType: "الخطة المتوسطة",
      data: [
        { id: 1, text: "20 درسًا عبر الإنترنت شهريًا، مدة كل درس 40 دقيقة." },
        {
          id: 2,
          text: "الدروس التي مدتها 40 دقيقة لا يتم تسجيلها في هذه الخطة.",
        },
        { id: 3, text: "يتم حساب الدروس حسب العدد وليس حسب الأيام." },
        {
          id: 4,
          text: "يتم توفير اختبارات وكتب PDF وتسجيل دروس الفيديو.",
        },
      ],
    },
    {
      id: 6,
      dollar: "$215.88",
      image: CourseImageAr3,
      soum: "2 800 000 سوم",
      courseType: "الخطة الممتازة",
      data: [
        { id: 1, text: "25 درسًا عبر الإنترنت شهريًا، مدة كل درس 40 دقيقة." },
        {
          id: 2,
          text: "تتضمن مواد إضافية واختبارات وتسجيلات فيديو.",
        },
        { id: 3, text: "يتم تحديد الدروس حسب العدد الدقيق وليس حسب الأيام." },
      ],
    },
  ],
};
