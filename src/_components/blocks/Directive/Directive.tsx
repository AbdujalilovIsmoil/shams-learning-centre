
import { Language } from "@/types";
import { UseMotion } from "@/hooks";
import { usePathname } from "@/lib/navigation";
import { DirectiveImage } from "@/assets/images/png";
import { infoTranslations, translationsShams } from "./data";
import {
  DirectiveIcon1,
  DirectiveIcon2,
  DirectiveIcon3,
} from "@/assets/images/svg";
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
                alt=""
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
                  alt=""
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
                  alt=""
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
                  alt=""
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
