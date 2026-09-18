"use client";

import { usePathname } from "next/navigation";
import { NotFoundImage as NotFoundBigImage} from "@/public/images/png";
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

  return (
    <NotFoundContainer>
      <div className="container">
        <NotFoundContent>
          <NotFoundImage
            width={800}
            height={600}
            alt="not found image"
            src={NotFoundBigImage}
          />
          <NotFoundTitle>Noto'g'ri sahifaga kirib qoldingiz</NotFoundTitle>
          <NotFoundBackButton href={`/${lang}`} role="button">
            Bosh sahifaga qaytish
          </NotFoundBackButton>
        </NotFoundContent>
      </div>
    </NotFoundContainer>
  );
};

export default NotFound;
