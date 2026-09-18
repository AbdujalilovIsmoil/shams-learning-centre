"use client";

import { Language } from "@/app/types";
import { UseMotion } from "@/app/hooks";
import { usePathname } from "next/navigation";
import { MapImage } from "@/public/images/png";
import { MapSection, MapSectionTitle, MapSectionImage } from "./style";

const Map = () => {
  const pathName = usePathname();
  const language = pathName.split("/")[1];

  const studentsWorldwide = {
    uz: "Butun dunyo bo‘yicha o‘quvchilarimiz",
    ru: "Наши ученики по всему миру",
    en: "Our students around the world",
    ar: "طلابنا في جميع أنحاء العالم",
  };

  return (
    <MapSection data-aos="zoom-in">
      <div className="container">
        <MapSectionTitle>
          {studentsWorldwide[`${language}` as Language]}
        </MapSectionTitle>
        <UseMotion>
          <MapSectionImage
            height={900}
            width={1400}
            src={MapImage}
            alt="map image"
          />
        </UseMotion>
      </div>
    </MapSection>
  );
};

export default Map;
