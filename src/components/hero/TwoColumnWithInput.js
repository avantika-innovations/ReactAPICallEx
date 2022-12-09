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

      <nav className="nav mt-5 p-2" style={{backgroundColor:'#0c3f74',height:'70px',display: 'flex',justifyContent: 'space-between',padding:'25px 25px 10px 25px',alignItems:'center'}}>
        <div style={{display:'flex'}}>
          {/* <a className="nav-link px-2 mx-2 my-0.5 py-1 rounded-circle" href="#" style={{backgroundColor:'#4267B2',height: '-webkit-fill-available',border:'none'}}> */}
            {/* <i className="fa fa-facebook" style={{color:'white',fontSize:'20px',margin:'5px'}}></i> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16"  style={{verticalAlign:'sub',color:'white',margin:'5px'}}>
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
            </svg>
          {/* </a> */}
          {/* <a className="nav-link px-1 mx-2 my-0.5 py-1 rounded-circle" href="#" style={{backgroundColor: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',height:'-webkit-fill-available'}}> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16" style={{verticalAlign:'sub',color:'white',margin:'5px'}}>
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
            </svg>
          {/* </a> */}
          {/* <a className="nav-link px-3 mx-2 my-0.5 py-1" href="#" style={{backgroundColor:'#1DA1F2',height:'-webkit-fill-available'}}> */}
            {/* <i className="fa fa-twitter" style={{color:'white',fontSize:'20px',margin:'5px'}}></i> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16" style={{verticalAlign:'sub',color:'white',margin:'5px'}}>
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
            </svg>
          {/* </a> */}
          {/* <a className="nav-link  px-3 mx-2 my-0.5 py-1" href="#" style={{backgroundColor:'#86888a',height: '-webkit-fill-available'}}> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16" style={{verticalAlign:'sub',color:'white',margin:'5px'}}>
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
            </svg>
          {/* </a> */}
          {/* <a className="nav-link px-3 mx-2 my-0.5 py-1" href="#" style={{background: '#28a745',height: '-webkit-fill-available'}}> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16" style={{verticalAlign:'sub',color:'white',margin:'5px'}}>
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
            </svg>
          {/* </a> */}
        </div>
        <div style={{display:'flex',alignItems:'center'}}>
          <img  src="https://www.rid3240.org/new/wp-content/uploads/2020/06/en_badge_web_generic.png" style={{height:'40px'}} alt="" loading="lazy"/>
          <img src="https://www.rid3240.org/new/wp-content/uploads/2020/07/0_1-msaTEYYCzIXAYC_-1024x354.png" style={{height:'30px'}} alt="" loading="lazy"/>
        </div>
        <div className="" style={{display:'flex',margin:'0 0'}}>
          
            <a className="" href="#" style={{color:'white',display:'flex',marginRight:'25px',alignItems:'center'}}>
              <i className="fas fa-envelope" style={{marginRight:'5px'}}>
              </i> info@avantikain.com</a>
          
          
            <a className="" href="#" style={{color:'white',display:'flex',alignItems:'center'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16" style={{verticalAlign:'middle',marginRight:'5px'}}>
                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
              </svg>
              +91-9707026895
            </a>
          
        </div>
      </nav>
      <Header roundedHeaderButton={roundedHeaderButton} />
      
        <nav className="navbar navbar-expand-lg py-2 relative flex items-center w-full justify-between mt-5" style={{paddingLeft:'auto',paddingRight:'auto',boxShadow:'0 0 10px #80808085'}}>
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
                  <div className="district dropdown relative"> 
                    <a className="text-gray-500 hover:text-gray-700  focus:text-gray-700  mr-4  dropdown-toggle hover:transition  hidden-arrow  flex items-center " href="#" id="dropdownMenuButton1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      
                      <button type="button" className=" px-6 py-2.5 bg-transparent font-medium text-xs leading-tight uppercase rounded hover:bg-gray-100 hover:dropdown-menu transition duration-300 ease-in-out" style={{fontWeight:'bold',color:'#4054b2',display:'flex'}}>District
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
                      <ul className="dropdown-menu min-w-max  absolute  hidden  bg-white  text-base  z-50  float-left  py-2  list-none  text-lef  shadow-lg  mt-1  hidden  m-0  border-none  left-auto  right-0" aria-labelledby="dropdownMenuButton1">
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

        <nav className="navbar navbar-expand-lg py-2 flex text-center w-full justify-between" style={{padding:'10px 10px 10px 20px',backgroundColor:'aliceblue'}}>
        
        <h3 className="" style={{marginRight:'auto',marginLeft:'auto',fontWeight:'bold'}}>Notifications</h3>
        <marquee width="80%" direction="left" height="auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </marquee>
      
        </nav>
      
      
      
      <Container>
        <TwoColumn  >
            
          <LeftColumn style={{marginRight:'20px'}}>
            <IllustrationContainer>
              {/* <div id="carouselDarkVariant" className="carousel slide carousel-dark relative" data-bs-ride="carousel" style={{padding:"20px"}}> */}
              <div id="carouselDarkVariant" className="carousel slide carousel-fade carousel-dark relative" data-bs-ride="carousel" style={{padding:"20px"}}>
                
                {/* <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                  <button data-bs-target="#carouselDarkVariant" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button data-bs-target="#carouselDarkVariant" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button data-bs-target="#carouselDarkVariant" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  <button data-bs-target="#carouselDarkVariant" data-bs-slide-to="3" aria-label="Slide 1"></button>
                </div> */}
                <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                  <div className="carousel-inner w-full overflow-hidden" style={{verticalAlign:'middle'}}> 
                  {/* <div className="carousel-inner relative w-full overflow-hidden" style={{verticalAlign:'middle'}}>  */}
                    <div className="carousel-item active relative float-left w-full">
                      <img src="../../../../images/rotary1.PNG" className="block w-full" alt="Motorbike Smoke"/>
                      <div className="carousel-caption hidden  text-center">
                      </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                      <img src="../../../../images/rotary2.PNG" className="block w-full" alt="Mountaintop"/>
                      <div className="carousel-caption hidden  text-center">
                      </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                      <img src="../../../../images/rotary3.PNG" className="block w-full" alt="Woman Reading a Book"/>
                      <div className="carousel-caption hidden  text-center">
                        
                      </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                      <img src="../../../../images/rotary4.PNG" className="block w-full" alt="Woman Reading a Book"/>
                      <div className="carousel-caption hidden  text-center">
                      </div>
                    </div>
                  </div>
                  <div style={{display:'flex',width:'100%',justifyContent:'center',padding:'25px'}}>
                    <button
                      // className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                      className="rounded-full flex "
                      type="button"
                      data-bs-target="#carouselDarkVariant"
                      data-bs-slide="prev"
                      style={{top:'auto',backgroundColor:'rgb(12, 63, 116)',marginLeft:'20px',padding:'20px'}}
                    >
                      {/* <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true" style={{color:'white'}}></span> */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16" style={{color:'white'}}>
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                      </svg>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <div className="vl" style={{left: '50%',top: '0',margin: '0 15px',borderLeft: '6px solid',borderImage: 'grey'}}></div>
                    <button
                      className="rounded-full flex"
                      type="button"
                      data-bs-target="#carouselDarkVariant"
                      data-bs-slide="next"
                      style={{top:'auto',backgroundColor:'rgb(12, 63, 116)',marginRight:'20px',padding:'20px'}}
                    >
                      {/* <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true" style={{color:'white'}}></span> */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16" style={{color:'white'}}>
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                      </svg>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>
              
            </IllustrationContainer>
            
          </LeftColumn>
          
           <RightColumn style={{textAlign:'center'}}>
           <Heading>
              ROTARY INTERNATIONAL
            </Heading>
            <Paragraph style={{textAlign:'left'}}>
              Rotary International District 3240 lies in the North Eastern part of the Indian subcontinent between Nepal, China, Bhutan, Myanmar and Bangladesh. This district is one of the largest Rotary districts in the world covering over 2,95, 607 sq. kms of land. Closeted within these perimeters is a land of snow clad mountains, verdant hills, expansive plains, mountain streams, majestic rivers, bustling towns, idyllic hamlets and miles and miles of land carpeted by lush green tea bushes. R.I. District 3240 is a relatively new district formed in the Year 1990 and encompasses nine states of India – Arunachal Pradesh, Assam, Manipur, Meghalaya, Mizoram, Nagaland, Sikkim, Tripura and eight revenue districts of West Bengal. (Barddhaman, Birbhum, Malda, Dakshin Dinajpur, Uttar Dinajpur, Darjeeling, Jalpaiguri & Cooch Bihar). There are 97 clubs in the district with 3342 Rotarians.
            </Paragraph>
            <button style={{backgroundColor:'rgb(12, 63, 116)',color:'white',padding:'15px 35px',borderRadius:'15px'}}>Get Involved</button>
            {/* <Actions>
              <input type="text" placeholder="Your E-mail Address" />
              <button>Get Involved</button>
            </Actions>  */}
            {/* <CustomersLogoStrip> */}
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
              {/* <img src={CustomersLogoStripImage} alt="Our Customers" /> */}
            {/* </CustomersLogoStrip> */}
          </RightColumn>
        </TwoColumn>
        <DecoratorBlob1 />
      </Container>
    </>
  );
};
