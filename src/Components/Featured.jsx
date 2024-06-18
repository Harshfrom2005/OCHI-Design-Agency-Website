import { motion } from "framer-motion";
import { useState } from "react";
import { Power4 } from "gsap/all";

const Featured = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="w-full py-32">
      <div className="w-full px-14 border-b-[1px] border-zinc-700 pb-10">
        <h1 className="text-6xl font-['Neue_Montreal'] tracking-tight">
          Featured projects
        </h1>
      </div>
      <div className="px-20 mt-20">
        <div className="cards w-full flex gap-5">
          <div className="card-container relative w-1/2 h-[75vh]  ">
            <div className="card absolute flex overflow-hidden top-1/2 -translate-x-1/2 -translate-y-1/2 left-full leading-none text-8xl z-[9] text-[#CDEA68] tracking-tightest ">
              {"FYDE".split("").map((item, index) => {
                return (
                  <motion.span className="inline-block" key={index}>
                    {item}
                  </motion.span>
                );
              })}
            </div>
            <div className="card w-full h-full rounded-xl bg-green-500 overflow-hidden">
              <img
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt="image1"
                className="h-full w-full bg-cover"
              />
            </div>
          </div>
          <div className="card-container relative w-1/2 h-[75vh]  ">
            <div className="card absolute flex overflow-hidden top-1/2 -translate-x-1/2 -translate-y-1/2 left-full leading-none text-8xl z-[9] text-[#CDEA68] tracking-tightest ">
              {"VISE".split("").map((item, index) => {
                return (
                  <motion.span className="inline-block" key={index}>
                    {item}
                  </motion.span>
                );
              })}
            </div>
            <div className="card w-full h-full rounded-xl bg-green-500 overflow-hidden">
              <img
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt="image2"
                className="h-full w-full bg-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
