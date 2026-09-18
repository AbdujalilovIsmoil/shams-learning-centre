"use client";

import { Language } from "@/app/types";
import { UseMotion } from "@/app/hooks";
import { usePathname } from "next/navigation";
import {
  InfosImage1,
  InfosImage2,
  InfosImage3,
  InfosLanguageImage9,
} from "@/public/images/png";
import {
  InfosBox,
  InfosBoxes,
  InfosContent,
  InfosBoxImage,
  InfosContainer,
  InfosContentText,
} from "./style";
import {
  translations1,
  translations2,
  translations3,
  translations4,
  translations5,
  translations6,
} from "./data";

const Infos = () => {
  const pathName = usePathname();

  const language = pathName.split("/")[1];

  return (
    <InfosContainer>
      <div className="container">
        <InfosBoxes>
          <InfosBox>
            <UseMotion>
              <InfosBoxImage
                width={625}
                height={690}
                alt="boy image"
                src={InfosImage1}
                data-aos="zoom-in"
              />
            </UseMotion>

            <InfosContent data-aos="zoom-in">
              {translations1[`${language}` as Language].title}

              <InfosContentText>
                {translations1[`${language}` as Language].paragraph}
              </InfosContentText>
            </InfosContent>
          </InfosBox>
          <InfosBox>
            <InfosContent data-aos="zoom-in">
              {translations2[`${language}` as Language].title}

              <InfosContentText>
                {translations2[`${language}` as Language].paragraph}
              </InfosContentText>
            </InfosContent>

            <UseMotion>
              <InfosBoxImage
                width={640}
                height={615}
                alt="girl image"
                src={InfosImage2}
                data-aos="fade-down"
              />
            </UseMotion>
          </InfosBox>
          <InfosBox>
            <UseMotion>
              <InfosBoxImage
                width={620}
                height={650}
                alt="musque image"
                data-aos="fade-down"
                src={translations4[`${language}` as Language].image}
              />
            </UseMotion>

            <InfosContent data-aos="fade-down">
              {translations4[`${language}` as Language].title}

              <InfosContentText>
                {translations4[`${language}` as Language].paragraph}
              </InfosContentText>
            </InfosContent>
          </InfosBox>
          <InfosBox>
            <InfosContent data-aos="fade-down">
              {translations5[`${language}` as Language].title}

              <InfosContentText>
                {translations5[`${language}` as Language].paragraph}
              </InfosContentText>
            </InfosContent>

            <UseMotion>
              <InfosBoxImage
                width={690}
                height={565}
                alt="girl image"
                data-aos="fade-down"
                src={translations5[`${language}` as Language].image}
              />
            </UseMotion>
          </InfosBox>
          <InfosBox>
            <UseMotion>
              <InfosBoxImage
                width={600}
                height={335}
                data-aos="fade-down"
                alt="girl and boy image"
                src={InfosLanguageImage9}
              />
            </UseMotion>

            <InfosContent data-aos="fade-down">
              {translations6[`${language}` as Language].title}

              <InfosContentText>
                {translations6[`${language}` as Language].paragraph}
              </InfosContentText>
            </InfosContent>
          </InfosBox>
          <InfosBox>
            <InfosContent data-aos="fade-down">
              {translations3[`${language}` as Language].title}

              <InfosContentText>
                {translations3[`${language}` as Language].paragraph}
              </InfosContentText>
            </InfosContent>

            <UseMotion>
              <InfosBoxImage
                width={780}
                height={535}
                alt="girl image"
                src={InfosImage3}
                data-aos="fade-down"
              />
            </UseMotion>
          </InfosBox>
        </InfosBoxes>
      </div>
    </InfosContainer>
  );
};

export default Infos;
