import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-speed=".1"
      data-scroll-section
      className="w-full py-10 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl"
    >
      <div className="text flex overflow-hidden whitespace-nowrap">
        <motion.h1
          className="text-[17vw] leading-none font-['Founders_Grotesk'] uppercase
          font-semibold pr-20"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
        >
          We are OCHI
        </motion.h1>
        <motion.h1
          className="text-[17vw] leading-none font-['Founders_Grotesk'] uppercase font-semibold  pr-20"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
        >
          We are OCHI
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
