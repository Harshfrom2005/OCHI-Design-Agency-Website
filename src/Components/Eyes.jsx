import { useEffect, useState } from "react";

const Eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="eyes w-full h-screen overflow-hidden ">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className="w-full h-full bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')] bg-cover bg-center relative"
      >
        <div className="flex gap-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex items-center justify-center">
            <div className="w-2/3 h-2/3 rounded-full bg-zinc-900 relative">
              <div
                style={{
                  transform: `translate(-50%,-50%)  rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
              >
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center"></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] rounded-full bg-zinc-100  flex items-center justify-center">
            <div className="w-2/3 h-2/3 rounded-full bg-zinc-900 relative">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
              >
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
