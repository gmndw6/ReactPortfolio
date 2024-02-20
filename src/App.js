import { useEffect, useState } from "react";
import useMediaQuery from './hooks/useMediaQuery'
import Navbar from "./scences/Navbar"
import DotGroup from "./scences/DotGroup"
import Landing from "./scences/Landing"
import LineGradient from './components/LineGradient'
import MySkills from "./scences/MySkills";
import Projects from "./scences/Projects";
import Testimonials from "./scences/Testimonials";
import Contact from "./scences/Contact";
function App() {
  const [selectedPage, setSelectedPage] = useState('about');
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(()=>{
    const handleScroll = () => {
      if(window.scrollY === 0)setIsTopOfPage(true);
      if(window.scrollY !== 0)setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  },[])

  return (
    <div className="app bg-deep-blue">
          <Navbar
            isTopOfPage={isTopOfPage}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <div className="w-5/6 mx-auto md:h-full">
            {isAboveMediumScreens && (
              <DotGroup
              selectedPage={selectedPage}
              etSelectedPage={setSelectedPage}
              />
            )}
            <Landing setSelectedPage={setSelectedPage}/>
          </div>

          <LineGradient/>
          <div className="w-5/6 mx-auto md:h-full">
              <MySkills/>
          </div>

          <LineGradient/>
          <div className="w-5/6 mx-auto">
              <Projects/>
          </div>

          <LineGradient/>
          <div className="w-5/6 mx-auto md:h-full">
              <Testimonials/>
          </div>

          <LineGradient/>
          <div className="w-5/6 mx-auto md:h-full">
              <Contact/>
          </div>
    </div>
  );
}

export default App;
