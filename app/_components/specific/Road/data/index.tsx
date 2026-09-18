import { RoadSectionSpan, RoadSectionTitle } from "../style";
import {
  RoadSvgIcon1,
  RoadSvgIcon2,
  RoadSvgIcon3,
  RoadSvgIcon4,
} from "@/public/images/svg";

export const title = {
  uz: (
    <RoadSectionTitle data-aos="fade-down">
      Siz izlagan hamma narsa –{" "}
      <RoadSectionSpan>Shams o‘quv markazida!</RoadSectionSpan>
    </RoadSectionTitle>
  ),
  ru: (
    <RoadSectionTitle data-aos="fade-down">
      Всё, что вы ищете —{" "}
      <RoadSectionSpan>в учебном центре Shams!</RoadSectionSpan>
    </RoadSectionTitle>
  ),
  en: (
    <RoadSectionTitle data-aos="fade-down">
      Everything you are looking for —{" "}
      <RoadSectionSpan>at Shams Learning Center!</RoadSectionSpan>
    </RoadSectionTitle>
  ),
  ar: (
    <RoadSectionTitle data-aos="fade-down">
      كل ما تبحث عنه — <RoadSectionSpan>في مركز شمس التعليمي!</RoadSectionSpan>
    </RoadSectionTitle>
  ),
};

export const roadSteps = {
  uz: {
    data: [
      {
        icon: RoadSvgIcon1,
        title: "Ro‘yxatdan o‘ting",
        description:
          "Sahifadagi 'Ro‘yxatdan o‘tish' tugmasini bosing va ma'lumotlaringizni kiritib yoki Telegram orqali adminimizga aloqaga chiqing.",
      },
      {
        icon: RoadSvgIcon2,
        title: "To‘lovni amalga oshiring",
        description:
          "Sizga bog‘langan ustoz yoki administrator bilan guruh yoki individual dars tanlang. So‘ngra sizga mos narx va jadval asosida to‘lovni amalga oshiring.",
      },
      {
        icon: RoadSvgIcon3,
        title: "O‘qishni boshlang!",
        description:
          "Har bir dars uchun Zoom havolasi, PDF materiallar va uy vazifalari Telegram guruhga joylanadi. Barcha darslar jadval asosida muntazam o‘tkaziladi.",
      },
      {
        icon: RoadSvgIcon4,
        title: "Sertifikatni qo‘lga kiriting",
        description:
          "Har bir o‘quvchining mehnati qadrlanadi. Kursni tugatgan va imtihonni topshirgan ishtirokchilar sertifikat bilan mukofotlanadi.",
      },
    ],
  },

  ru: {
    data: [
      {
        icon: RoadSvgIcon1,
        title: "Зарегистрируйтесь",
        description:
          "Нажмите кнопку «Регистрация» на странице и введите свои данные или свяжитесь с администратором через Telegram.",
      },
      {
        icon: RoadSvgIcon2,
        title: "Оплатите обучение",
        description:
          "Выберите групповое или индивидуальное обучение вместе с преподавателем или администратором. Затем оплатите в соответствии с выбранным графиком и стоимостью.",
      },
      {
        icon: RoadSvgIcon3,
        title: "Начните обучение!",
        description:
          "Для каждого урока предоставляется ссылка Zoom, PDF-материалы и домашние задания в группе Telegram. Все занятия проходят регулярно по расписанию.",
      },
      {
        icon: RoadSvgIcon4,
        title: "Получите сертификат",
        description:
          "Труд каждого ученика ценится. Те, кто успешно завершил курс и сдал экзамен, получают сертификат.",
      },
    ],
  },

  en: {
    data: [
      {
        icon: RoadSvgIcon1,
        title: "Register",
        description:
          'Click the "Register" button on the page and enter your information, or contact our admin directly via Telegram.',
      },
      {
        icon: RoadSvgIcon2,
        title: "Make the payment",
        description:
          "Choose a group or individual lesson with your assigned teacher or admin, then complete the payment based on your schedule and pricing.",
      },
      {
        icon: RoadSvgIcon3,
        title: "Start learning!",
        description:
          "Each lesson includes a Zoom link, PDF materials, and homework shared in the Telegram group. All classes are held regularly according to the schedule.",
      },
      {
        icon: RoadSvgIcon4,
        title: "Get your certificate",
        description:
          "Every student’s effort is appreciated. Participants who complete the course and pass the final test receive a certificate.",
      },
    ],
  },

  ar: {
    data: [
      {
        icon: RoadSvgIcon1,
        title: "سجّل الآن",
        description:
          "اضغط على زر 'التسجيل' في الصفحة وأدخل معلوماتك أو تواصل مع الإدمن عبر تيليجرام.",
      },
      {
        icon: RoadSvgIcon2,
        title: "قم بالدفع",
        description:
          "اختر دروسًا جماعية أو فردية مع المعلم أو المشرف، ثم قم بالدفع وفقًا للسعر والجدول المناسب لك.",
      },
      {
        icon: RoadSvgIcon3,
        title: "ابدأ التعلم!",
        description:
          "يتم مشاركة رابط Zoom والمواد بصيغة PDF والواجبات المنزلية في مجموعة تيليجرام. تُعقد جميع الدروس بانتظام وفقًا للجدول.",
      },
      {
        icon: RoadSvgIcon4,
        title: "احصل على الشهادة",
        description:
          "يتم تقدير جهد كل طالب. يحصل المشاركون الذين أكملوا الدورة ونجحوا في الاختبار على شهادة.",
      },
    ],
  },
};
