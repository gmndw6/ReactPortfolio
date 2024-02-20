import React from 'react'
import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import useMediaQuery from '../hooks/useMediaQuery'
import logo from '../assets/40s.png'
const Link = ({page, selectedPage, setSelectedPage, className}) => {
  const lowerCasePage = page.toLowerCase();
  return(
    <AnchorLink className={`${selectedPage === lowerCasePage ? "text-white" : ""}
      hover: text-white transition duration-500 p-1 ${className}`}
      // text-custom-color 
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
      >
      {page}
    </AnchorLink>
  )
}
const Navbar = ({isTopOfPage , selectedPage, setSelectedPage}) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "text-custom-color"
  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
        <div className="flex items-center justify-between mx-auto w-5/6">
          {/* <h4 className="font-playfair text-3xl font-bold">JE</h4> */}
          <img 
          src={logo}
          alt="menu-icon"
          className="w-40 h-5"
          />
          {/* DESKTOP NAV */}
          {isAboveSmallScreens ? (    
            <div className='flex justify-between gap-16 font-montserrat text-lg font-semibold'>
                <Link
                  className="hover:!text-custom-color hover:font-semibold transition duration-500"
                  page="Services"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  className="hover:!text-custom-color hover:font-semibold transition duration-500"
                  page="Projects"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  className="hover:!text-custom-color hover:font-semibold transition duration-500"
                  page="About"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  className="bg-white !text-black rounded-lg py-2 px-4 font-semibold
                              hover:bg-custom-color hover:!text-white transition duration-500"
                  page="Contact"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
            </div>
          ) : (
            <button 
            className='rounded-full bg-red p-2'
            onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <img src="../assets/menu-icon.svg" alt="menu-icon" />
            </button>
          )}

            {/* MOBILE MENU POPUP */}
            {!isAboveSmallScreens && isMenuToggled &&(
              <div className='fixed right-0 bottom-0 h-full bg-black w-[300px]'>
                {/* CLOSE ICON */}
                <div className="flex justify-end p-12">
                  <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                  <img src="../assets/close-icon.svg" alt="close-icon" />
                  </button>
                </div>
                <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
                <Link
                  page="Services"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Projects"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="About"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  className="bg-white rounded-sm !text-black"
                  page="Contact"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                </div>
              </div>
            )}

        </div>
    </nav>
  )
}

export default Navbar