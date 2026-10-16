
import { Language } from "@/types";
import { roadSteps, title } from "./data";
import { usePathname } from "@/lib/navigation";
import {
  RoadSection,
  RoadSectionList,
  RoadSectionItem,
  RoadSectionBackground,
  RoadSectionItemBoxText,
  RoadSectionItemBoxTitle,
  RoadSectionItemBoxImage,
  RoadSectionItemBoxImageContainer,
  RoadSectionItemBoxImageSmallContainer,
} from "./style";

const Road = () => {
  const pathName = usePathname();
  const language = pathName.split("/")[1];

  return (
    <RoadSection>
      <div className="container">
        {title[`${language}` as Language]}
        <RoadSectionBackground>
          <RoadSectionList>
            {roadSteps[`${language}` as Language].data &&
              roadSteps[`${language}` as Language].data.map((el, index) => {
                return (
                  <RoadSectionItem key={index} data-aos="zoom-in">
                    <RoadSectionItemBoxImageContainer>
                      <RoadSectionItemBoxImageSmallContainer>
                        <RoadSectionItemBoxImage
                          width={100}
                          height={100}
                          src={el.icon}
                          alt=""
                        />
                      </RoadSectionItemBoxImageSmallContainer>
                    </RoadSectionItemBoxImageContainer>

                    <RoadSectionItemBoxTitle>
                      {el.title}
                    </RoadSectionItemBoxTitle>

                    <RoadSectionItemBoxText>
                      {el.description}
                    </RoadSectionItemBoxText>
                  </RoadSectionItem>
                );
              })}
          </RoadSectionList>
        </RoadSectionBackground>
      </div>
    </RoadSection>
  );
};

export default Road;
