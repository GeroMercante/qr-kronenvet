import React from "react";
import OmComponent from "../components/OmComponent";
import { motion } from "framer-motion";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";

const OfertasMensuales = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <OmComponent />
    </motion.div>
  );
};

export default OfertasMensuales;
