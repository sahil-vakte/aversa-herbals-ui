import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./Category.css";
import image1 from "../../../Assets/category/women_wellness.jpeg";
import image2 from "../../../Assets/category/men_wellness.jpeg";
import image3 from "../../../Assets/category/hair_wellness.jpeg";
import image4 from "../../../Assets/category/skin_wellness.jpeg";
import image5 from "../../../Assets/category/diabatic_wellness.jpeg";

const images = [
  {
    image: image1,
    name: "Women Wellness",
  },
  {
    image: image2,
    name: "Men Wellness",
  },
  {
    image: image3,
    name: "Hair Wellness",
  },
  {
    image: image4,
    name: "Skin Wellness",
  },
  {
    image: image5,
    name: "Diabatic Wellness",
  },
];

const Category = ({ filterItem, menuList }) => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="category-wrapper">
      <button
        className="category-scroll-button category-left"
        onClick={scrollLeft}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div className="category-container" ref={containerRef}>
        <div className="category-content">
          {images.map((curElem, index) => {
            return (
              <div className="category-item" key={index}>
                <img
                  src={curElem.image}
                  alt={curElem.name}
                  onClick={() => filterItem(curElem.name)}
                  className="category-card-image"
                />
                <h3
                  className="category-card-title"
                  onClick={() => filterItem(curElem.name)}
                >
                  {curElem.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
      <button
        className="category-scroll-button category-right"
        onClick={scrollRight}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default Category;
