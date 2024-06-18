const About = () => {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.1vw] tracking-tight">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full border-t-[1px] border-black mt-16 flex gap-5">
        <div className="w-1/2 pt-10">
          <h1 className="text-6xl">Our Approach</h1>
          <button className="flex gap-3 items-center  mt-5 px-10 py-3 text-white text-lg uppercase font-medium bg-zinc-900 rounded-full ">
            Read More
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 bg-[#7a8d37] h-[60vh] mt-7 rounded-xl">
          <img
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt="Homepage-img"
            className="w-full bg-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
