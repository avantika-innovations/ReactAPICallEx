/* eslint-disable react/jsx-no-undef */
import React from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js";

import logo from "../../images/logo.svg";
// import screenlogo from '../../screenlogo-1.png'
import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";

const Header = tw.header`
  flex justify-between items-center
  max-w-screen-xl mx-auto
`;

export const NavLinks = tw.div`inline-block`;

/* hocus: stands for "on hover or focus"
 * hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
 */
export const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`;

export const PrimaryLink = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-primary-500 text-gray-100
  hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;

export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};
  // ${tw`flex items-center font-black border-b-0 text-2xl!`};

  img {
    ${tw`w-10 mr-3`}
  }
`;

export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between`;
export const NavToggle = tw.button`
  lg:hidden z-20 focus:outline-none hocus:text-primary-500 transition duration-300
`;
export const MobileNavLinks = motion(styled.div`
  ${tw`lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white`}
  ${NavLinks} {
    ${tw`flex flex-col items-center`}
  }
`);

export const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center
`;

export default ({ roundedHeaderButton = false, logoLink, links, className, collapseBreakpointClass = "lg" }) => {
  /*
   * This header component accepts an optionals "links" prop that specifies the links to render in the navbar.
   * This links props should be an array of "NavLinks" components which is exported from this file.
   * Each "NavLinks" component can contain any amount of "NavLink" component, also exported from this file.
   * This allows this Header to be multi column.
   * So If you pass only a single item in the array with only one NavLinks component as root, you will get 2 column header.
   * Left part will be LogoLink, and the right part will be the the NavLinks component you
   * supplied.
   * Similarly if you pass 2 items in the links array, then you will get 3 columns, the left will be "LogoLink", the center will be the first "NavLinks" component in the array and the right will be the second "NavLinks" component in the links array.
   * You can also choose to directly modify the links here by not passing any links from the parent component and
   * changing the defaultLinks variable below below.
   * If you manipulate links here, all the styling on the links is already done for you. If you pass links yourself though, you are responsible for styling the links or use the helper styled components that are defined here (NavLink)
   */
  const defaultLinks = [
    <NavLinks key={1} style={{padding:0,display:'flex'}}>
      <NavLink href="/#">Homepage</NavLink>
      <div className="dropdown relative">
        <links className="text-gray-500 hover:text-gray-700  focus:text-gray-700  mr-4  dropdown-toggle  hidden-arrow  flex items-center " href="#" id="dropdownMenuButton1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          
        <NavLink href="/#">District</NavLink>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="caret-down"
          class="w-2"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
          ></path>
        </svg>
        </links>
          <ul className=" dropdown-menu  min-w-max  absolute  hidden  bg-white  text-base  z-50  float-left  py-2  list-none  text-lef  shadow-lg  mt-1  hidden  m-0  bg-clip-padding  border-none  left-auto  right-0" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">
                District Committee
              </a>
            </li>
            <li>
              <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">
                District Governor's Official Club Visit
              </a>
            </li>
            <li>
              <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">
                Assistant Governor's
              </a>
            </li>
            <li>
              <a href="#" className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" >
                District Events
              </a>
            </li>
            
          </ul>
      </div>
      <div className="dropdown relative">
        <links className="text-gray-500 hover:text-gray-700  focus:text-gray-700  mr-4  dropdown-toggle  hidden-arrow  flex items-center " href="#" id="dropdownMenuButton1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          
        <NavLink href="/#">GML</NavLink>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="caret-down"
          class="w-2"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
          ></path>
        </svg>
        </links>
          <ul className=" dropdown-menu  min-w-max  absolute  hidden  bg-white  text-base  z-50  float-left  py-2  list-none  text-lef  shadow-lg  mt-1  hidden  m-0  bg-clip-padding  border-none  left-auto  right-0" aria-labelledby="dropdownMenuButton1">
            <li>
              
                <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">
                  {/* GML 2020-21 */}
                  <div className="dropend relative">
                      <links className="text-gray-500 hover:text-gray-700  focus:text-gray-700  mr-4  dropdown-toggle  hidden-arrow  flex items-center " href="#" id="dropdownMenuButton1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        
                      <NavLink href="/#">GML 2020-21</NavLink>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="caret-right"
                        class="w-1.5 ml-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 192 512"
                      >
                        <path
                          fill="currentColor"
                          d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
                        ></path>
                      </svg>
                      </links>
                        {/* <ul className=" dropdown-menu  min-w-max    hidden  bg-white  text-base  z-50  float-left  py-2  list-none  text-lef  shadow-lg  mt-1  m-0  bg-clip-padding  border-none" aria-labelledby="dropdownMenuButton1" >
                          <li>
                            <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">
                              Rotary Club of Bolpur-Santiniketan
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">
                              Rotary Club of Gangtok
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">
                            Rotary Club of Guwahati City
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">
                            Rotary Club of Malda
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">
                            Rotary Club of Tezpur 
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">
                            Rotary Club of Siliguri Central
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">
                            Rotary Club of Orchid City Shillong 
                            </a>
                          </li>
                        </ul> */}
                    </div>
                </a>
                
            </li>
            
            <li>
              <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">
                Foothills 2021-22
              </a>
            </li>
            <li>
              <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">
              GML 2021-22
              </a>
            </li>
          </ul>
      </div>
      <div className="dropdown relative">
        <links className="text-gray-500 hover:text-gray-700  focus:text-gray-700  mr-4  dropdown-toggle  hidden-arrow  flex items-center " href="#" id="dropdownMenuButton1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          
        <NavLink href="/#">Rotary Areas of Focus</NavLink>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="caret-down"
          class="w-2"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
          ></path>
        </svg>
        </links>
          <ul className=" dropdown-menu  min-w-max  absolute  hidden  bg-white  text-base  z-50  float-left  py-2  list-none  text-lef  shadow-lg  mt-1  hidden  m-0  bg-clip-padding  border-none  left-auto  right-0" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">
                Basic Education And Literacy
              </a>
            </li>
            <li>
              <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">
                Disease Prevention And Treatment
              </a>
            </li>
            <li>
              <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">
              Economic Community And Development
              </a>
            </li>
            <li>
              <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">
              Mental And Health Child 
              </a>
            </li>
            <li>
              <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">
              Peace And Conflict Prevention/Resolution 
              </a>
            </li>
            <li>
              <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">
              Water And Sanitation 
              </a>
            </li>
            <li>
              <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">
              Supporting The Environment 
              </a>
            </li>
          </ul>
      </div>
      <div className="dropdown relative">
        <links className="text-gray-500 hover:text-gray-700  focus:text-gray-700  mr-4  dropdown-toggle  hidden-arrow  flex items-center " href="#" id="dropdownMenuButton1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          
        <NavLink href="/#">Partners in Service</NavLink>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="caret-down"
          class="w-2"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
          ></path>
        </svg>
        </links>
          <ul className=" dropdown-menu  min-w-max  absolute  hidden  bg-white  text-base  z-50  float-left  py-2  list-none  text-lef  shadow-lg  mt-1  hidden  m-0  bg-clip-padding  border-none  left-auto  right-0" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">
                2020-21
              </a>
              <ul
                    class="
                      dropdown-menu
                      min-w-max
                      absolute
                      hidden
                      bg-white
                      text-base
                      z-50
                      float-left
                      py-2
                      list-none
                      text-left
                      rounded-lg
                      shadow-lg
                      mt-1
                      hidden
                      m-0
                      bg-clip-padding
                      border-none
                    "
                    aria-labelledby="dropdownMenuButton1e"
                  >
                    <li>
                      <a
                        class="
                          dropdown-item
                          text-sm
                          py-2
                          px-4
                          font-normal
                          block
                          w-full
                          whitespace-nowrap
                          bg-transparent
                          text-gray-700
                          hover:bg-gray-100
                        "
                        href="#"
                        >Action</a
                      >
                    </li>
                    <li>
                      <a
                        class="
                          dropdown-item
                          text-sm
                          py-2
                          px-4
                          font-normal
                          block
                          w-full
                          whitespace-nowrap
                          bg-transparent
                          text-gray-700
                          hover:bg-gray-100
                        "
                        href="#"
                        >Another action</a
                      >
                    </li>
                    <li>
                      <a
                        class="
                          dropdown-item
                          text-sm
                          py-2
                          px-4
                          font-normal
                          block
                          w-full
                          whitespace-nowrap
                          bg-transparent
                          text-gray-700
                          hover:bg-gray-100
                        "
                        href="#"
                        >Something else here</a
                      >
                    </li>
                  </ul>
            </li>
          </ul>
      </div>
      <NavLink href="/#">Logo</NavLink>
      <div className="dropdown relative">
        <links className="text-gray-500 hover:text-gray-700  focus:text-gray-700  mr-4  dropdown-toggle  hidden-arrow  flex items-center " href="#" id="dropdownMenuButton1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          
        <NavLink href="/#">Club Websites</NavLink>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="caret-down"
          class="w-2"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
          ></path>
        </svg>
        </links>
          <ul className=" dropdown-menu  min-w-max  absolute  hidden  bg-white  text-base  z-50  float-left  py-2  list-none  text-lef  shadow-lg  mt-1  hidden  m-0  bg-clip-padding  border-none  left-auto  right-0" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">
                Rotary Club of Bolpur-Santiniketan
              </a>
            </li>
            <li>
              <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">
                Rotary Club of Gangtok
              </a>
            </li>
            <li>
              <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">
              Rotary Club of Guwahati City
              </a>
            </li>
            <li>
              <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">
              Rotary Club of Malda
              </a>
            </li>
            <li>
              <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">
              Rotary Club of Tezpur 
              </a>
            </li>
            <li>
              <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">
              Rotary Club of Siliguri Central
              </a>
            </li>
            <li>
              <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">
              Rotary Club of Orchid City Shillong 
              </a>
            </li>
          </ul>
      </div>
      
      <NavLink href="/#">Projects</NavLink>
      <NavLink href="/#">Rotary Year 2023-24</NavLink>
      <NavLink href="/#">Contact Us</NavLink>
      {/* <NavLink href="/#" tw="lg:ml-12!">
        Login
      </NavLink>
      <PrimaryLink css={roundedHeaderButton && tw`rounded-full`}href="/#">Sign Up</PrimaryLink> */}
        
        {/* <div className="dropend relative">
        <links className="text-gray-500 hover:text-gray-700  focus:text-gray-700  mr-4  dropdown-toggle  hidden-arrow  flex items-center " href="#" id="dropdownMenuButton1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          
        <NavLink href="/#">Club Websites</NavLink>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="caret-right"
          class="w-1.5 ml-2"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 192 512"
        >
          <path
            fill="currentColor"
            d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
          ></path>
        </svg>
        </links>
          <ul className=" dropdown-menu  min-w-max  absolute  hidden  bg-white  text-base  z-50  float-left  py-2  list-none  text-lef  shadow-lg  mt-1  hidden  m-0  bg-clip-padding  border-none  left-auto  right-0" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">
                Rotary Club of Bolpur-Santiniketan
              </a>
            </li>
            <li>
              <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">
                Rotary Club of Gangtok
              </a>
            </li>
            <li>
              <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">
              Rotary Club of Guwahati City
              </a>
            </li>
            <li>
              <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">
              Rotary Club of Malda
              </a>
            </li>
            <li>
              <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">
              Rotary Club of Tezpur 
              </a>
            </li>
            <li>
              <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">
              Rotary Club of Siliguri Central
              </a>
            </li>
            <li>
              <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">
              Rotary Club of Orchid City Shillong 
              </a>
            </li>
          </ul>
      </div> */}
        
    </NavLinks>

  ];

  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const collapseBreakpointCss = collapseBreakPointCssMap[collapseBreakpointClass];

  const defaultLogoLink = (
    <LogoLink href="/">
      {/* <img src={logo} alt="logo" /> */}
      Rotary3240
      <img src="../../../logo192.png" alt="logo"/>
    </LogoLink>
  );

  logoLink = logoLink || defaultLogoLink;
  links = links || defaultLinks;

  return (
    <Header className={className || "header-light"} 
    style={{maxWidth:'none'}}
    >
      <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
        {logoLink}
        {links}
      </DesktopNavLinks>

      <MobileNavLinksContainer css={collapseBreakpointCss.mobileNavLinksContainer}>
        {logoLink}
        <MobileNavLinks initial={{ x: "150%", display: "none" }} animate={animation} css={collapseBreakpointCss.mobileNavLinks}>
          {links}
        </MobileNavLinks>
        <NavToggle onClick={toggleNavbar} className={showNavLinks ? "open" : "closed"}>
          {showNavLinks ? <CloseIcon tw="w-6 h-6" /> : <MenuIcon tw="w-6 h-6" />}
        </NavToggle>
      </MobileNavLinksContainer>
    </Header>
  );
};

/* The below code is for generating dynamic break points for navbar.
 * Using this you can specify if you want to switch
 * to the toggleable mobile navbar at "sm", "md" or "lg" or "xl" above using the collapseBreakpointClass prop
 * Its written like this because we are using macros and we can not insert dynamic variables in macros
 */

const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`
  },
  lg: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`
  },
  xl: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`
  }
};
