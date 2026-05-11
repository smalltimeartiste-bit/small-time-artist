import { FiArrowUpRight } from "react-icons/fi";
import Heading from "../Heading/Heading";
import Section from "../Section/SectionContainer";
import classNames from "classnames";
import css from "./FeaturedProducts.module.css";
import { useNavigate } from "react-router";
import { useRef } from "react";

function FeaturedProducts({ data }) {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const scrollStartLeft = useRef(0);
  const didDrag = useRef(false);

  const onMouseDown = (e) => {
    isDragging.current = true;
    didDrag.current = false;
    dragStartX.current = e.clientX;
    scrollStartLeft.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.cursor = "grabbing";
    scrollRef.current.style.userSelect = "none";
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    const delta = e.clientX - dragStartX.current;
    if (Math.abs(delta) > 4) didDrag.current = true;
    scrollRef.current.scrollLeft = scrollStartLeft.current - delta;
  };

  const onMouseUp = () => {
    isDragging.current = false;
    if (scrollRef.current) {
      scrollRef.current.style.cursor = "grab";
      scrollRef.current.style.userSelect = "";
    }
  };

  const handleCardClick = (link) => {
    if (!didDrag.current) navigate(link);
  };

  return (
    <Section className={css.section} label="Featured products">
      <Heading className={css.heading} level="2">
        Featured <span>Products</span>
      </Heading>

      <div
        ref={scrollRef}
        className={css.track}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        {data?.map((card, index) => (
          <div
            key={index}
            className={css.card}
            onClick={() => handleCardClick(card.link)}
          >
            <div className={css.imgWrapper}>
              <img src={card.image} alt="" loading="lazy" draggable="false" />
              <div className={css.overlay}>
                <button
                  className={css.viewBtn}
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(card.link);
                  }}
                  aria-label="View product"
                >
                  View Product <FiArrowUpRight />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default FeaturedProducts;
