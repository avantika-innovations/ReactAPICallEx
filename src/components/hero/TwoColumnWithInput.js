/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-undef */
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";

import Header, { NavLinks } from "../headers/light.js";

import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import DesignIllustration from "../../images/design-illustration-2.svg";
import CustomersLogoStripImage from "../../images/customers-logo-strip.png";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24`;

const LeftColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;

const RightColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;


const Heading = tw.h1`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight`;
const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg`;

const Actions = styled.div`
  ${tw`relative max-w-md text-center mx-auto lg:mx-0`}
  input {
    ${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300  focus:border-primary-500 hover:border-gray-500`}
  }
  button {
    ${tw`w-full sm:absolute right-0 top-0 bottom-0 bg-primary-500 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-primary-900 transition duration-300`}
  }
`;

const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center`;

// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;

const CustomersLogoStrip = styled.div`
  ${tw`mt-12 lg:mt-20`}
  p {
    ${tw`uppercase text-sm lg:text-xs tracking-wider font-bold text-gray-500`}
  }
  img {
    ${tw`mt-4 w-full lg:pr-16 xl:pr-32 opacity-50`}
  }
`;

export default ({ roundedHeaderButton }) => {
  return (
    <>
      <Header roundedHeaderButton={roundedHeaderButton} />
      
        <nav className="navbar navbar-expand-lg shadow-md py-2 relative flex items-center w-full justify-between mt-5" style={{paddingLeft:'auto',paddingRight:'auto'}}>
          <div className="px-6 w-full flex flex-wrap items-center justify-between" style={{float:'left'}}>
            {/* <div className="flex items-center">
              <button
                className="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out mr-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContentY"
                aria-controls="navbarSupportedContentY"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="caret-down"
                  className="w-5"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                  ></path>
                </svg>
              </button>
            </div> */}
            <div className="navbar-collapse grow items-center" id="navbarSupportedContentY">
              <ul className="navbar-nav mr-auto lg:flex lg:flex-row" style={{marginLeft:'auto',fontWeight:'bold'}}>

                <li className="nav-item">
                  {/* <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" >Home</a> */}
                  {/* <a href="#!" className="underline decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out">A link with underline on hover</a> */}
                  <button type="button" className="inline-block px-6 py-2.5 bg-transparent font-medium text-xs leading-tight uppercase rounded hover:bg-gray-100 focus:focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 active:text-blue-800 transition duration-300 ease-in-out" style={{fontWeight:'bold',color:'#4054b2'}}>Homepage</button>
                  
                </li>

                <li className="nav-item">
                  <div className="dropdown relative"> 
                    <a className="text-gray-500 hover:text-gray-700  focus:text-gray-700  mr-4  dropdown-toggle  hidden-arrow  flex items-center " href="#" id="dropdownMenuButton1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      
                      <button type="button" className=" px-6 py-2.5 bg-transparent font-medium text-xs leading-tight uppercase rounded hover:bg-gray-100 transition duration-300 ease-in-out" style={{fontWeight:'bold',color:'#4054b2',display:'flex'}}>District
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="caret-down"
                          className="w-2"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                          style={{marginLeft:'15px'}}
                        >
                          <path
                            fill="currentColor"
                            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                          ></path>
                        </svg>
                        </button>
                    </a>
                      <ul className="dropdown-menu  min-w-max  absolute  hidden  bg-white  text-base  z-50  float-left  py-2  list-none  text-lef  shadow-lg  mt-1  hidden  m-0  border-none  left-auto  right-0" aria-labelledby="dropdownMenuButton1">
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
                </li>

                <li className="nav-item">
                  <div className="dropdown relative">
                    <a className="text-gray-500 hover:text-gray-700  focus:text-gray-700  mr-4  dropdown-toggle  hidden-arrow  flex items-center " href="#" id="dropdownMenuButton1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      
                      <button type="button" className=" w-100 inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-gray-100 focus:text-blue-700 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 active:text-blue-800 transition duration-300 ease-in-out" style={{fontWeight:'bold',color:'#4054b2',display:'flex'}}>GML
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="caret-down"
                          className="w-2"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                          style={{marginLeft:'15px'}}
                        >
                          <path
                            fill="currentColor"
                            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                          ></path>
                        </svg>
                      </button>
                    </a>
                      <ul className=" dropdown-menu  min-w-max  absolute  hidden  bg-white  text-base  z-50  float-left  py-2  list-none  text-lef  shadow-lg  mt-1  hidden  m-0  bg-clip-padding  border-none  left-auto  right-0" aria-labelledby="dropdownMenuButton1">
                        <li>
                          
                            <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">
                              
                              GML 2020-21
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
                </li>

                <li className="nav-item mb-2 lg:mb-0">
                  <div className="dropdown relative">
                    <a className="text-gray-500 hover:text-gray-700  focus:text-gray-700  mr-4  dropdown-toggle  hidden-arrow  flex items-center " href="#" id="dropdownMenuButton1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      
                      <button type="button" className="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-gray-100 focus:text-blue-700 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 active:text-blue-800 transition duration-300 ease-in-out" style={{fontWeight:'bold',color:'#4054b2',display:'flex'}}>Rotary Areas of Focus
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="caret-down"
                          className="w-2"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                          style={{marginLeft:'15px'}}
                        >
                          <path
                            fill="currentColor"
                            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                          ></path>
                        </svg>
                      </button>
                    </a>
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
                </li>

                <li className="nav-item mb-2 lg:mb-0">
                  <div className="dropdown relative">
                    <a className="text-gray-500 hover:text-gray-700  focus:text-gray-700  mr-4  dropdown-toggle  hidden-arrow  flex items-center " href="#" id="dropdownMenuButton1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      
                      <button type="button" className="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-gray-100 focus:text-blue-700 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 active:text-blue-800 transition duration-300 ease-in-out" style={{fontWeight:'bold',color:'#4054b2',display:'flex'}}>Partners in Service
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="caret-down"
                          className="w-2"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                          style={{marginLeft:'15px'}}
                        >
                          <path
                            fill="currentColor"
                            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                          ></path>
                        </svg>
                      </button>
                    </a>
                      <ul className=" dropdown-menu  min-w-max  absolute  hidden  bg-white  text-base  z-50  float-left  py-2  list-none  text-lef  shadow-lg  mt-1  hidden  m-0  bg-clip-padding  border-none  left-auto  right-0" aria-labelledby="dropdownMenuButton1">
                        <li>
                          <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">
                            2020-21
                          </a>
                        <ul className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none"
                              aria-labelledby="dropdownMenuButton1e"
                            >
                              <li>
                                <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                                  href="#"
                                  >Action</a
                                >
                              </li>
                              <li>
                                <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                                  href="#"
                                  >Another action</a
                                >
                              </li>
                              <li>
                                <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                                  href="#"
                                  >Something else here</a
                                >
                              </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="nav-item mb-2 lg:mb-0">
                  <button type="button" className="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-gray-100 focus:text-blue-700 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 active:text-blue-800 transition duration-300 ease-in-out" style={{fontWeight:'bold',color:'#4054b2'}}>Logo</button>
                </li>

                <li className="nav-item mb-2 lg:mb-0">
                  <div className="dropdown relative">
                    <a className="text-gray-500 hover:text-gray-700  focus:text-gray-700  mr-4  dropdown-toggle  hidden-arrow  flex items-center " href="#" id="dropdownMenuButton1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      
                      <button type="button" className="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-gray-100 focus:text-blue-700 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 active:text-blue-800 transition duration-300 ease-in-out" style={{fontWeight:'bold',color:'#4054b2',display:'flex'}}>Club Websites
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="caret-down"
                          className="w-2"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                          style={{marginLeft:'15px'}}
                        >
                          <path
                            fill="currentColor"
                            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                          ></path>
                        </svg>
                      </button>
                    </a>
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
                </li>

                <li className="nav-item mb-2 lg:mb-0">
                  <button type="button" className="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-gray-100 focus:text-blue-700 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 active:text-blue-800 transition duration-300 ease-in-out" style={{fontWeight:'bold',color:'#4054b2'}}>Projects</button>
                </li>

                <li className="nav-item mb-2 lg:mb-0">
                  <button type="button" className="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-gray-100 focus:text-blue-700 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 active:text-blue-800 transition duration-300 ease-in-out" style={{fontWeight:'bold',color:'#4054b2'}}>Rotary Year 2023-24</button>
                </li>

                <li className="nav-item mb-2 lg:mb-0">
                  <button type="button" className="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-gray-100 focus:text-blue-700 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 active:text-blue-800 transition duration-300 ease-in-out" style={{fontWeight:'bold',color:'#4054b2'}}>Contact Us</button>
                </li>




                <li className="nav-item">
                  <div className="dropdown relative"> 
                    <a className="text-gray-500 hover:dropdown-menu  focus:dropdown-menu  mr-4  dropdown-toggle  hidden-arrow  flex items-center " href="#" id="dropdownMenuButton1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      
                      <button type="button" className=" px-6 py-2.5 bg-transparent font-medium text-xs leading-tight uppercase rounded hover:visible transition duration-300 ease-in-out" style={{fontWeight:'bold',color:'#4054b2',display:'flex'}} >District
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="caret-down"
                          className="w-2"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                          style={{marginLeft:'15px'}}
                        >
                          <path
                            fill="currentColor"
                            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                          ></path>
                        </svg>
                        </button>
                    </a>
                      <ul className="dropdown-menu  min-w-max  absolute  hidden  bg-white  text-base  z-50  float-left  py-2  list-none  text-lef  shadow-lg  mt-1  hidden  m-0  border-none  left-auto  right-0" aria-labelledby="dropdownMenuButton1">
                        <li>
                          <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">
                            District Committee
                          </a>
                        </li>
                        
                        
                      </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      
      
      
      <Container>
        <TwoColumn  >
            
          <LeftColumn style={{marginRight:'20px'}}>
          <IllustrationContainer>
               <div
                  id="carouselDarkVariant"
                  className="carousel slide carousel-fade carousel-dark relative"
                  data-bs-ride="carousel"
                  style={{padding:"20px"}}
                >
                  
                  <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button
                      data-bs-target="#carouselDarkVariant"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      data-bs-target="#carouselDarkVariant"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      data-bs-target="#carouselDarkVariant"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                    <button
                      data-bs-target="#carouselDarkVariant"
                      data-bs-slide-to="3"
                      aria-label="Slide 1"
                    ></button>
                  </div>

                
                  <div className="carousel-inner relative w-full overflow-hidden" style={{verticalAlign:'middle'}}>
                    
                    <div className="carousel-item active relative float-left w-full">
                      <img
                        src="../../../../images/rotary1.PNG"
                        className="block w-full"
                        alt="Motorbike Smoke"
                      />
                      <div className="carousel-caption hidden  text-center">
                      
                      </div>
                    </div>

                    
                    <div className="carousel-item relative w-full">
                      <img
                        src="../../../../images/rotary2.PNG"
                        className="block w-full"
                        alt="Mountaintop"
                      />
                      <div className="carousel-caption hidden  text-center">
                      
                      </div>
                    </div>

                  
                    <div className="carousel-item relative float-left w-full">
                      <img
                        src="../../../../images/rotary3.PNG"
                        className="block w-full"
                        alt="Woman Reading a Book"
                      />
                      <div className="carousel-caption hidden  text-center">
                        
                      </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                      <img
                        src="../../../../images/rotary4.PNG"
                        className="block w-full"
                        alt="Woman Reading a Book"
                      />
                      <div className="carousel-caption hidden  text-center">
                        
                      </div>
                    </div>
                  </div>
                  
                  
                  <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselDarkVariant"
                    data-bs-slide="prev"
                  >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselDarkVariant"
                    data-bs-slide="next"
                  >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
             </IllustrationContainer>
          </LeftColumn>
           <RightColumn>
           <Heading>
              Loreum Ipsum<span tw="text-primary-500">.</span>
            </Heading>
            <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Paragraph>
            <Actions>
              <input type="text" placeholder="Your E-mail Address" />
              <button>Get Started</button>
            </Actions> 
            <CustomersLogoStrip>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              {/* <img src={CustomersLogoStripImage} alt="Our Customers" /> */}
            </CustomersLogoStrip>
          </RightColumn>
        </TwoColumn>
        <DecoratorBlob1 />
      </Container>
    </>
  );
};
