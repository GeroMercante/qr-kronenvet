import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineArrowUp, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
// Logo
import LogoKronen from "../assets/logokronen.png";
// Opciones
import BgOptions from "../assets/utils/bgsubheader.png";
// Menú
import OS from "../assets/utils/ofertassemanales1.png";
import OM from "../assets/utils/ofertasmensuales2.png";
import LI from "../assets/utils/legajoimpositivo3.png";
import CA from "../assets/utils/capacitaciones4.png";
import Puntos from "../assets/utils/btnpuntos.png";
// Redes Sociales
import WB from "../assets/redes/white/iconoskronen-08.png";
import FB from "../assets/redes/white/iconoskronen-09.png";
import IG from "../assets/redes/white/iconoskronen-10.png";
import LN from "../assets/redes/white/iconoskronen-11.png";
import AP from "../assets/redes/white/iconoskronen-12.png";
import PS from "../assets/redes/white/iconoskronen-13.png";

const Box = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  .img {
    width: 270px;
    height: 55px;
  }

  .img-menu {
    position: relative;
    top: -310px;
    width: 225px;
    height: 45px;
  }

  .line-container {
    position: absolute;
    bottom: 100px;
    font-size: 25px;
    color: #fff;
    background-color: #f00;
    padding: 8px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 4px solid rgb(80, 80, 80);
    border-radius: 50%;
  }

  .close-menu {
    position: absolute;
    top: 27%;
    font-size: 25px;
    color: #fff;
    background-color: #f00;
    padding: 8px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 4px solid rgb(80, 80, 80);
    border-radius: 50%;
  }
`;

const DataContain = styled(motion.div)`
  position: absolute;
  height: 600px;
  transition: 1.5s;
  bottom: -110px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${BgOptions});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .menu-swiper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 2rem;
    .contain-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px 30px;
      img {
        width: 110px;
        height: 110px;
      }
    }
    .btn-puntos {
      margin-top: 10px;
      width: 250px;
      height: 65px;
    }
    .redes-sociales {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 26px;
      img {
        width: 20px;
        height: 20px;
        margin-top: 2rem;
      }
    }
  }
`;

const Home = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <>
      <Box>
        {!activeMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ delay: 0.5 }}
            transition={{ delay: 0.2 }}
          >
            <img src={LogoKronen} alt="Kronen Vet" className="img" />
          </motion.div>
        )}
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ delay: 0.5 }}
            transition={{ delay: 0.2 }}
          >
            <img src={LogoKronen} alt="Kronen Vet" className="img-menu" />
          </motion.div>
        )}
        {!activeMenu && (
          <motion.div
            className="line-container"
            onClick={() => setActiveMenu(true)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ delay: 0.5 }}
            transition={{ delay: 0.3 }}
            whileTap={{ scale: 0.8 }}
          >
            <AiOutlineArrowUp />
          </motion.div>
        )}
        {activeMenu && (
          <motion.div
            className="close-menu"
            onClick={() => setActiveMenu(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <AiOutlineClose />
          </motion.div>
        )}
        {activeMenu && (
          <DataContain
            initial={{ y: "500px" }}
            animate={{ y: 0 }}
            exit={{ opacity: 0 }}
          >
            <div className="menu-swiper">
              <div className="contain-grid">
                <Link to="ofertas-semanales">
                  <img src={OS} alt="Ofertas Semanales Kronen" />
                </Link>
                <Link to="/ofertas-mensuales">
                  <img src={OM} alt="Ofertas Mensuales" />
                </Link>
                <a href="https://drive.google.com/file/d/1R_Yrvh9M5ktXxKVaOwf0TwkT7PndwR7d/view">
                  <img src={LI} alt="Ofertas Semanales Kronen" />
                </a>
                <Link to="/capacitaciones">
                  <img src={CA} alt="Capacitaciones Kronen" />
                </Link>
              </div>
              <a
                href="https://drive.google.com/file/d/1s0188jNjCes_b9MuQ_lXwUtNzefuXCIQ/view"
                target="_blank"
              >
                {/* <img
                  src={Puntos}
                  alt="Puntos KronenVet"
                  className="btn-puntos"
                /> */}
              </a>
              <div className="redes-sociales">
                <a href="https://www.kronenvet.com.ar/" target="_blank">
                  <img src={WB} alt="Web Sociales Kronen" />
                </a>
                <a href="https://www.facebook.com/kronenvet/" target="_blank">
                  <img src={FB} alt="Facebook Sociales Kronen" />
                </a>
                <a href="https://www.instagram.com/kronenvet/" target="_blank">
                  <img src={IG} alt="Instagram Sociales Kronen" />
                </a>
                <a
                  href="https://www.linkedin.com/company/kronenvet/"
                  target="_blank"
                >
                  <img src={LN} alt=" Linkedin Sociales Kronen" />
                </a>
                <a
                  href="https://apps.apple.com/ar/app/kronen/id1473814533"
                  target="_blank"
                >
                  <img src={AP} alt=" Apple Store Sociales Kronen" />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.app.kronenvet&hl=es_AR"
                  target="_blank"
                >
                  <img src={PS} alt="Play Store Sociales Kronen" />
                </a>
              </div>
            </div>
          </DataContain>
        )}
      </Box>
    </>
  );
};

export default Home;
