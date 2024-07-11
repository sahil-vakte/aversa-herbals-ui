// src/Card.js
import React from "react";
import Img from "../../../Assets/aversa-products/IMG_0913.jpeg";
import "./card.css";
import diabatic from "../../../Assets/Best-Selling-Product/anti-diabatic-product.png";
import heartcare from "../../../Assets/Best-Selling-Product/heart-care.png";
import renzova from "../../../Assets/Best-Selling-Product/Renzova-capsule.png";
import mencharge from "../../../Assets/Best-Selling-Product/Men-charge.png";
import ortho from "../../../Assets/Best-Selling-Product/ortho-care.png";
import ashwagandha from "../../../Assets/Best-Selling-Product/Ashwagandha.png";
import syrup from "../../../Assets/Best-Selling-Product/Planet-syrup.png";
import addiction from "../../../Assets/Best-Selling-Product/Anti-addication.png";

export const Card = () => {
  return (
    <div className="flex justify-center p-4">
      <div className="flex flex-col lg:flex-row justify-center items-center h-auto lg:h-[618px] w-full lg:w-[90%]">
        {/* cards */}

        <div className="flex justify-center w-full lg:w-[80%]">
          <div className="px-4 w-full">
            <div className="flex flex-wrap justify-center gap-6">
              {Api.map((data, i) => (
                <div
                  key={i}
                  className="div-best-selling-product-text mx-auto linear-color"
                >
                  {/* image */}
                  <div className="flex justify-center -mt-12 mx-auto ">
                    <img
                      src={data.img}
                      alt="Placeholder"
                      className="object-cover best-selling-image "
                    />
                  </div>
                  {/* text */}
                  <div className="px-6 flex flex-col  items-center h-full ">
                    <span className=" text-gray-600 text-center font-bold text-xl best-sellin-product-title">
                      {data.title}
                    </span>
                    <p className=" pb-2 text-gray-600 text-center  best-sellin-product-text">
                      {data.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* side Image */}
        <div className="w-full lg:w-[15%] mt-9 lg:mt-0 relative">
          <div className="bg-image h-full lg:pt-[400px]">
            <p className="text-[30px] lg:text-[43px] font-bold text-white pl-3 leading-10">
              SHOP BEST OFFERS TODAY
            </p>
            <button className="w-[110px] ml-3 mb-6 justify-center h-[22px] text-[#2AAE95] rounded-full bg-white p-1 leading-5 font-bold flex items-center">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Api = [
  {
    img: diabatic,
    title: "Anti Diabatic Tablet ",
    text:
      "Blend of potent Ayurvedic herbs known for their effectiveness in managing blood sugar levels",
  },
  {
    img: heartcare,
    title: "Heart Care Tablet ",
    text:
      "Support heart health, enhance circulation, and promote overall well-being & cardiovascular benefits",
  },
  {
    img: renzova,
    title: "Renzova Capsule ",
    text:
      "Detoxify the kidneys, promote healthy urinary function, and maintain overall renal well-being",
  },
  {
    img: mencharge,
    title: "Men Charge Tablet",
    text:
      "Enhance energy levels, support sexual health, and promote overall well-being",
  },
  {
    img: ortho,
    title: "Ortho Care Tablet",
    text:
      "reduce inflammation, improve joint mobility, and promote overall musculoskeletal health",
  },
  {
    img: ashwagandha,
    title: "Ashwagandha Powder",
    text:
      "reduce stress, boost the energy levels, and enhance overall well-being",
  },
  // {
  //   img: syrup,
  //   title: "platelet care syrup",
  //   text:
  //     "boost immunity, improve blood circulation & maintain optimal platelet levels naturally",
  // },
  // {
  //   img: addiction,
  //   title: "Anti Addiction Drop ",
  //   text:
  //     "reducing cravings, detoxifying the body, and promoting overall mental and physical well-being.",
  // },
];

export default Card;
