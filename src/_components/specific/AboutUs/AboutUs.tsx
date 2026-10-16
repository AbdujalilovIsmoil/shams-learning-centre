
import { aboutUs } from "./data";
import { getLabels } from "@/a11y/labels";
import { Language } from "@/types";
import { UseMotion } from "@/hooks";
import { usePathname } from "@/lib/navigation";
import { AboutUsImage } from "@/assets/images/png";
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
                alt={getLabels(pathName.split("/")[1]).aboutAlt}
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
