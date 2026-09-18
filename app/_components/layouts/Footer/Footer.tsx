"use client";

import { toast } from "react-toastify";
import { ChangeEvent, useState } from "react";
import { usePathname } from "next/navigation";
import {
  HomeAddress,
  TwitterIcon,
  YoutubeIcon,
  FacebookIcon,
  LinkedInIcon,
  EmailAddress,
  TelegramIcon,
  InstagramIcon,
  MobileAddress,
  InstagramAlternativeIcon,
} from "@/public/images/svg";
import {
  FooterBox,
  FooterForm,
  FooterMedia,
  FooterInput,
  FooterSubmit,
  FooterGoLink,
  FooterMedias,
  FooterWrapper,
  FooterContent,
  FooterInputBox,
  FooterTextArea,
  FooterContainer,
  FooterMediaLink,
  FooterMediaIcon,
  FooterPhoneInput,
  FooterResultLink,
  FooterAddressList,
  FooterContentText,
  FooterAddressItem,
  FooterSecurityText,
  FooterContentTitle,
  FooterContentSubTitle,
  FooterAddressItemIcon,
  FooterAddressItemTitle,
  FooterAddressContainer,
} from "./style";

const Footer = () => {
  const pathName = usePathname();
  const language = pathName.split("/")[1];
  const [inputValues, setInputValues] = useState({
    text: "",
    email: "",
    full_name: "",
    phone_number: "",
  });

  const changeInputValues = (value: { name: string; value: string }) => {
    setInputValues({ ...inputValues, [value.name]: value.value });
  };

  type Language = "uz" | "ru" | "en" | "ar";

  const request: Record<Language, string> = {
    uz: "Ariza topshirish",
    en: "Submit application",
    ar: "تقديم الطلب",
    ru: "Подать заявку",
  };

  const contact = {
    uz: "Bog‘lanish",
    en: "Contact",
    ar: "اتصال",
    ru: "Связь",
  };

  const signUpText = {
    uz: "Bog‘lanish uchun ma’lumotlarni to‘ldiring, ro‘yxatdan o‘ting va biz bilan bog‘laning",
    en: "Fill in the information, register, and contact us",
    ar: "املأ المعلومات، وسجل، وتواصل معنا",
    ru: "Заполните данные, зарегистрируйтесь и свяжитесь с нами",
  };

  const results = {
    uz: "Natijalar",
    en: "Results",
    ar: "النتائج",
    ru: "Результаты",
  };

  const sendFormLanguageData = {
    full_name: {
      uz: "Ism va familiyangiz",
      en: "Your first and last name",
      ar: "اسمك ولقبك",
      ru: "Ваше имя и фамилия",
    },
    phone_number: {
      uz: "Telefon raqamingiz",
      en: "Your phone number",
      ar: "رقم هاتفك",
      ru: "Ваш номер телефона",
    },
    email: {
      uz: "Elektron pochtangiz",
      en: "Your email address",
      ar: "بريدك الإلكتروني",
      ru: "Ваш адрес электронной почты",
    },
    leave_message: {
      uz: "Xabar qoldirish",
      en: "Leave a message",
      ar: "اترك رسالة",
      ru: "Оставить сообщение",
    },
    send: {
      uz: "Yuborish",
      en: "Send",
      ar: "إرسال",
      ru: "Отправить",
    },
  };

  const securityData = {
    uz: "© 2025 Barcha maxfiylik huquqlari himoyalangan",
    en: "© 2025 All privacy rights reserved",
    ar: "© 2025 جميع حقوق الخصوصية محفوظة",
    ru: "© 2025 Все права на конфиденциальность защищены",
  };

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

  const value = `
email: ${inputValues.email}
malumot: ${inputValues.text}
ism: ${inputValues.full_name}
telefon_raqam: ${inputValues.phone_number}
`;

  const sendFormData = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const [telegramResult, applicationResult] = await Promise.allSettled([
      fetch(
        `https://api.telegram.org/bot8923788762:AAFvk9qrX-6L3Nv5NGUUCDGQDhtbmScILKU/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: value.trim(),
            chat_id: -1004353886777,
            parse_mode: "HTML",
          }),
        }
      ).then((res) => res.json()),
      fetch(`${API_URL}/api/applications`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: inputValues.full_name,
          phoneNumber: inputValues.phone_number,
          email: inputValues.email,
          message: inputValues.text,
        }),
      }),
    ]);

    const telegramOk =
      telegramResult.status === "fulfilled" && telegramResult.value?.ok;
    const applicationOk =
      applicationResult.status === "fulfilled" && applicationResult.value.ok;

    // Ikkalasidan biri muvaffaqiyatli bo'lsa ham foydalanuvchiga xabar
    // yetib borgan hisoblanadi — bittasi vaqtincha ishlamay qolsa ham forma
    // butunlay muvaffaqiyatsiz ko'rinmasin.
    const ok = telegramOk || applicationOk;

    const successTranslations: { [key: string]: string } = {
      uz: "Ma’lumotlaringiz adminga yuborildi",
      ru: "Ваша информация была отправлена администратору",
      en: "Your information has been sent to the admin",
      ar: "تم إرسال معلوماتك إلى المشرف",
    };

    const errorTranslations: { [key: string]: string } = {
      uz: "Ma’lumotlaringiz adminga yuborilmadi, qayta urinib ko'ring",
      ru: "Ваша информация не была отправлена администратору, попробуйте снова",
      en: "Your information was not sent to the admin, please try again",
      ar: "لم يتم إرسال معلوماتك إلى المشرف، يرجى المحاولة مرة أخرى",
    };

    if (ok) {
      toast.success(successTranslations[language], {
        autoClose: 3000,
        pauseOnHover: false,
      });

      setInputValues({ email: "", full_name: "", phone_number: "", text: "" });
    } else {
      toast.error(errorTranslations[language], {
        autoClose: 3000,
        pauseOnHover: false,
      });
    }
  };

  return (
    <FooterContainer>
      <div className="container">
        <FooterWrapper>
          <FooterBox>
            <FooterContent>
              <FooterContentTitle>
                {request[`${language}` as Language]}
              </FooterContentTitle>
              <FooterContentSubTitle>
                {" "}
                {contact[`${language}` as Language]}
              </FooterContentSubTitle>
              <FooterContentText>
                {signUpText[`${language}` as Language]}
              </FooterContentText>

              <FooterAddressList>
                <FooterAddressItem>
                  <FooterGoLink href="https://www.shamsoquvmarkaz.uz">
                    <FooterAddressItemIcon
                      width={22}
                      height={22}
                      alt="home icon"
                      src={HomeAddress}
                    />
                    <FooterAddressItemTitle>
                      www.shamo’quvmarkazi
                    </FooterAddressItemTitle>
                  </FooterGoLink>
                </FooterAddressItem>
                <FooterAddressItem>
                  <FooterAddressContainer>
                    <FooterGoLink href="mailto:shamsoquvmarkaz@gmail.com">
                      <FooterAddressItemIcon
                        width={22}
                        height={22}
                        alt="email icon"
                        src={EmailAddress}
                      />
                      <FooterAddressItemTitle>
                        www.shamsoquvmarkaz@gmail.com
                      </FooterAddressItemTitle>
                    </FooterGoLink>
                  </FooterAddressContainer>
                </FooterAddressItem>
                <FooterAddressItem>
                  <FooterGoLink
                    target="_blank"
                    href="https://t.me/Shams_markaz_admin"
                  >
                    <FooterAddressItemIcon
                      width={22}
                      height={22}
                      alt="mobile icon"
                      src={MobileAddress}
                    />
                    <FooterAddressItemTitle>
                      @Shams_markaz_admin
                    </FooterAddressItemTitle>
                  </FooterGoLink>
                </FooterAddressItem>
              </FooterAddressList>
            </FooterContent>

            <FooterMedias>
              <FooterMedia>
                <FooterMediaLink
                  target="_blank"
                  href="https://t.me/Shams_oquvmarkaz"
                >
                  <FooterMediaIcon
                    width={40}
                    height={40}
                    src={TelegramIcon}
                    alt="telegram icon"
                  />
                </FooterMediaLink>
              </FooterMedia>
              <FooterMedia>
                <FooterMediaLink
                  target="_blank"
                  href="https://www.instagram.com/shams_oquvmarkaz/"
                >
                  <FooterMediaIcon
                    width={40}
                    height={40}
                    src={InstagramIcon}
                    alt="instagram icon"
                  />
                </FooterMediaLink>
              </FooterMedia>
              <FooterMedia>
                <FooterMediaLink
                  target="_blank"
                  href="https://www.youtube.com/@Shams_oquvmarkaz"
                >
                  <FooterMediaIcon
                    width={40}
                    height={40}
                    src={YoutubeIcon}
                    alt="youtube icon"
                  />
                </FooterMediaLink>
              </FooterMedia>
              <FooterMedia>
                <FooterMediaLink
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=61579637375637"
                >
                  <FooterMediaIcon
                    width={40}
                    height={40}
                    src={FacebookIcon}
                    alt="facebook icon"
                  />
                </FooterMediaLink>
              </FooterMedia>
              <FooterMedia>
                <FooterMediaLink
                  target="_blank"
                  href="https://x.com/Shams_markaz"
                >
                  <FooterMediaIcon
                    width={40}
                    height={40}
                    src={TwitterIcon}
                    alt="twitter icon"
                  />
                </FooterMediaLink>
              </FooterMedia>
              <FooterMedia>
                <FooterMediaLink
                  target="_blank"
                  href="https://www.linkedin.com/in/shamsoquvmarkaz/"
                >
                  <FooterMediaIcon
                    width={40}
                    height={40}
                    src={LinkedInIcon}
                    alt="linkedIn icon"
                  />
                </FooterMediaLink>
              </FooterMedia>
              <FooterMedia>
                <FooterMediaLink
                  target="_blank"
                  href="https://www.threads.com/@shams_oquvmarkaz"
                >
                  <FooterMediaIcon
                    width={40}
                    height={40}
                    src={InstagramAlternativeIcon}
                    alt="instagram alternative icon"
                  />
                </FooterMediaLink>
              </FooterMedia>
            </FooterMedias>

            <FooterResultLink
              target="_blank"
              href="https://t.me/shams_markaz_natija"
            >
              {results[`${language}` as Language]}
            </FooterResultLink>
          </FooterBox>
          <FooterBox>
            <FooterForm onSubmit={sendFormData}>
              <FooterInputBox>
                <FooterInput
                  required
                  type="text"
                  name="full_name"
                  onChange={(e) => {
                    changeInputValues({
                      value: e.target.value,
                      name: e.target.name,
                    });
                  }}
                  value={inputValues.full_name}
                  placeholder={
                    sendFormLanguageData.full_name[`${language}` as Language]
                  }
                />
              </FooterInputBox>
              <FooterInputBox>
                <FooterPhoneInput
                  required
                  name="phone_number"
                  value={inputValues.phone_number}
                  onChange={(value) => {
                    changeInputValues({
                      value: String(value),
                      name: "phone_number",
                    });
                  }}
                  placeholder={
                    sendFormLanguageData.phone_number[`${language}` as Language]
                  }
                />
              </FooterInputBox>
              <FooterInputBox>
                <FooterInput
                  required
                  type="email"
                  name="email"
                  value={inputValues.email}
                  onChange={(e) => {
                    changeInputValues({
                      value: e.target.value,
                      name: e.target.name,
                    });
                  }}
                  placeholder={
                    sendFormLanguageData.email[`${language}` as Language]
                  }
                />
              </FooterInputBox>
              <FooterInputBox>
                <FooterTextArea
                  required
                  name="text"
                  value={inputValues.text}
                  onChange={(e) => {
                    changeInputValues({
                      value: e.target.value,
                      name: e.target.name,
                    });
                  }}
                  placeholder={
                    sendFormLanguageData.leave_message[
                      `${language}` as Language
                    ]
                  }
                ></FooterTextArea>
              </FooterInputBox>

              <FooterSubmit type="submit">
                {sendFormLanguageData.send[`${language}` as Language]}
              </FooterSubmit>
            </FooterForm>
          </FooterBox>
        </FooterWrapper>

        <FooterSecurityText>
          {securityData[`${language}` as Language]}
        </FooterSecurityText>
      </div>
    </FooterContainer>
  );
};

export default Footer;
