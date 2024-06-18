import About from "./Components/About";
import Cards from "./Components/Cards";
import Eyes from "./Components/Eyes";
import Featured from "./Components/Featured";
import Footer from "./Components/Footer";
import Landingpage from "./Components/Landingpage";
import Marquee from "./Components/Marquee";
import Navbar from "./Components/Navbar";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="min-h-screen w-full bg-zinc-900  text-white">
      <Navbar />
      <Landingpage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;
