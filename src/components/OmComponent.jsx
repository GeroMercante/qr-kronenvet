import React from "react";
import { OfertasMensualesImg } from ".";
import ProductImagesSlider from "./ProductImagesSlider";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";

const OmComponent = () => {
  return (
    <>
      <div>
        <ProductImagesSlider images={OfertasMensualesImg} />
      </div>
    </>
  );
};

export default OmComponent;
