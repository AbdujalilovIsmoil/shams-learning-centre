"use client";

import Aos from "aos";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  Map,
  Hero,
  Road,
  Video,
  Infos,
  Contact,
  AboutUs,
  Questions,
  Directive,
  SuccessFully,
  GroupCourses,
  Testimonials,
  PremiumCourses,
} from "@/app/_components";

const Home = () => {
  const pathName = usePathname();
  const lang = pathName.split("/")[1];

  useEffect(() => {
    const html = document.querySelector("html");

    html?.setAttribute("lang", lang);

    html?.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    Aos.init();
  }, [lang]);

  return (
    <>
      <Hero />
      <Infos />
      <Contact />
      <Directive />
      <PremiumCourses />
      <GroupCourses />
      <AboutUs />
      <Video />
      <Road />
      <Questions />
      <Testimonials />
      <SuccessFully />
      <Map />
    </>
  );
};

export default Home;
