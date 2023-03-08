import React from "react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import OsComponent from "../components/OsComponent";
import { motion } from "framer-motion";

const OfertasSemanales = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <OsComponent />
    </motion.div>
  );
};

export default OfertasSemanales;
