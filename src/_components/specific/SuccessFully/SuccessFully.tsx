
import { Language } from "@/types";
import { getLabels } from "@/a11y/labels";
import { UseMotion } from "@/hooks";
import { usePathname } from "@/lib/navigation";
import { SuccessImage } from "@/assets/images/png";
import { courseFeatures, courseTitles } from "./data";
import {
  SuccessFullyBox,
  SuccessFullySection,
  SuccessFullyBoxList,
  SuccessFullyBoxItem,
  SuccessFullyBoxImage,
  SuccessFullyContainer,
  SuccessFullyBoxItemText,
  SuccessFullyBoxItemTitle,
} from "./style";

const SuccessFully = () => {
  const pathName = usePathname();
  const language = pathName.split("/")[1];

  return (
    <SuccessFullySection>
      <div className="container">
        <SuccessFullyContainer>
          <SuccessFullyBox>
            <UseMotion>
              <SuccessFullyBoxImage
                width={560}
                height={670}
                data-aos="zoom-in"
                src={SuccessImage}
                alt={getLabels(pathName.split("/")[1]).successAlt}
              />
            </UseMotion>
          </SuccessFullyBox>
          <SuccessFullyBox>
            {courseTitles[`${language}` as Language]}

            <SuccessFullyBoxList>
              {courseFeatures.map((el) => {
                return (
                  <SuccessFullyBoxItem key={el.id} data-aos="zoom-in">
                    <SuccessFullyBoxItemTitle>
                      {el.title[`${language}` as Language]}
                    </SuccessFullyBoxItemTitle>
                    <SuccessFullyBoxItemText>
                      {el.description[`${language}` as Language]}
                    </SuccessFullyBoxItemText>
                  </SuccessFullyBoxItem>
                );
              })}
            </SuccessFullyBoxList>
          </SuccessFullyBox>
        </SuccessFullyContainer>
      </div>
    </SuccessFullySection>
  );
};

export default SuccessFully;
