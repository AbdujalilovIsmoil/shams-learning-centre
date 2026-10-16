import { SuccessFullyBoxSpan, SuccessFullyBoxTitle } from "../style";

export const courseFeatures = [
  {
    id: 1,
    title: {
      uz: "1. Arab tili",
      ru: "1. Арабский язык",
      en: "1. Arabic Language",
      ar: "اللغة العربية1.",
    },
    description: {
      uz: "Arab tili harflari, maxrajlar va sifatlari bo‘yicha mustahkam. To‘g‘ri talaffuz, tovushlar farqi va o‘qishdagi aniqlikni egallaysiz.",
      ru: "Твёрдое знание арабских букв, мест произношения и их свойств. Вы овладеете правильным произношением, различием звуков и точностью в чтении.",
      en: "A solid understanding of Arabic letters, pronunciation points, and characteristics. You will master correct pronunciation, sound distinction, and accuracy in reading.",
      ar: "إتقان حروف اللغة العربية ومخارجها وصفاتها. ستتعلم النطق الصحيح، وتمييز الأصوات، والدقة في القراءة.",
    },
  },
  {
    id: 2,
    title: {
      uz: "2. Rag‘bat",
      ru: "2. Мотивация",
      en: "2. Motivation",
      ar: "تحفيز2.",
    },
    description: {
      uz: "Tilingizga bo‘lgan ishonch va ilmga muhabbat. O‘zingizdagi o‘sish va o‘zgarishni his qilasiz, o‘rganishda davom etasiz.",
      ru: "Уверенность в своём языке и любовь к знаниям. Вы почувствуете свой рост и изменения, продолжая обучение.",
      en: "Confidence in your language and love for learning. You’ll feel your own growth and continue your learning journey.",
      ar: "الثقة بلغتك وحب العلم. ستشعر بنموك وتطورك وتستمر في التعلم.",
    },
  },
  {
    id: 3,
    title: {
      uz: "3. Mahorat",
      ru: "3. Мастерство",
      en: "3. Skill",
      ar: "مهارة3.",
    },
    description: {
      uz: "Darajangizga mos matnlarni mustaqil tarjima qilish. Siz matnlarni ishonch bilan tarjima qila olasiz.",
      ru: "Самостоятельный перевод текстов в соответствии с вашим уровнем. Вы сможете уверенно переводить тексты.",
      en: "Independently translate texts appropriate to your level. You’ll be able to translate confidently.",
      ar: "ترجمة النصوص المناسبة لمستواك بشكل مستقل. ستتمكن من الترجمة بثقة.",
    },
  },
  {
    id: 4,
    title: {
      uz: "4. Sertifikat",
      ru: "4. Сертификат",
      en: "4. Certificate",
      ar: "شهادة4.",
    },
    description: {
      uz: "Sertifikat — kursni muvaffaqiyatli tamomlaganlarga beriladigan hujjat. Ushbu sertifikat sizning bilimingizni tasdiqlaydi.",
      ru: "Сертификат — документ, выдаваемый тем, кто успешно завершил курс. Этот сертификат подтверждает ваши знания.",
      en: "Certificate — a document awarded to those who successfully complete the course. This certificate validates your knowledge.",
      ar: "شهادة تُمنح لمن أكمل الدورة بنجاح. هذه الشهادة تؤكد معرفتك ومستواك.",
    },
  },
];

export const courseTitles = {
  uz: (
    <SuccessFullyBoxTitle data-aos="zoom-in">
      <SuccessFullyBoxSpan>Fonetika</SuccessFullyBoxSpan> – arab tili harflarini{" "}
      <SuccessFullyBoxSpan>to‘g‘ri talaffuz</SuccessFullyBoxSpan> qilishni
      o‘rganasiz.
    </SuccessFullyBoxTitle>
  ),
  ru: (
    <SuccessFullyBoxTitle data-aos="zoom-in">
      <SuccessFullyBoxSpan>Фонетика</SuccessFullyBoxSpan> – изучаете{" "}
      <SuccessFullyBoxSpan>правильное произношение</SuccessFullyBoxSpan>{" "}
      арабских букв.
    </SuccessFullyBoxTitle>
  ),
  en: (
    <SuccessFullyBoxTitle data-aos="zoom-in">
      <SuccessFullyBoxSpan>Phonetics</SuccessFullyBoxSpan> – learn{" "}
      <SuccessFullyBoxSpan>the correct pronunciation</SuccessFullyBoxSpan> of
      Arabic letters.
    </SuccessFullyBoxTitle>
  ),
  ar: (
    <SuccessFullyBoxTitle dir="rtl" data-aos="zoom-in">
      <SuccessFullyBoxSpan>الصوتيات</SuccessFullyBoxSpan> – تعلّم{" "}
      <SuccessFullyBoxSpan>النطق الصحيح</SuccessFullyBoxSpan> لحروف اللغة
      العربية.
    </SuccessFullyBoxTitle>
  ),
};
