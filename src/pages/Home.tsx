
import Aos from "aos";
import { useEffect } from "react";
import { usePathname } from "@/lib/navigation";
import {
  Map,
  Hero,
  Road,
  Video,
  Infos,
  Contact,
  AboutUs,
  BlogHome,
  Questions,
  Directive,
  SuccessFully,
  GroupCourses,
  Testimonials,
  PremiumCourses,
} from "@/_components";

const Home = () => {
  const pathName = usePathname();
  const lang = pathName.split("/")[1];

  useEffect(() => {
    const html = document.querySelector("html");

    html?.setAttribute("lang", lang);

    html?.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    Aos.init({
      disable: () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });
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
      <BlogHome />
      <Questions />
      <Testimonials />
      <SuccessFully />
      <Map />
    </>
  );
};

export default Home;
