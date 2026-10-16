
import { usePathname } from "@/lib/navigation";
import { useSeo } from "@/seo/useSeo";
import { DEFAULT_LOCALE, getPageMeta, isLocale } from "@/seo/meta";
import { NotFoundImage as NotFoundBigImage} from "@/assets/images/png";
import {
  NotFoundTitle,
  NotFoundImage,
  NotFoundContent,
  NotFoundContainer,
  NotFoundBackButton,
} from "./style";

const NotFound = () => {
  const pathName = usePathname();
  const lang = pathName.split("/")[1];

  // 404 sahifa qidiruv tizimlariga "noindex" deb ko'rsatiladi
  useSeo(getPageMeta(isLocale(lang) ? lang : DEFAULT_LOCALE, { type: "notFound" }));

  return (
    <NotFoundContainer>
      <div className="container">
        <NotFoundContent>
          <NotFoundImage
            width={800}
            height={600}
            alt=""
            src={NotFoundBigImage}
          />
          <NotFoundTitle>Noto'g'ri sahifaga kirib qoldingiz</NotFoundTitle>
          <NotFoundBackButton href={`/${lang}`}>
            Bosh sahifaga qaytish
          </NotFoundBackButton>
        </NotFoundContent>
      </div>
    </NotFoundContainer>
  );
};

export default NotFound;
