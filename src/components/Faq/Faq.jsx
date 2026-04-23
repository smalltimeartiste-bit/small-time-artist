import React, { useState } from "react";
import css from "./Faq.module.css";
import classNames from "classnames";
import { FaCircle } from "react-icons/fa";
import Heading from "../Heading/Heading";

function FAQ({ data }) {
  const [selected, setSelected] = useState(0);

  const handleClick = (index) => {
    // On mobile, toggle off if same item clicked again
    if (selected === index) {
      setSelected(-1);
    } else {
      setSelected(index);
    }
  };

  return (
    <div className={css.faqContainer}>
      {/* ── Desktop layout: sidebar + content panel ── */}
      <div className={css.faqSidebar}>
        {data.map((item, index) => (
          <div
            key={index}
            className={classNames(css.faqItem, {
              [css.active]: selected === index,
            })}
            onClick={() => handleClick(index)}
          >
            <FaCircle className={css.dot} />
            <p>{item.question}</p>
            <span>&#x276F;</span>
          </div>
        ))}
      </div>
      <div className={css.faqContent}>
        {selected >= 0 && (
          <>
            <Heading level="3">{data[selected].question}</Heading>
            <p>{data[selected].answer}</p>
          </>
        )}
      </div>

      {/* ── Mobile layout: accordion ── */}
      <div className={css.accordion}>
        {data.map((item, index) => (
          <div
            key={index}
            className={classNames(css.accordionItem, {
              [css.accordionActive]: selected === index,
            })}
          >
            <div
              className={css.accordionQuestion}
              onClick={() => handleClick(index)}
            >
              <FaCircle className={css.dot} />
              <p>{item.question}</p>
              <span>{selected === index ? "▲" : "▼"}</span>
            </div>
            {selected === index && (
              <div className={css.accordionAnswer}>
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
