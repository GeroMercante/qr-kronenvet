import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
// Logo
import Logo from "../assets/logokronen.png";
// Redes Sociales
import WB from "../assets/redes/red/1.png";
import FB from "../assets/redes/red/2.png";
import IG from "../assets/redes/red/3.png";
import LN from "../assets/redes/red/4.png";
import AP from "../assets/redes/red/5.png";
import PS from "../assets/redes/red/6.png";

const Box = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  text-align: center;

  .logo-container {
    width: 215px;
    height: 50px;

    img {
      width: 100%;
      height: 100%;
    }
  }

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

  .btns-link {
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    align-items: center;
    text-align: center;

    .btn-form {
      background: #333333 !important;
    }

    .btn {
      width: 85%;
      font-size: 15px;
      background: #f00;
      border: none;
      outline: none;
      font-weight: 900;
      padding: 16px 5px;
      cursor: pointer;
      border-radius: 16px;
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;

      a {
        color: #fff;
        text-decoration: none;
        :hover {
          text-decoration: none;
        }
      }
    }
  }

  .footer-socials-link {
    display: flex;
    gap: 0 20px;

    img {
      width: 20px;
      height: 20px;
    }
  }
`;

const Capacitaciones = () => {
  return (
    <Box
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ delay: 0.5 }}
      transition={{ delay: 0.3 }}
    >
      <div className="return-btn">
        <Link to="/">
          <motion.button className="btn-exit" whileTap={{ scale: 0.8 }}>
            <AiOutlineLeft />
          </motion.button>
        </Link>
      </div>
      <div className="logo-container">
        <img src={Logo} alt="Krönen Vet" />
      </div>
      <div className="btns-link">
        <motion.button
          className="btn btn-cap"
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
        >
          <a href="https://www.instagram.com/tv/CfxhrrJstbs/?utm_source=ig_web_copy_link">
            Capacitación: Hipertirodismo felino - MV. Luciano Casas
          </a>
        </motion.button>
        <motion.button
          className="btn"
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
        >
          <a href="https://www.instagram.com/tv/Cfxb5t1PCeD/?utm_source=ig_web_copy_link">
            Capacitacion: Hipotiroidismo canino - MV. Luciano Casas
          </a>
        </motion.button>
        <motion.button
          className="btn"
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
        >
          <a href="https://www.instagram.com/tv/CiTw57hu_jf/?utm_source=ig_web_copy_link">
            Capacitacion: Corticoides, ¿Por qué temerles? - Dr. Pablo Manzuc
          </a>
        </motion.button>
        <motion.button
          className="btn"
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
        >
          <a href="https://www.instagram.com/tv/Ck17RrEPITg/?utm_source=ig_web_copy_link">
            Capacitacion: ¿Cómo utilizar corticoides en el ojo? - Dr. Gustavo
            Zapata
          </a>
        </motion.button>
        <motion.button
          className="btn btn-form"
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
        >
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSftPwD1_tXX7OO_D92lKOM4qQH3a6Jk3jymLI7QVIRujfOBUg/viewform">
            Completa nuestro formulario
          </a>
        </motion.button>
      </div>
      <div className="footer-socials-link">
        <a href="https://www.kronenvet.com.ar/">
          <img src={WB} alt="Kronen Redes Sociles" />
        </a>
        <a href="https://www.facebook.com/kronenvet/">
          <img src={FB} alt="Kronen Redes Sociles" />
        </a>
        <a href="https://www.instagram.com/kronenvet/">
          <img src={IG} alt="Kronen Redes Sociles" />
        </a>
        <a href="https://www.linkedin.com/company/kronenvet/">
          <img src={LN} alt="Kronen Redes Sociles" />
        </a>
        <a href="https://apps.apple.com/ar/app/kronen/id1473814533">
          <img src={AP} alt="Kronen Redes Sociles" />
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.app.kronenvet&hl=es_AR">
          <img src={PS} alt="Kronen Redes Sociles" />
        </a>
      </div>
    </Box>
  );
};

export default Capacitaciones;
