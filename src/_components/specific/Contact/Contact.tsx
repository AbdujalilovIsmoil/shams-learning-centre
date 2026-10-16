
import { Language } from "@/types";
import { contactTranslations } from "./data";
import { usePathname } from "@/lib/navigation";
import {
  DirectiveLink,
  DirectiveSection,
  DirectiveContent,
  DirectiveContainer,
  DirectiveContentTitle,
  DirectiveContentSubTitle,
} from "./style";

const Directive = () => {
  const pathName = usePathname();
  const language = (pathName.split("/")[1] || "uz") as Language;

  return (
    <DirectiveSection>
      <div className="container">
        <DirectiveContainer>
          <DirectiveContent>
            <DirectiveContentSubTitle data-aos="fade-down">
              {contactTranslations[`${language}` as Language].question}
            </DirectiveContentSubTitle>
            <DirectiveContentTitle data-aos="fade-down">
              {contactTranslations[`${language}` as Language].title}
            </DirectiveContentTitle>
          </DirectiveContent>

          <DirectiveLink
            target="_blank"
 rel="noopener noreferrer"
            data-aos="fade-down"
            href="https://t.me/Shams_markaz_admin"
          >
            {contactTranslations[`${language}` as Language].button}
          </DirectiveLink>
        </DirectiveContainer>
      </div>
    </DirectiveSection>
  );
};

export default Directive;
