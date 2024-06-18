const Cards = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 flex items-center px-32 gap-5">
      <div className="card-container w-1/2 h-[50vh]">
        <div className="card rounded-xl bg-[#004D43] w-full h-full flex items-center justify-center relative">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt="ochi-logo"
          />
          <button className="px-3 border-2 border-[#98c244] text-[#98c244] py-1 left-8 bottom-10 rounded-full absolute font-['Neue_Montreal'] font-semibold text-sm">
            &copy; 2019-2022
          </button>
        </div>
      </div>
      <div className="card-container w-1/2 h-[50vh] flex gap-5">
        <div className="card rounded-xl bg-[#262626] w-1/2 h-full flex items-center justify-center relative">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt="clutch-logo"
          />
          <button className="px-5 border-2 border-white text-white py-1 left-4 bottom-8 rounded-full absolute font-['Neue_Montreal'] font-ligt text-sm">
            RATING 5.0 ON CLUTCH
          </button>
        </div>
        <div className="card rounded-xl bg-[#212121] w-1/2 h-full flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt="The Future Academy Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
