import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AiOutlineLeft } from "react-icons/ai";
import Logo from "../assets/logokronen.png";

import log1 from "../assets/redes/red/1.png";
import log2 from "../assets/redes/red/2.png";
import log3 from "../assets/redes/red/3.png";
import log4 from "../assets/redes/red/4.png";
import log5 from "../assets/redes/red/5.png";
import log6 from "../assets/redes/red/6.png";

const Box = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px 0;
  text-align: center;

  .btn-exit {
    position: absolute;
    top: 20px;
    left: 20px;
    outline: none;
    border: none;
    padding: 7px;
    border-radius: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
    border: 3px solid rgb(64, 64, 64);
    color: #fff;
    background: #f00;
  }

  .logo-container {
    position: absolute;
    top: 5%;
    width: 200px;
    height: 40px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .footer-container {
    display: flex;
    position: absolute;
    bottom: 5%;
    gap: 0 27px;
    img {
      width: 20px;
      height: 20px;
    }
  }

  .mySwiper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 360px;
    height: 555px;

    .swiper-button-next {
      display: none;
    }
    .swiper-button-prev {
      display: none;
    }
    .swiper-pagination-bullets {
      bottom: 30px;
    }
    .swiper-pagination-bullet-active {
      background: #f00 !important;
    }
    img {
      width: 100%;
      height: 505px;
      object-fit: contain;
    }
  }
`;

const ProductImagesSlider = (props) => {
  return (
    <>
      <Box>
        <div className="logo-container">
          <img src={Logo} alt="Krönen Vet" />
        </div>
        <Link to="/">
          <motion.button className="btn-exit" whileTap={{ scale: 0.8 }}>
            <AiOutlineLeft />
          </motion.button>
        </Link>
        <Swiper
          loop={true}
          spaceBetween={10}
          pagination={true}
          modules={[Pagination, Autoplay]}
          grabCursor={true}
          className="mySwiper"
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
        >
          {props.images.map((item, index) => (
            <SwiperSlide key={index}>
              <a href="https://kronenvet.com/#seven!">
                <img src={item} alt="HOTEL N26" />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="footer-container">
          <a href="https://www.kronenvet.com.ar/">
            <img src={log1} alt="Redes Kronen" />
          </a>
          <a href="https://www.facebook.com/kronenvet/">
            <img src={log2} alt="Redes Kronen" />
          </a>
          <a href="https://www.instagram.com/kronenvet/">
            <img src={log3} alt="Redes Kronen" />
          </a>
          <a href="https://www.linkedin.com/company/kronenvet/">
            <img src={log4} alt="Redes Kronen" />
          </a>
          <a href="https://apps.apple.com/ar/app/kronen/id1473814533">
            <img src={log5} alt="Redes Kronen" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.app.kronenvet&hl=es_AR">
            <img src={log6} alt="Redes Kronen" />
          </a>
        </div>
      </Box>
    </>
  );
};

ProductImagesSlider.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ProductImagesSlider;
