import React, { useState } from "react";
import { AccordionItem } from "./AccordionItem";
import "./index.css";

import i18n from "../../translate/i18n";
import { withNamespaces } from "react-i18next";

const Accordion = ({ t }) => {
  const [activeIndex, setActiveIndex] = useState("");

  const questionsAnswers = [
    {
      question: t("faq_question1"),
      answer: t("faq_answer1"),
    },
    {
      question: t("faq_question2"),
      answer: t("faq_answer2"),
      text: `marmosettoken@gmail.com`,
    },
    {
      question: t("faq_question3"),
      answer: t("faq_answer3"),
      link: `https://github.com/Defimoonorg/Audit-Report/blob/main/Marmosettoken.pdf`,
    },
    {
      question: t("faq_question4"),
      answer: t("faq_answer4"),
    },
  ];

  const renderedQuestionsAnswers = questionsAnswers.map((item, index) => {
    const showDescription = index === activeIndex ? "show-description" : "";
    const fontWeightBold = index === activeIndex ? "font-weight-bold" : "";
    const ariaExpanded = index === activeIndex ? "true" : "false";
    return (
      <AccordionItem
        showDescription={showDescription}
        fontWeightBold={fontWeightBold}
        ariaExpanded={ariaExpanded}
        item={item}
        index={index}
        key={index}
        onClick={() => {
          setActiveIndex(index);
        }}
      />
    );
  });

  return <dl className="faq__list">{renderedQuestionsAnswers}</dl>;
};

export default withNamespaces()(Accordion);
