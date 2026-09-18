"use client";

import { aboutUs } from "./data";
import { Language } from "@/app/types";
import { UseMotion } from "@/app/hooks";
import { usePathname } from "next/navigation";
import { AboutUsImage } from "@/public/images/png";
import {
  AboutUsSection,
  AboutUsSectionBox,
  AboutUsSectionImage,
  AboutUsSectionContent,
  AboutUsSectionContainer,
  AboutUsSectionContentText,
  AboutUsSectionContentTitle,
} from "./style";

const AboutUs = () => {
  const pathName = usePathname();
  const language = pathName.split("/")[1];

  return (
    <AboutUsSection id="about">
      <div className="container">
        <AboutUsSectionContainer>
          <AboutUsSectionBox>
            <UseMotion>
              <AboutUsSectionImage
                width={600}
                height={520}
                data-aos="zoom-in"
                src={AboutUsImage}
                alt="about us image"
              />
            </UseMotion>
          </AboutUsSectionBox>

          <AboutUsSectionBox>
            <AboutUsSectionContent data-aos="zoom-in">
              <AboutUsSectionContentTitle>
                {aboutUs.title[`${language}` as Language]}
              </AboutUsSectionContentTitle>
              <AboutUsSectionContentText>
                {aboutUs.description[`${language}` as Language]}
              </AboutUsSectionContentText>
            </AboutUsSectionContent>
          </AboutUsSectionBox>
        </AboutUsSectionContainer>
      </div>
    </AboutUsSection>
  );
};

export default AboutUs;
