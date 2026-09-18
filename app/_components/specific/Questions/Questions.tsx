"use client";

import { Language } from "@/app/types";
import { usePathname } from "next/navigation";
import { aboutQuestions, questions } from "./data";
import { QuestionArrowLeft } from "@/public/images/svg";
import {
  QuestionsBox,
  QuestionsBoxItem,
  QuestionsBoxList,
  QuestionsSection,
  QuestionsContainer,
  QuestionsBoxItemIcon,
  QuestionsSectionTitle,
  QuestionsBoxItemTitle,
  QuestionsBoxItemContent,
  QuestionsBoxItemContainer,
  QuestionsBoxItemContentText,
} from "./style";

const Questions = () => {
  const pathName = usePathname();
  const language = pathName.split("/")[1];

  const openItemQuestion = (e: any) => {
    e.preventDefault();

    const item = e.currentTarget;
    const container = item.querySelector(".question-container");
    const content = item.querySelector(".question-content") as HTMLElement;

    if (!container || !content) return;

    const isClosed = content.style.height === "0px" || !content.style.height;

    if (isClosed) {
      const contentHeight = content.scrollHeight;

      content.style.cssText = `
      height: ${contentHeight + 12}px;
      overflow: hidden;
      padding-top: 12px;
      padding-bottom: 12px;
      padding-left: 24px;
      padding-right: 24px;
      transition: height 0.3s ease;
    `;
    } else {
      content.style.cssText = `
      height: 0px;
      overflow: hidden;
      padding-top: 0px;
      padding-bottom: 0px;
      padding-left: 24px;
      padding-right: 24px;
      transition: height 0.3s ease;
    `;
    }
  };

  const firstSectionList = questions[`${language}` as Language].slice(0, 5);
  const LastSectionList = questions[`${language}` as Language].slice(5);

  return (
    <QuestionsSection id="questions">
      <div className="container">
        <QuestionsSectionTitle data-aos="-down">
          {aboutQuestions[`${language}` as Language]}
        </QuestionsSectionTitle>
        <QuestionsContainer>
          <QuestionsBox>
            <QuestionsBoxList>
              {firstSectionList.map((el) => {
                return (
                  <QuestionsBoxItem
                    key={el.id}
                    data-aos="zoom-in"
                    onClick={openItemQuestion}
                  >
                    <QuestionsBoxItemContainer className="question-container">
                      <QuestionsBoxItemTitle className="question-title">
                        {el.title}
                      </QuestionsBoxItemTitle>
                      <QuestionsBoxItemIcon
                        width={40}
                        height={40}
                        src={QuestionArrowLeft}
                        className="question-icon"
                        alt="question arrow left"
                      />
                    </QuestionsBoxItemContainer>

                    <QuestionsBoxItemContent className="question-content">
                      <QuestionsBoxItemContentText>
                        {el.text}
                      </QuestionsBoxItemContentText>
                    </QuestionsBoxItemContent>
                  </QuestionsBoxItem>
                );
              })}
            </QuestionsBoxList>
          </QuestionsBox>
          <QuestionsBox>
            <QuestionsBoxList>
              {LastSectionList.map((el) => {
                return (
                  <QuestionsBoxItem
                    key={el.id}
                    data-aos="zoom-in"
                    onClick={openItemQuestion}
                  >
                    <QuestionsBoxItemContainer className="question-container">
                      <QuestionsBoxItemTitle className="question-title">
                        {el.title}
                      </QuestionsBoxItemTitle>
                      <QuestionsBoxItemIcon
                        width={40}
                        height={40}
                        src={QuestionArrowLeft}
                        className="question-icon"
                        alt="question arrow left"
                      />
                    </QuestionsBoxItemContainer>

                    <QuestionsBoxItemContent className="question-content">
                      <QuestionsBoxItemContentText>
                        {el.text}
                      </QuestionsBoxItemContentText>
                    </QuestionsBoxItemContent>
                  </QuestionsBoxItem>
                );
              })}
            </QuestionsBoxList>
          </QuestionsBox>
        </QuestionsContainer>
      </div>
    </QuestionsSection>
  );
};

export default Questions;
