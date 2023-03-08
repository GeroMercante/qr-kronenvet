import React from "react";
import { OfertasSemanalesImg } from ".";
import ProductImagesSlider from "./ProductImagesSlider";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";

const OsComponent = () => {
  return (
    <>
      <div>
        <ProductImagesSlider images={OfertasSemanalesImg} />
      </div>
    </>
  );
};

export default OsComponent;
