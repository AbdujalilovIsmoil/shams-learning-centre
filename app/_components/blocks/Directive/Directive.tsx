"use client";

import { Language } from "@/app/types";
import { UseMotion } from "@/app/hooks";
import { usePathname } from "next/navigation";
import { DirectiveImage } from "@/public/images/png";
import { infoTranslations, translationsShams } from "./data";
import {
  DirectiveIcon1,
  DirectiveIcon2,
  DirectiveIcon3,
} from "@/public/images/svg";
import {
  DirectiveBox,
  DirectiveList,
  DirectiveItem,
  DirectiveTitle,
  DirectiveSection,
  DirectiveBoxImage,
  DirectiveItemText,
  DirectiveContainer,
  DirectiveItemTitle,
  DirectiveItemImage,
} from "./style";

const Directive = () => {
  const pathName = usePathname();
  const language = (pathName.split("/")[1] || "uz") as Language;

  return (
    <DirectiveSection id="advantages">
      <div className="container">
        <DirectiveTitle data-aos="fade-down">
          {translationsShams[`${language}` as Language].title &&
            translationsShams[`${language}` as Language].title}
        </DirectiveTitle>
        <DirectiveContainer>
          <DirectiveBox>
            <UseMotion>
              <DirectiveBoxImage
                width={750}
                height={740}
                data-aos="zoom-in"
                alt="teacher image"
                src={DirectiveImage}
              />
            </UseMotion>
          </DirectiveBox>
          <DirectiveBox>
            <DirectiveList>
              <DirectiveItem data-aos="fade-down">
                <DirectiveItemImage
                  width={80}
                  height={80}
                  alt="boy icon"
                  src={DirectiveIcon1}
                />
                <DirectiveItemTitle>
                  {infoTranslations[`${language}` as Language].item1.title}
                </DirectiveItemTitle>
                <DirectiveItemText>
                  {
                    infoTranslations[`${language}` as Language].item1
                      .description
                  }
                </DirectiveItemText>
              </DirectiveItem>
              <DirectiveItem data-aos="fade-down">
                <DirectiveItemImage
                  width={80}
                  height={80}
                  alt="time icon"
                  src={DirectiveIcon2}
                />
                <DirectiveItemTitle>
                  {infoTranslations[`${language}` as Language].item2.title}
                </DirectiveItemTitle>
                <DirectiveItemText>
                  {
                    infoTranslations[`${language}` as Language].item2
                      .description
                  }
                </DirectiveItemText>
              </DirectiveItem>
              <DirectiveItem data-aos="fade-down">
                <DirectiveItemImage
                  width={80}
                  height={80}
                  alt="woman icon"
                  src={DirectiveIcon3}
                />
                <DirectiveItemTitle>
                  {infoTranslations[`${language}` as Language].item3.title}
                </DirectiveItemTitle>
                <DirectiveItemText>
                  {
                    infoTranslations[`${language}` as Language].item3
                      .description
                  }
                </DirectiveItemText>
              </DirectiveItem>
            </DirectiveList>
          </DirectiveBox>
        </DirectiveContainer>
      </div>
    </DirectiveSection>
  );
};

export default Directive;
