import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";

const Landingpage = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-.3"
      className="w-full h-screen bg-zinc-900 pt-2"
    >
      <div
        className="textstructure mt-40 px-20
      "
      >
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker" key={index}>
              <div className="w-fit flex items-center">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="w-[8vw] h-[5.1vw] relative bg-red-500 rounded-md -mt-[2.1vw]"
                  >
                    <img
                      className="w-full bg-cover h-full rounded-md"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuQ2USiBdCd51KTLBD_5L00d-xg2W_EgHDyg&s"
                      alt=""
                    />
                  </motion.div>
                )}
                <h1
                  className={`text-8xl leading-[6vw] uppercase tracking-tighter font-['Founders_Grotesk'] font-medium `}
                >
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-32 flex justify-between items-center">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p
              className="text-md font-light  font-['Neue_Montreal'] leading-none py-5 px-10"
              key={index}
            >
              {item}
            </p>
          );
        })}
        <div className="Start px-8 flex items-center gap-2">
          <div className="px-5 py-2 border-[1px] border-zinc-500 rounded-full font-light text-sm uppercase font-['Neue_Montreal'] ">
            Start The Project
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-500 rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
