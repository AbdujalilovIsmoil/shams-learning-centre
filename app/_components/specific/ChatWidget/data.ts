import { Language } from "@/app/types";

export const chatUiText: Record<
  Language,
  {
    title: string;
    subtitle: string;
    greeting: string;
    placeholder: string;
    quickActions: string[];
    errorText: string;
  }
> = {
  uz: {
    title: "Shams AI-yordamchi",
    subtitle: "Onlayn",
    greeting:
      "Assalomu alaykum! Men Shams o'quv markazining AI-yordamchisiman. Kurslar, narxlar yoki ro'yxatdan o'tish haqida savolingiz bo'lsa, bemalol yozing 👋",
    placeholder: "Savolingizni yozing...",
    quickActions: ["Narxlar qancha?", "Qanday ro'yxatdan o'taman?", "Guruh kurslari"],
    errorText: "Kechirasiz, hozir javob bera olmadim. Birozdan so'ng qayta urinib ko'ring yoki @Shams_markaz_admin ga yozing.",
  },
  ru: {
    title: "AI-ассистент Shams",
    subtitle: "Онлайн",
    greeting:
      "Здравствуйте! Я AI-ассистент учебного центра Shams. Если у вас есть вопросы о курсах, ценах или регистрации — смело пишите 👋",
    placeholder: "Напишите ваш вопрос...",
    quickActions: ["Какие цены?", "Как зарегистрироваться?", "Групповые курсы"],
    errorText: "Извините, сейчас не удалось ответить. Попробуйте позже или напишите @Shams_markaz_admin.",
  },
  en: {
    title: "Shams AI Assistant",
    subtitle: "Online",
    greeting:
      "Hello! I'm the AI assistant of Shams Learning Center. Feel free to ask about courses, prices, or how to register 👋",
    placeholder: "Type your question...",
    quickActions: ["What are the prices?", "How do I register?", "Group courses"],
    errorText: "Sorry, I couldn't respond right now. Please try again shortly or contact @Shams_markaz_admin.",
  },
  ar: {
    title: "مساعد شمس الذكي",
    subtitle: "متصل الآن",
    greeting:
      "مرحبًا! أنا المساعد الذكي لمركز شمس التعليمي. لا تتردد في سؤالي عن الدورات أو الأسعار أو كيفية التسجيل 👋",
    placeholder: "اكتب سؤالك...",
    quickActions: ["ما هي الأسعار؟", "كيف أسجل؟", "الدورات الجماعية"],
    errorText: "عذرًا، لم أتمكن من الرد الآن. حاول مرة أخرى لاحقًا أو راسل @Shams_markaz_admin.",
  },
};
