import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-icon.svg";
import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomizeIconImage from "images/customize-icon.svg";
import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";
import { Link } from 'react-router-dom';

const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`text-center mx-auto`;
const ThreeColumnContainer = styled.div`
  ${tw`mt-10 flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap lg:justify-center max-w-screen-lg mx-auto`}
`;
const Column = styled.div`
  ${tw`lg:w-1/3 max-w-xs`}
`;

const Card = styled.a`
  ${tw`flex flex-col items-center text-center h-full mx-4 px-4 py-8 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105 `}
  .imageContainer {
    ${tw`text-center rounded-full p-4 bg-gray-100`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .title {
    ${tw`mt-4 font-bold text-xl leading-none`}
  }

  .description {
    ${tw`mt-4 text-sm font-medium text-secondary-300`}
  }

  .link {
    ${tw`mt-auto inline-flex items-center pt-5 text-sm font-bold text-primary-300 leading-none hocus:text-primary-900 transition duration-300`}
    .icon {
      ${tw`ml-2 w-4`}
    }
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-40`}
`;

export default ({
  cards = [
    {
      imageSrc: ShieldIconImage,
      title: "Secure",
      description: "We strictly only deal with vendors that provide top notch security.",
      url: "https://timerse.com"
    },
    {
      imageSrc: SupportIconImage,
      title: "24/7 Support",
      description: "Lorem ipsum donor amet siti ceali placeholder text",
      url: "https://google.com"
    },
    // {
    //   imageSrc: CustomizeIconImage,
    //   title: "Customizable",
    //   description: "Lorem ipsum donor amet siti ceali placeholder text",
    //   url: "https://reddit.com"
    // }
  ],
  linkText = "Learn More",
  heading = "",
  subheading = "",
  description = "",
  imageContainerCss = null,
  imageCss = null
}) => {
  /*
   * This componets accepts a prop - `cards` which is an array of object denoting the cards. Each object in the cards array can have the following keys (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  4) url - the url that the card should goto on click
   */
  return (
    <>

<div className="w-100">
    <div className="flex">
      <div className="h-full shadow-md bg-white" style={{backgroundColor:'rgb(214,158,46)',color:'white',width:'25%'}}>
        <div className="offcanvas-header flex items-center m-3" style={{justifyContent:'center',margin:'20px auto ',width:'45%'}}>
            <img src="../../../images/r6.jpg" className="rounded-full" style={{border:'3px solid white'}}/>
        </div>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',height:'100px',justifyContent:'space-evenly'}} className="relative">
          <h5 className="offcanvas-title mb-0 leading-normal font-semibold" id="offcanvasExampleLabel">
            Kalpana Rajput
          </h5>
          <h5 className="offcanvas-title mb-0 leading-normal font-semibold" id="offcanvasExampleLabel">
            rajput.kalpana2000@gmail.com
          </h5>
        </div>
        <div className="p-4 overflow-y-auto" style={{color:'black'}} id="tabs-tabVertical">
          <ul className="nav nav-tabs flex flex-col flex-wrap list-none border-b-0 pl-0 mr-4" id="tabs-tabVertical" role="tablist">
            
            <li className="nav-item flex-grow text-center" role="presentation" style={{textDecoration:'none'}}>
              <a href="#tabs-homeVertical" className="nav-link block font-medium text-xs leading-tight uppercase active" id="tabs-home-tabVertical" data-bs-toggle="pill" data-bs-target="#tabs-homeVertical" role="tab" aria-controls="tabs-homeVertical" aria-selected="true">
              </a>
            </li>
            <li className="nav-item flex-grow text-center" role="presentation" style={{textDecoration:'none'}}>
              <a href="" className="nav-link block font-medium text-xs leading-tight uppercase px-6 py-1 my-2 active hover:border-transparent hover:bg-gray-100 focus:bg-gray-100 border-transparent" >
                <Link to={'/'}>
                  <div style={{display:'flex',alignItems:'center',padding:'7px 0'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" style={{marginRight:'25px'}} version="1.0" width="20.000000pt" height="20.000000pt" viewBox="0 0 256.000000 256.000000" preserveAspectRatio="xMidYMid meet">
                      <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="rgb(12,63,116)" stroke="none">
                      <path d="M1195 2286 c-16 -8 -292 -233 -612 -500 -671 -560 -621 -501 -526 -616 59 -72 74 -81 110 -69 12 5 266 211 563 459 297 247 544 450 550 450 6 0 253 -203 550 -450 297 -228 551 -454 563 -459 26 -12 51 -3 110 69 89 107 91 100 -123 280 l-180 151 0 333 c0 310 -1 334 -18 349 -16 15 -45 17 -194 17 -151 0 -177 -2 -189 -16 -10 -12 -15 -62 -19 -175 l-5 -157 -190 160 c-104 88 -204 167 -222 174 -41 18 -129 17 -168 0z"/>
                      <path d="M817 1514 l-457 -377 0 -393 c0 -220 4 -404 9 -417 6 -14 20 -35 32 -46 22 -20 32 -21 351 -21 l328 0 0 305 0 305 200 0 200 0 0 -305 0 -305 328 0 c319 0 329 1 351 21 12 11 26 32 32 46 5 13 9 197 9 417 l0 393 -451 372 c-248 205 -457 375 -463 377 -7 3 -218 -165 -469 -372z"/>
                      </g>
                    </svg>
                    <div style={{fontSize:'20px',fontWeight:'bold',color:'rgb(12,63,116)'}}>Home</div>
                  </div>
                </Link>
              </a>
            </li>
            <li className="nav-item flex-grow text-center" role="presentation">
              <a href="#tabs-governorVertical" className="nav-link block font-medium text-xs leading-tight uppercase px-6 py-1 my-2 border-x-0 border-transparent hover:border-transparent hover:bg-gray-100 focus:bg-gray-100 border-transparent" 
              id="tabs-governor-tabVertical" data-bs-toggle="pill" 
              data-bs-target="#tabs-governorVertical" role="tab" aria-controls="tabs-governorVertical" aria-selected="false">
                <div style={{display:'flex',alignItems:'center',padding:'7px 0'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" style={{marginRight:'25px'}} version="1.0" width="20.000000pt" height="20.000000pt" viewBox="0 0 256.000000 256.000000" preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="rgb(12,63,116)" stroke="none">
                    <path d="M1247 2394 c-4 -4 -7 -43 -7 -86 l0 -78 -40 0 c-46 0 -95 -21 -104 -45 -3 -9 -6 -42 -6 -74 0 -57 0 -57 -50 -94 -91 -68 -150 -190 -150 -308 l0 -58 -32 14 c-26 10 -34 21 -38 47 -4 28 -10 34 -34 36 -33 4 -46 -10 -46 -50 0 -20 -5 -28 -18 -28 -31 0 -89 -48 -111 -93 -17 -35 -21 -62 -21 -145 l0 -102 -32 0 c-37 0 -53 -8 -60 -30 -10 -30 11 -50 52 -50 l40 0 0 -60 0 -60 -136 0 c-74 0 -144 -5 -155 -10 -21 -12 -25 -50 -7 -68 9 -9 267 -12 1100 -12 l1088 0 0 -30 0 -30 -1200 0 -1200 0 0 30 c0 29 1 30 48 30 53 0 72 12 72 47 0 31 -28 43 -102 43 -107 0 -99 44 -96 -495 l3 -470 1275 0 1275 0 0 175 0 175 -29 3 c-36 4 -46 -10 -46 -70 l0 -48 -130 0 -130 0 0 245 0 245 130 0 130 0 0 -134 c0 -144 6 -161 52 -154 l23 3 3 250 c2 226 1 251 -15 263 -12 9 -88 12 -295 12 l-278 0 0 60 0 60 40 0 c41 0 62 20 52 50 -7 22 -23 30 -59 30 l-31 0 -4 113 c-3 103 -5 117 -30 154 -16 25 -44 49 -72 62 -38 19 -45 27 -48 54 -3 27 -8 33 -32 35 -33 4 -46 -10 -46 -50 0 -21 -5 -28 -19 -28 -11 0 -23 -4 -26 -10 -15 -24 -23 -5 -27 68 -6 100 -23 137 -63 137 -29 0 -30 -1 -27 -45 1 -25 5 -156 8 -292 l6 -248 -312 0 -312 0 4 248 c3 231 5 250 26 298 46 102 151 175 260 182 79 5 139 -11 200 -54 50 -36 71 -41 90 -22 25 25 13 56 -33 89 -44 32 -45 33 -45 90 0 31 -3 65 -6 74 -9 24 -58 45 -103 45 l-40 0 -3 83 -3 82 -30 3 c-17 2 -34 0 -38 -4z m-408 -820 c36 -25 51 -75 51 -164 l0 -80 -110 0 -110 0 0 80 c0 125 34 180 110 180 20 0 46 -7 59 -16z m1000 0 c36 -25 51 -75 51 -164 l0 -80 -110 0 -110 0 0 80 c0 125 34 180 110 180 20 0 46 -7 59 -16z m-949 -384 l0 -60 -110 0 -110 0 0 60 0 60 110 0 110 0 0 -60z m1000 0 l0 -60 -110 0 -110 0 0 60 0 60 110 0 110 0 0 -60z m-300 -30 l0 -30 -310 0 -310 0 0 30 0 30 310 0 310 0 0 -30z m-1250 -515 l0 -245 -130 0 -130 0 0 245 0 245 130 0 130 0 0 -245z m150 0 l0 -245 -35 0 -35 0 0 245 0 245 35 0 35 0 0 -245z m180 0 l0 -245 -50 0 -50 0 0 245 0 245 50 0 50 0 0 -245z m150 0 l0 -245 -35 0 -35 0 0 245 0 245 35 0 35 0 0 -245z m180 0 l0 -245 -50 0 -50 0 0 245 0 245 50 0 50 0 0 -245z m150 0 l0 -245 -35 0 -35 0 0 245 0 245 35 0 35 0 0 -245z m180 0 l0 -245 -50 0 -50 0 0 245 0 245 50 0 50 0 0 -245z m150 0 l0 -245 -35 0 -35 0 0 245 0 245 35 0 35 0 0 -245z m180 0 l0 -245 -50 0 -50 0 0 245 0 245 50 0 50 0 0 -245z m150 0 l0 -245 -35 0 -35 0 0 245 0 245 35 0 35 0 0 -245z m180 0 l0 -245 -50 0 -50 0 0 245 0 245 50 0 50 0 0 -245z m150 0 l0 -245 -35 0 -35 0 0 245 0 245 35 0 35 0 0 -245z m340 -365 l0 -40 -1200 0 -1200 0 0 40 0 40 1200 0 1200 0 0 -40z"/>
                    </g>
                  </svg>
                  <div style={{fontSize:'20px',fontWeight:'bold',color:'rgb(12,63,116)'}}>District Governor</div>
                </div>
              </a>
            </li>
            <li className="nav-item flex-grow text-center" role="presentation">
              <a href="#tabs-messagesVertical" className="nav-link block font-medium text-xs leading-tight uppercase px-6 py-1 my-2 border-x-0 hover:border-transparent hover:bg-gray-100 focus:bg-gray-100 border-transparent" id="tabs-messages-tabVertical" data-bs-toggle="pill" data-bs-target="#tabs-messagesVertical" role="tab" aria-controls="tabs-messagesVertical" aria-selected="false">  
                <div style={{display:'flex',alignItems:'center',padding:'7px 0'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" style={{marginRight:'25px'}} version="1.0" width="20.000000pt" height="20.000000pt" viewBox="0 0 256.000000 256.000000" preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="rgb(12,63,116)" stroke="none">
                    <path d="M1182 2544 c-85 -44 -126 -112 -126 -209 0 -99 42 -168 129 -210 57 -27 168 -18 219 17 139 95 139 291 0 386 -32 22 -52 27 -114 30 -55 2 -84 -2 -108 -14z"/>
                    <path d="M1005 1936 c-68 -32 -131 -98 -155 -163 -15 -41 -20 -78 -20 -158 l0 -105 -190 0 -190 0 0 -80 0 -80 75 0 75 0 0 -88 0 -89 49 -31 c61 -40 103 -87 138 -155 22 -42 27 -69 31 -144 l4 -93 47 0 46 0 0 83 c1 68 6 93 29 143 35 77 112 154 191 191 51 23 73 28 145 28 72 0 94 -5 145 -28 79 -37 156 -114 191 -191 23 -50 28 -75 29 -143 l0 -83 46 0 47 0 4 93 c4 75 9 102 31 144 35 68 77 115 138 155 l49 31 0 89 0 88 75 0 75 0 0 80 0 80 -190 0 -190 0 0 105 c0 128 -20 191 -82 254 -64 65 -126 91 -220 91 l-78 0 0 -225 0 -225 -70 0 -70 0 0 225 0 225 -77 0 c-61 0 -89 -5 -128 -24z"/>
                    <path d="M379 1047 c-48 -18 -87 -49 -118 -95 -23 -33 -26 -47 -26 -122 0 -76 3 -89 27 -124 96 -139 291 -139 386 0 35 51 44 162 17 219 -21 43 -65 90 -108 111 -42 22 -134 27 -178 11z"/>
                    <path d="M1185 1036 c-60 -28 -87 -56 -114 -116 -36 -79 -19 -183 42 -249 33 -36 115 -71 167 -71 52 0 134 35 167 71 34 37 63 110 63 159 0 52 -35 134 -71 167 -37 34 -110 63 -159 63 -27 0 -65 -10 -95 -24z"/>
                    <path d="M2029 1047 c-48 -18 -87 -49 -118 -95 -23 -33 -26 -47 -26 -122 0 -76 3 -89 27 -124 96 -139 291 -139 386 0 35 51 44 162 17 219 -21 43 -65 90 -108 111 -42 22 -134 27 -178 11z"/>
                    <path d="M214 446 c-57 -18 -125 -67 -157 -113 -48 -70 -57 -105 -57 -223 l0 -110 340 0 340 0 0 63 c1 111 18 207 51 278 17 37 28 72 25 78 -4 6 -30 17 -58 26 -67 20 -422 20 -484 1z"/>
                    <path d="M1043 446 c-89 -29 -147 -81 -189 -171 -21 -43 -24 -66 -24 -162 l0 -113 450 0 450 0 0 113 c0 107 -2 118 -30 175 -35 68 -82 115 -149 146 -42 19 -66 21 -256 23 -153 2 -221 -1 -252 -11z"/>
                    <path d="M1858 444 c-26 -8 -50 -19 -54 -25 -3 -6 8 -41 25 -78 33 -71 50 -167 51 -278 l0 -63 340 0 340 0 0 113 c0 97 -3 119 -24 164 -30 64 -87 122 -152 154 -47 23 -59 24 -264 26 -167 2 -226 -1 -262 -13z"/>
                    </g>
                  </svg>
                  <div style={{fontSize:'20px',fontWeight:'bold',color:'rgb(12,63,116)'}}>District Events</div>
                </div>
              </a>
            </li>
            <li className="nav-item flex-grow text-center" role="presentation">
              <a href="#tabs-contactsVertical" className="nav-link block font-medium text-xs leading-tight uppercase px-6 py-1 my-2 hover:border-transparent hover:bg-gray-100 focus:bg-gray-100 border-transparent" id="tabs-contacts-tabVertical" data-bs-toggle="pill" data-bs-target="#tabs-contactsVertical" role="tab" aria-controls="tabs-contactsVertical" aria-selected="false">
                <div style={{display:'flex',alignItems:'center',padding:'7px 0'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" style={{marginRight:'25px'}} version="1.0" width="25.000000pt" height="25.000000pt" viewBox="0 0 256.000000 256.000000" preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="rgb(12,63,116)" stroke="none">
                    <path d="M1828 1965 c-133 -50 -210 -162 -212 -305 -1 -66 3 -84 32 -142 18 -36 49 -81 69 -99 132 -116 333 -111 451 11 68 69 87 120 87 230 0 80 -4 102 -24 140 -32 62 -86 117 -146 148 -62 32 -196 41 -257 17z"/>
                    <path d="M380 1893 c0 -70 32 -146 81 -192 19 -18 196 -127 394 -244 323 -190 365 -211 405 -211 39 -1 67 12 198 88 83 49 152 93 152 98 0 5 -11 30 -24 56 -67 132 -49 298 44 414 17 20 30 39 30 42 0 3 -288 6 -640 6 l-640 0 0 -57z"/>
                    <path d="M301 1338 l-1 -568 248 178 c136 98 296 214 356 257 100 72 107 79 90 92 -10 7 -133 80 -272 161 -140 81 -273 164 -296 184 -52 45 -103 138 -115 209 -6 35 -9 -143 -10 -513z"/>
                    <path d="M2195 1360 c-28 -31 -133 -79 -197 -90 -97 -18 -208 11 -295 76 -17 13 -36 24 -41 24 -20 0 -153 -83 -145 -90 10 -10 684 -494 701 -504 9 -6 12 57 12 298 0 168 -4 306 -8 306 -5 0 -17 -9 -27 -20z"/>
                    <path d="M690 970 l-385 -279 0 -53 0 -53 950 -3 c1061 -2 975 -8 975 67 -1 36 -4 38 -393 318 l-392 281 -60 -33 c-103 -57 -152 -56 -257 6 -27 16 -50 29 -51 28 -1 0 -175 -126 -387 -279z"/>
                    </g>
                  </svg>
                  <div style={{fontSize:'20px',fontWeight:'bold',color:'rgb(12,63,116)'}}>Important Contacts</div>
                </div>
              </a>
            </li>
            <li className="nav-item flex-grow text-center" role="presentation">
              <a href="#tabs-clubsVertical" className="nav-link block font-medium text-xs leading-tight uppercase px-6 py-1 my-2 hover:border-transparent hover:bg-gray-100 focus:bg-gray-100 border-transparent" id="tabs-clubs-tabVertical" data-bs-toggle="pill" 
                data-bs-target="#tabs-clubsVertical" role="tab" 
                aria-controls="tabs-clubsVertical" aria-selected="false">
                <div style={{display:'flex',alignItems:'center',padding:'7px 0'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" style={{marginRight:'25px'}} version="1.0" width="20.000000pt" height="20.000000pt" viewBox="0 0 256.000000 256.000000" preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="rgb(12,63,116)" stroke="none">
                    <path d="M1776 2446 c-80 -30 -146 -125 -146 -212 0 -87 67 -181 148 -209 91 -31 166 -13 233 54 54 53 74 110 66 183 -9 76 -53 140 -121 175 -42 22 -133 26 -180 9z"/>
                    <path d="M578 2270 c-150 -45 -204 -229 -102 -348 45 -53 105 -76 184 -70 114 8 190 93 190 210 0 75 -17 114 -68 160 -58 52 -133 70 -204 48z"/>
                    <path d="M1750 1946 c0 -66 8 -73 68 -52 37 13 47 13 83 1 67 -24 69 -22 69 46 l0 62 -37 -8 c-45 -9 -93 -9 -145 0 l-38 7 0 -56z"/>
                    <path d="M1500 1941 c-77 -24 -148 -90 -168 -160 -8 -24 -12 -127 -12 -285 l0 -248 29 -29 29 -29 264 0 264 0 29 30 c22 23 28 39 28 74 0 25 -5 51 -12 59 -8 11 -10 44 -5 121 l7 106 -78 0 -78 0 5 -85 4 -85 -133 0 -133 0 0 149 c0 120 3 151 15 161 13 11 15 -4 15 -124 l0 -136 91 0 92 0 -6 59 c-6 50 -3 63 14 85 19 25 25 26 113 26 119 0 131 -10 128 -108 -1 -37 -5 -79 -8 -93 -3 -15 2 -50 12 -78 16 -50 14 -85 -11 -143 -6 -16 0 -18 69 -18 l76 0 0 270 c0 149 4 270 8 270 29 0 32 -30 32 -282 l0 -258 110 0 110 0 0 283 0 283 -27 55 c-31 60 -92 112 -151 129 -20 5 -77 10 -127 10 l-90 0 -23 -82 c-69 -247 -175 -247 -244 0 l-23 82 -95 -1 c-52 0 -106 -4 -120 -8z"/>
                    <path d="M288 1786 c-82 -22 -148 -81 -174 -154 -9 -26 -13 -99 -14 -238 0 -189 1 -203 21 -228 l20 -26 -44 0 c-65 0 -97 -28 -97 -85 0 -35 5 -48 26 -64 33 -26 58 -26 99 -1 18 11 68 25 114 32 l81 11 0 257 c0 217 2 260 15 270 13 11 15 -20 15 -273 l0 -285 -87 -12 c-49 -7 -101 -19 -116 -27 -34 -17 -67 -69 -67 -105 0 -32 186 -671 203 -700 12 -18 83 -58 104 -58 8 0 10 17 6 52 -6 65 17 101 78 119 21 7 39 15 39 18 0 3 -15 56 -33 116 l-32 110 -61 5 c-33 3 -72 13 -87 23 -34 22 -65 71 -73 114 -9 46 27 116 74 145 36 22 45 23 324 26 181 2 301 -1 326 -8 50 -13 107 -74 116 -124 6 -29 2 -48 -16 -84 -31 -61 -67 -86 -135 -92 l-56 -5 -33 -115 c-19 -63 -31 -116 -27 -118 75 -25 122 -87 103 -137 -14 -36 -4 -48 33 -39 44 9 82 38 95 71 7 16 52 167 103 338 102 348 105 374 51 427 -26 27 -41 32 -143 47 l-114 17 -3 282 c-1 161 2 282 7 282 26 0 31 -36 33 -280 l3 -254 89 -13 c50 -7 103 -21 123 -33 33 -20 50 -20 682 -20 641 0 649 0 675 21 21 16 26 29 26 64 0 35 -5 48 -26 64 -26 21 -34 21 -711 21 l-684 0 20 26 c20 25 21 40 21 222 0 121 -4 210 -12 234 -16 53 -87 131 -140 154 -39 17 -77 19 -368 21 -241 2 -337 -1 -372 -11z"/>
                    <path d="M304 746 c-25 -25 -34 -43 -34 -67 1 -88 51 -119 193 -119 l97 0 0 -160 0 -160 -49 0 c-42 0 -53 -4 -70 -26 -27 -35 -26 -59 4 -89 24 -25 26 -25 203 -25 174 0 179 1 200 23 27 29 28 71 2 97 -15 15 -33 20 -70 20 l-50 0 0 160 0 160 95 0 c112 0 157 15 179 59 26 50 21 88 -18 127 l-34 34 -307 0 -307 0 -34 -34z"/>
                    </g>
                  </svg>
                  <div style={{fontSize:'20px',fontWeight:'bold',color:'rgb(12,63,116)'}}>Clubs in Action</div>
              </div>
              </a>
            </li>
            <li className="nav-item flex-grow text-center" role="presentation">
              <a href="#tabs-documentVertical" className="nav-link block font-medium text-xs leading-tight uppercase px-6 py-1 my-2 hover:border-transparent hover:bg-gray-100 focus:bg-gray-100 border-transparent" id="tabs-document-tabVertical" data-bs-toggle="pill" 
                data-bs-target="#tabs-documentVertical" role="tab" 
                aria-controls="tabs-documentVertical" aria-selected="false">
                <div style={{display:'flex',alignItems:'center',padding:'7px 0'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" style={{marginRight:'25px'}} version="1.0" width="20.000000pt" height="20.000000pt" viewBox="0 0 256.000000 256.000000" preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="rgb(12,63,116)" stroke="none">
                    <path d="M120 1440 l0 -1000 680 0 680 0 0 800 0 800 -180 0 c-237 0 -220 -17 -220 220 l0 180 -480 0 -480 0 0 -1000z m1280 480 l0 -40 -600 0 -600 0 0 40 0 40 600 0 600 0 0 -40z m-240 -160 l0 -40 -360 0 -360 0 0 40 0 40 360 0 360 0 0 -40z m240 -160 l0 -40 -600 0 -600 0 0 40 0 40 600 0 600 0 0 -40z m-240 -160 l0 -40 -360 0 -360 0 0 40 0 40 360 0 360 0 0 -40z m240 -160 l0 -40 -600 0 -600 0 0 40 0 40 600 0 600 0 0 -40z m-240 -160 l0 -40 -360 0 -360 0 0 40 0 40 360 0 360 0 0 -40z m240 -160 l0 -40 -600 0 -600 0 0 40 0 40 600 0 600 0 0 -40z m-240 -160 l0 -40 -360 0 -360 0 0 40 0 40 360 0 360 0 0 -40z m240 -160 l0 -40 -600 0 -600 0 0 40 0 40 600 0 600 0 0 -40z"/>
                    <path d="M1160 2257 l0 -137 135 0 c74 0 135 1 135 3 0 1 -61 63 -135 137 l-135 135 0 -138z"/>
                    <path d="M1560 1220 c0 -807 0 -820 -20 -840 -19 -19 -33 -20 -240 -20 l-220 0 0 -120 0 -120 680 0 680 0 0 760 0 760 -180 0 c-167 0 -181 1 -200 20 -19 19 -20 33 -20 200 l0 180 -240 0 -240 0 0 -820z"/>
                    <path d="M2120 1857 l0 -137 135 0 c74 0 135 1 135 3 0 1 -61 63 -135 137 l-135 135 0 -138z"/>
                    </g>
                  </svg>
                  <div style={{fontSize:'20px',fontWeight:'bold',color:'rgb(12,63,116)'}}>Document Center</div>
                </div>
              </a>
            </li>
            <li className="nav-item flex-grow text-center" role="presentation">
              <a href="#tabs-directoryVertical" className="nav-link block font-medium text-xs leading-tight uppercase px-6 py-1 my-2 hover:border-transparent hover:bg-gray-100 focus:bg-gray-100 border-transparent" id="tabs-directory-tabVertical" data-bs-toggle="pill" 
                data-bs-target="#tabs-directoryVertical" role="tab" 
                aria-controls="tabs-directoryVertical" aria-selected="false">
                <div style={{display:'flex',alignItems:'center',padding:'7px 0'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" style={{marginRight:'25px'}} version="1.0" width="20.000000pt" height="20.000000pt" viewBox="0 0 256.000000 256.000000" preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="rgb(12,63,116)" stroke="none">
                    <path d="M624 2545 c-63 -32 -64 -38 -64 -409 l0 -336 90 0 90 0 0 295 0 295 610 0 610 0 2 -412 3 -413 83 -3 82 -3 0 465 0 466 -29 32 -29 33 -709 2 c-616 2 -712 1 -739 -12z"/>
                    <path d="M943 2176 c-22 -19 -28 -32 -28 -66 0 -34 6 -47 28 -66 l28 -24 380 0 380 0 24 25 c19 18 25 35 25 65 0 30 -6 47 -25 65 l-24 25 -380 0 -380 0 -28 -24z"/>
                    <path d="M935 1828 l-27 -32 43 -19 c24 -10 65 -36 91 -58 l47 -39 310 0 c206 0 318 4 334 11 54 25 66 101 22 144 l-24 25 -385 0 -384 0 -27 -32z"/>
                    <path d="M193 1664 c-18 -9 -43 -32 -54 -51 -19 -30 -21 -45 -16 -113 l5 -78 -32 -6 c-38 -7 -72 -40 -81 -77 -9 -35 171 -1203 192 -1252 9 -21 30 -48 47 -60 l31 -22 988 0 989 0 29 33 c20 22 29 43 29 65 0 18 -40 303 -89 634 -92 626 -97 649 -148 672 -16 7 -174 11 -483 11 l-459 0 -84 98 c-101 117 -123 137 -160 151 -18 7 -146 11 -350 11 -275 0 -327 -3 -354 -16z"/>
                    <path d="M2250 1564 c1 -130 140 -1123 152 -1077 4 15 39 249 79 520 78 536 78 526 21 568 -22 16 -47 21 -139 24 l-113 3 0 -38z"/>
                    </g>
                  </svg>
                  <div style={{fontSize:'20px',fontWeight:'bold',color:'rgb(12,63,116)'}}>E-Directory</div>
                </div>
              </a>
            </li>
            <li className="nav-item flex-grow text-center" role="presentation">
              <a href="#tabs-profileVertical" className="nav-link block font-medium text-xs leading-tight uppercase px-6 py-1 my-2 hover:border-transparent hover:bg-gray-100 focus:bg-gray-100 border-transparent" id="tabs-profile-tabVertical" data-bs-toggle="pill" 
                data-bs-target="#tabs-profileVertical" role="tab" 
                aria-controls="tabs-profileVertical" aria-selected="false">
                <div style={{display:'flex',alignItems:'center',padding:'7px 0'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" style={{marginRight:'25px'}} version="1.0" width="20.000000pt" height="20.000000pt" viewBox="0 0 256.000000 256.000000" preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="rgb(12,63,116)" stroke="none">
                    <path d="M122 2229 c-24 -12 -54 -36 -67 -53 -57 -75 -55 -37 -55 -900 l0 -794 28 -53 c34 -66 88 -105 161 -119 73 -14 2109 -14 2182 0 73 14 127 53 161 119 l28 53 0 798 0 798 -28 53 c-17 34 -44 65 -71 84 l-43 30 -1126 3 -1127 2 -43 -21z m1013 -294 c33 -8 98 -34 145 -57 67 -32 102 -58 166 -122 141 -142 199 -280 199 -476 0 -197 -58 -335 -200 -476 -134 -133 -281 -194 -470 -194 -189 0 -336 61 -470 194 -142 141 -200 279 -200 476 0 197 55 329 195 471 69 70 101 94 170 128 47 22 110 47 140 55 74 20 250 20 325 1z m1105 -157 c23 -25 26 -65 6 -91 -22 -28 -72 -37 -216 -37 -144 0 -194 9 -216 37 -20 26 -17 66 6 91 20 21 28 22 210 22 182 0 190 -1 210 -22z m0 -300 c23 -25 26 -65 6 -91 -22 -28 -72 -37 -216 -37 -144 0 -194 9 -216 37 -20 26 -17 66 6 91 20 21 28 22 210 22 182 0 190 -1 210 -22z m0 -300 c39 -42 19 -101 -41 -118 -44 -13 -294 -13 -338 0 -60 17 -80 76 -41 118 20 21 28 22 210 22 182 0 190 -1 210 -22z m0 -300 c39 -42 19 -101 -41 -118 -44 -13 -294 -13 -338 0 -60 17 -80 76 -41 118 20 21 28 22 210 22 182 0 190 -1 210 -22z"/>
                    <path d="M810 1777 c-86 -29 -158 -76 -220 -144 -150 -164 -181 -402 -79 -594 l31 -58 53 57 c29 31 75 70 102 86 l49 30 -33 64 c-28 53 -33 74 -33 129 0 85 14 130 59 189 53 70 141 114 228 114 36 0 83 -5 103 -11 65 -20 131 -78 167 -148 29 -54 33 -73 33 -136 0 -64 -4 -82 -33 -137 l-33 -64 49 -30 c27 -16 73 -55 102 -86 l53 -57 31 58 c150 283 0 646 -307 741 -92 28 -234 27 -322 -3z"/>
                    <path d="M896 1481 c-45 -30 -66 -70 -66 -126 0 -88 57 -145 145 -145 88 0 145 57 145 145 0 88 -57 145 -145 145 -32 0 -60 -7 -79 -19z"/>
                    <path d="M858 1037 c-65 -25 -126 -66 -167 -114 l-41 -48 22 -19 c72 -59 188 -96 303 -96 115 0 230 37 303 96 l23 19 -45 51 c-26 29 -71 65 -108 84 -57 31 -72 34 -158 37 -63 2 -107 -1 -132 -10z"/>
                    </g>
                  </svg>
                  <div style={{fontSize:'20px',fontWeight:'bold',color:'rgb(12,63,116)'}}>Profile</div>
                </div>
              </a>
            </li>
            <li className="nav-item flex-grow text-center" role="presentation">
              <a href="#tabs-pinVertical" className="nav-link block font-medium text-xs leading-tight uppercase px-6 py-1 my-2 hover:border-transparent hover:bg-gray-100 focus:bg-gray-100 border-transparent" 
                id="tabs-pin-tabVertical" data-bs-toggle="pill" 
                data-bs-target="#tabs-pinVertical" role="tab" 
                aria-controls="tabs-pinVertical" aria-selected="false">
                <div style={{display:'flex',alignItems:'center',padding:'7px 0'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" style={{marginRight:'25px'}} version="1.0" width="20.000000pt" height="20.000000pt" viewBox="0 0 256.000000 256.000000" preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="rgb(12,63,116)" stroke="none">
                    <path d="M1197 2499 c-28 -16 -47 -64 -47 -118 l0 -50 -37 -6 c-415 -68 -757 -380 -859 -783 -87 -344 9 -723 247 -975 51 -53 58 -57 99 -57 65 1 110 43 110 105 0 35 -15 61 -66 117 -90 97 -158 231 -189 371 -13 60 -16 109 -13 210 4 116 8 144 37 227 71 211 210 376 401 479 77 40 166 74 231 86 l37 7 4 -67 c4 -61 7 -71 36 -96 39 -35 83 -38 132 -8 60 37 270 200 285 222 15 22 20 82 9 111 -5 14 -151 124 -278 210 -41 28 -105 35 -139 15z"/>
                    <path d="M1870 2072 c-19 -9 -41 -30 -48 -45 -23 -49 -8 -89 64 -168 172 -187 241 -373 231 -619 -7 -173 -47 -292 -147 -441 -50 -73 -181 -195 -261 -242 -70 -41 -193 -91 -250 -102 l-37 -7 -4 66 c-3 56 -8 70 -33 96 -37 39 -77 39 -136 2 -87 -55 -278 -202 -289 -221 -18 -35 -12 -87 15 -119 22 -26 234 -187 289 -219 31 -18 98 -15 122 5 32 26 44 55 44 111 0 54 -1 53 73 66 57 9 184 54 252 88 286 143 485 392 566 705 28 106 33 333 10 447 -41 209 -153 420 -291 549 -73 69 -109 79 -170 48z"/>
                    <path d="M1229 1739 c-94 -15 -168 -67 -214 -150 -27 -49 -30 -63 -30 -144 0 -74 4 -97 23 -133 28 -53 89 -114 130 -133 l32 -14 0 -130 c0 -111 3 -135 20 -162 38 -63 142 -63 180 0 17 27 20 51 20 162 l0 130 32 14 c41 19 102 80 130 133 19 36 23 59 23 133 0 82 -3 95 -31 145 -63 111 -187 170 -315 149z"/>
                    </g>
                  </svg>
                  <div style={{fontSize:'20px',fontWeight:'bold',color:'rgb(12,63,116)'}}>Change PIN</div>
                </div>
              </a>
            </li>
            <li className="nav-item flex-grow text-center" role="presentation">
              <a href="#tabs-adminVertical" className="nav-link block font-medium text-xs leading-tight uppercase px-6 py-1 my-2 hover:border-transparent hover:bg-gray-100 focus:bg-gray-100 border-transparent" 
                id="tabs-admin-tabVertical" data-bs-toggle="pill" 
                data-bs-target="#tabs-adminVertical" role="tab" 
                aria-controls="tabs-adminVertical" aria-selected="false">
                <div style={{display:'flex',alignItems:'center',padding:'7px 0'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" style={{marginRight:'25px'}} version="1.0" width="20.000000pt" height="20.000000pt" viewBox="0 0 256.000000 256.000000" preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="rgb(12,63,116)" stroke="none">
                    <path d="M300 2431 c-69 -21 -121 -65 -156 -131 -18 -33 -19 -78 -19 -1020 0 -942 1 -987 19 -1020 26 -49 64 -88 111 -113 l40 -22 985 0 985 0 40 22 c47 25 85 64 111 113 18 33 19 78 19 1020 l0 985 -22 40 c-25 47 -64 85 -113 111 -33 18 -80 19 -1005 21 -533 1 -981 -2 -995 -6z m1282 -205 c4 -6 8 -247 8 -536 0 -554 0 -550 -45 -550 -45 0 -45 -4 -45 550 0 289 4 530 8 536 16 24 58 24 74 0z m443 10 c39 -17 55 -42 55 -86 0 -42 -15 -67 -51 -86 -62 -32 -134 14 -134 86 0 43 32 86 69 93 11 2 22 5 24 6 1 0 18 -5 37 -13z m-1245 -269 l0 -222 -158 -158 -158 -157 -31 52 c-112 188 -88 409 60 566 72 76 193 141 265 142 l22 0 0 -223z m258 181 c123 -58 235 -203 257 -330 l6 -38 -211 0 -210 0 0 206 0 207 46 -7 c25 -3 76 -20 112 -38z m947 -182 c33 0 72 3 87 8 23 7 32 2 66 -32 22 -22 45 -56 52 -76 10 -32 10 -40 -6 -57 -16 -17 -32 -19 -195 -19 -148 0 -180 3 -193 16 -9 8 -16 22 -16 31 0 55 86 151 124 137 11 -4 48 -8 81 -8z m-690 -323 c-29 -156 -144 -295 -292 -354 -49 -20 -77 -24 -173 -24 -110 0 -118 2 -185 33 -125 59 -129 43 52 224 l158 158 223 0 224 0 -7 -37z m759 -9 c39 -40 37 -103 -5 -138 -96 -81 -213 51 -124 140 34 34 93 33 129 -2z m-102 -256 c27 -8 49 -6 88 5 l52 15 44 -40 c50 -46 71 -96 54 -128 -10 -19 -19 -20 -198 -20 -196 0 -212 3 -212 44 0 50 87 152 120 140 8 -4 31 -11 52 -16z m-1326 -331 c22 -26 24 -37 24 -127 0 -158 -21 -180 -167 -180 -102 0 -131 11 -156 60 -15 28 -17 53 -15 129 4 91 5 94 37 123 33 30 33 30 143 26 106 -3 111 -4 134 -31z m1608 11 c13 -18 16 -51 16 -150 0 -115 -2 -130 -20 -148 -20 -20 -33 -20 -721 -20 -464 0 -707 3 -720 10 -17 10 -19 23 -19 158 0 102 4 152 12 160 9 9 184 12 724 12 l713 0 15 -22z m-1613 -437 c28 -29 29 -32 29 -130 0 -115 -10 -144 -55 -166 -43 -20 -173 -20 -221 0 -46 19 -64 63 -64 161 0 84 18 135 53 152 12 6 68 11 125 11 101 1 104 0 133 -28z m1613 7 c13 -18 16 -51 16 -150 0 -115 -2 -130 -20 -148 -20 -20 -33 -20 -714 -20 -427 0 -705 4 -720 10 l-26 10 0 148 c0 102 4 152 12 160 9 9 184 12 724 12 l713 0 15 -22z"/>
                    <path d="M410 910 l0 -70 70 0 70 0 0 70 0 70 -70 0 -70 0 0 -70z"/>
                    <path d="M860 910 l0 -70 175 0 175 0 0 70 0 70 -175 0 -175 0 0 -70z"/>
                    <path d="M1310 910 l0 -70 115 0 115 0 0 70 0 70 -115 0 -115 0 0 -70z"/>
                    <path d="M1640 910 l0 -70 75 0 75 0 0 70 0 70 -75 0 -75 0 0 -70z"/>
                    <path d="M1890 910 l0 -70 50 0 50 0 0 70 0 70 -50 0 -50 0 0 -70z"/>
                    <path d="M2090 910 l0 -70 30 0 30 0 0 70 0 70 -30 0 -30 0 0 -70z"/>
                    <path d="M410 480 l0 -70 70 0 70 0 0 70 0 70 -70 0 -70 0 0 -70z"/>
                    <path d="M860 480 l0 -70 75 0 75 0 0 70 0 70 -75 0 -75 0 0 -70z"/>
                    <path d="M1100 480 l0 -70 65 0 65 0 0 70 0 70 -65 0 -65 0 0 -70z"/>
                    <path d="M1330 480 l0 -70 55 0 55 0 0 70 0 70 -55 0 -55 0 0 -70z"/>
                    <path d="M1540 480 l0 -70 50 0 50 0 0 70 0 70 -50 0 -50 0 0 -70z"/>
                    <path d="M1730 480 l0 -70 45 0 45 0 0 70 0 70 -45 0 -45 0 0 -70z"/>
                    <path d="M1912 483 l3 -68 38 -3 37 -3 0 70 0 71 -40 0 -41 0 3 -67z"/>
                    <path d="M2090 480 l0 -70 30 0 30 0 0 70 0 70 -30 0 -30 0 0 -70z"/>
                    </g>
                  </svg>
                  <div style={{fontSize:'20px',fontWeight:'bold',color:'rgb(12,63,116)'}}>Admin Panel</div>
                </div>
              </a>
            </li>
            <li className="nav-item flex-grow text-center" role="presentation">
              <a href="#tabs-notificationsVertical" className="nav-link block font-medium text-xs leading-tight uppercase px-6 py-1 my-2 hover:border-transparent hover:bg-gray-100 focus:bg-gray-100 border-transparent" 
                id="tabs-notifications-tabVertical" data-bs-toggle="pill" 
                data-bs-target="#tabs-notificationsVertical" role="tab" 
                aria-controls="tabs-notificationsVertical" aria-selected="false">
                <div style={{display:'flex',alignItems:'center',padding:'7px 0'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" style={{marginRight:'25px'}} version="1.0" width="20.000000pt" height="20.000000pt" viewBox="0 0 256.000000 256.000000" preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="rgb(12,63,116)" stroke="none">
                    <path d="M1172 2539 c-81 -41 -122 -119 -122 -232 l0 -73 -57 -24 c-188 -77 -342 -225 -423 -404 -52 -115 -61 -165 -70 -416 -11 -299 -34 -407 -123 -585 -52 -106 -91 -165 -165 -253 -70 -84 -78 -117 -37 -157 l24 -25 1081 0 1081 0 24 25 c40 39 33 74 -28 147 -140 165 -227 340 -273 543 -9 43 -19 162 -24 305 -9 251 -18 301 -70 416 -81 178 -239 330 -422 404 l-58 24 0 77 c0 96 -33 167 -99 214 -37 26 -53 30 -119 33 -63 2 -85 -1 -120 -19z m158 -159 c15 -15 20 -33 20 -70 l0 -50 -70 0 -70 0 0 50 c0 59 24 90 70 90 17 0 39 -9 50 -20z"/>
                    <path d="M500 2297 c-35 -17 -139 -146 -193 -236 -91 -155 -142 -321 -154 -508 -6 -88 -5 -95 17 -118 17 -18 34 -25 61 -25 57 0 74 29 82 137 16 217 105 427 249 588 25 28 48 60 52 73 10 32 -10 77 -40 91 -31 14 -43 14 -74 -2z"/>
                    <path d="M1983 2298 c-28 -13 -47 -60 -37 -90 4 -13 27 -45 52 -73 146 -163 233 -369 248 -590 8 -108 25 -135 85 -135 29 0 43 6 59 28 20 25 22 35 17 117 -17 264 -121 509 -295 694 -50 54 -89 69 -129 49z"/>
                    <path d="M930 222 c0 -20 78 -119 117 -148 131 -100 335 -100 466 0 39 29 117 128 117 148 0 4 -157 8 -350 8 -192 0 -350 -4 -350 -8z"/>
                    </g>
                  </svg>
                  <div style={{fontSize:'20px',fontWeight:'bold',color:'rgb(12,63,116)'}}>Notifications</div>
                </div>
              </a>
            </li>
            <li className="nav-item flex-grow text-center" role="presentation">
              <a href="#tabs-logoutVertical" className="nav-link block font-medium text-xs leading-tight uppercase px-6 py-1 my-2 hover:border-transparent hover:bg-gray-100 focus:bg-gray-100 border-transparent" 
                id="tabs-logout-tabVertical" data-bs-toggle="pill" 
                data-bs-target="#tabs-logoutVertical" role="tab" 
                aria-controls="tabs-logoutVertical" aria-selected="false">
                <Link to={'/'}>
                  <div style={{display:'flex',alignItems:'center',padding:'7px 0'}} id="tabs-messages-tab" >
                    <svg xmlns="http://www.w3.org/2000/svg" style={{marginRight:'25px'}} version="1.0" width="20.000000pt" height="20.000000pt" viewBox="0 0 256.000000 256.000000" preserveAspectRatio="xMidYMid meet">
                      <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="rgb(12,63,116)" stroke="none">
                      <path d="M213 2414 c-24 -14 -54 -44 -68 -68 l-25 -43 0 -1023 0 -1023 25 -43 c15 -26 43 -54 69 -69 l43 -25 623 0 623 0 43 25 c26 15 54 43 69 69 23 40 25 51 25 180 l0 138 -34 34 c-30 30 -40 34 -86 34 -46 0 -56 -4 -86 -34 -33 -33 -34 -36 -34 -120 l0 -86 -520 0 -520 0 0 920 0 920 520 0 520 0 0 -86 c0 -84 1 -87 34 -120 30 -30 40 -34 86 -34 46 0 56 4 86 34 l34 34 0 138 c0 129 -2 140 -25 180 -15 26 -43 54 -69 69 l-43 25 -624 0 -624 0 -42 -26z"/>
                      <path d="M1813 1845 c-51 -22 -82 -87 -68 -142 4 -17 61 -83 143 -165 l136 -138 -678 0 -678 0 -34 -34 c-30 -30 -34 -40 -34 -86 0 -46 4 -56 34 -86 l34 -34 678 0 678 0 -136 -137 c-74 -76 -139 -149 -143 -161 -18 -60 21 -132 81 -152 71 -24 88 -12 362 263 l252 253 0 54 0 54 -247 249 c-137 137 -262 255 -280 263 -40 17 -59 17 -100 -1z"/>
                      </g>
                    </svg>
                    <div style={{fontSize:'20px',fontWeight:'bold',color:'rgb(12,63,116)'}}>Logout</div>
                  </div>
                </Link>
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <Container style={{borderTop:'3px solid rgb(12,63,116)',width:'75%'}}>
        <ContentWithPaddingXl>
          {/* {subheading && <Subheading>{subheading}</Subheading>}
          {heading && <Heading>{heading}</Heading>}
          {description && <Description>{description}</Description>} */}
          {/* <ThreeColumnContainer>
            {cards.map((card, i) => (
              <Column key={i}>
                <Card href={card.url}>
                  <span className="imageContainer" css={imageContainerCss}>
                    <img src={card.imageSrc} alt="" css={imageCss} />
                  </span>
                  <span className="title">{card.title}</span>
                  <p className="description">{card.description}</p>
                  {linkText && (
                    <span className="link">
                      <span>{linkText}</span>
                      <ArrowRightIcon className="icon" />
                    </span>
                  )}
                </Card>
              </Column>
            ))}
          </ThreeColumnContainer> */}
          

          <div>
            <div className="tab-content" id="tabs-tabContentVertical">
              <div className="tab-pane fade show active" id="tabs-homeVertical" role="tabpanel" aria-labelledby="tabs-home-tabVertical">
                <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap',textAlign:'center',padding:'0 20px'}}>  

                  <div style={{width:'30%'}} className="p-3 mb-5 mx-5">
                    <div>
                      <svg className="mx-auto rounded-full mb-3" style={{border:'1px solid grey'}} xmlns="http://www.w3.org/2000/svg" version="1.0" width="60.000000pt" height="60.000000pt" viewBox="0 0 256.000000 256.000000" preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="rgb(12,63,116)" stroke="none">
                        <path d="M1247 2394 c-4 -4 -7 -43 -7 -86 l0 -78 -40 0 c-46 0 -95 -21 -104 -45 -3 -9 -6 -42 -6 -74 0 -57 0 -57 -50 -94 -91 -68 -150 -190 -150 -308 l0 -58 -32 14 c-26 10 -34 21 -38 47 -4 28 -10 34 -34 36 -33 4 -46 -10 -46 -50 0 -20 -5 -28 -18 -28 -31 0 -89 -48 -111 -93 -17 -35 -21 -62 -21 -145 l0 -102 -32 0 c-37 0 -53 -8 -60 -30 -10 -30 11 -50 52 -50 l40 0 0 -60 0 -60 -136 0 c-74 0 -144 -5 -155 -10 -21 -12 -25 -50 -7 -68 9 -9 267 -12 1100 -12 l1088 0 0 -30 0 -30 -1200 0 -1200 0 0 30 c0 29 1 30 48 30 53 0 72 12 72 47 0 31 -28 43 -102 43 -107 0 -99 44 -96 -495 l3 -470 1275 0 1275 0 0 175 0 175 -29 3 c-36 4 -46 -10 -46 -70 l0 -48 -130 0 -130 0 0 245 0 245 130 0 130 0 0 -134 c0 -144 6 -161 52 -154 l23 3 3 250 c2 226 1 251 -15 263 -12 9 -88 12 -295 12 l-278 0 0 60 0 60 40 0 c41 0 62 20 52 50 -7 22 -23 30 -59 30 l-31 0 -4 113 c-3 103 -5 117 -30 154 -16 25 -44 49 -72 62 -38 19 -45 27 -48 54 -3 27 -8 33 -32 35 -33 4 -46 -10 -46 -50 0 -21 -5 -28 -19 -28 -11 0 -23 -4 -26 -10 -15 -24 -23 -5 -27 68 -6 100 -23 137 -63 137 -29 0 -30 -1 -27 -45 1 -25 5 -156 8 -292 l6 -248 -312 0 -312 0 4 248 c3 231 5 250 26 298 46 102 151 175 260 182 79 5 139 -11 200 -54 50 -36 71 -41 90 -22 25 25 13 56 -33 89 -44 32 -45 33 -45 90 0 31 -3 65 -6 74 -9 24 -58 45 -103 45 l-40 0 -3 83 -3 82 -30 3 c-17 2 -34 0 -38 -4z m-408 -820 c36 -25 51 -75 51 -164 l0 -80 -110 0 -110 0 0 80 c0 125 34 180 110 180 20 0 46 -7 59 -16z m1000 0 c36 -25 51 -75 51 -164 l0 -80 -110 0 -110 0 0 80 c0 125 34 180 110 180 20 0 46 -7 59 -16z m-949 -384 l0 -60 -110 0 -110 0 0 60 0 60 110 0 110 0 0 -60z m1000 0 l0 -60 -110 0 -110 0 0 60 0 60 110 0 110 0 0 -60z m-300 -30 l0 -30 -310 0 -310 0 0 30 0 30 310 0 310 0 0 -30z m-1250 -515 l0 -245 -130 0 -130 0 0 245 0 245 130 0 130 0 0 -245z m150 0 l0 -245 -35 0 -35 0 0 245 0 245 35 0 35 0 0 -245z m180 0 l0 -245 -50 0 -50 0 0 245 0 245 50 0 50 0 0 -245z m150 0 l0 -245 -35 0 -35 0 0 245 0 245 35 0 35 0 0 -245z m180 0 l0 -245 -50 0 -50 0 0 245 0 245 50 0 50 0 0 -245z m150 0 l0 -245 -35 0 -35 0 0 245 0 245 35 0 35 0 0 -245z m180 0 l0 -245 -50 0 -50 0 0 245 0 245 50 0 50 0 0 -245z m150 0 l0 -245 -35 0 -35 0 0 245 0 245 35 0 35 0 0 -245z m180 0 l0 -245 -50 0 -50 0 0 245 0 245 50 0 50 0 0 -245z m150 0 l0 -245 -35 0 -35 0 0 245 0 245 35 0 35 0 0 -245z m180 0 l0 -245 -50 0 -50 0 0 245 0 245 50 0 50 0 0 -245z m150 0 l0 -245 -35 0 -35 0 0 245 0 245 35 0 35 0 0 -245z m340 -365 l0 -40 -1200 0 -1200 0 0 40 0 40 1200 0 1200 0 0 -40z"/>
                        </g>
                      </svg>
                      {/* <Link to={'/'}> */}
                        <div style={{fontSize:'20px',fontWeight:'bold'}}>District Governor</div>
                      {/* </Link> */}
                    </div>
                  </div>     
                
                  <div style={{width:'30%'}} className="p-3 mb-5 mx-5">
                    <div>
                      <svg className="mx-auto rounded-full mb-3" style={{border:'1px solid grey'}} xmlns="http://www.w3.org/2000/svg" version="1.0" width="60.000000pt" height="60.000000pt" viewBox="0 0 256.000000 256.000000" preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="rgb(12,63,116)" stroke="none">
                        <path d="M1828 1965 c-133 -50 -210 -162 -212 -305 -1 -66 3 -84 32 -142 18 -36 49 -81 69 -99 132 -116 333 -111 451 11 68 69 87 120 87 230 0 80 -4 102 -24 140 -32 62 -86 117 -146 148 -62 32 -196 41 -257 17z"/>
                        <path d="M380 1893 c0 -70 32 -146 81 -192 19 -18 196 -127 394 -244 323 -190 365 -211 405 -211 39 -1 67 12 198 88 83 49 152 93 152 98 0 5 -11 30 -24 56 -67 132 -49 298 44 414 17 20 30 39 30 42 0 3 -288 6 -640 6 l-640 0 0 -57z"/>
                        <path d="M301 1338 l-1 -568 248 178 c136 98 296 214 356 257 100 72 107 79 90 92 -10 7 -133 80 -272 161 -140 81 -273 164 -296 184 -52 45 -103 138 -115 209 -6 35 -9 -143 -10 -513z"/>
                        <path d="M2195 1360 c-28 -31 -133 -79 -197 -90 -97 -18 -208 11 -295 76 -17 13 -36 24 -41 24 -20 0 -153 -83 -145 -90 10 -10 684 -494 701 -504 9 -6 12 57 12 298 0 168 -4 306 -8 306 -5 0 -17 -9 -27 -20z"/>
                        <path d="M690 970 l-385 -279 0 -53 0 -53 950 -3 c1061 -2 975 -8 975 67 -1 36 -4 38 -393 318 l-392 281 -60 -33 c-103 -57 -152 -56 -257 6 -27 16 -50 29 -51 28 -1 0 -175 -126 -387 -279z"/>
                        </g>
                      </svg>
                      {/* <Link to={'/'}> */}
                        <div style={{fontSize:'20px',fontWeight:'bold',}}>Important Contacts</div>
                      {/* </Link> */}
                    </div>
                  </div>
                  
                            
                  <div style={{width:'30%'}} className="p-3 mb-5 mx-5">
                    <div>
                        <svg className="mx-auto rounded-full mb-3" style={{border:'1px solid grey'}} xmlns="http://www.w3.org/2000/svg" version="1.0" width="60.000000pt" height="60.000000pt" viewBox="0 0 256.000000 256.000000" preserveAspectRatio="xMidYMid meet">
                          <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="rgb(12,63,116)" stroke="none">
                          <path d="M1776 2446 c-80 -30 -146 -125 -146 -212 0 -87 67 -181 148 -209 91 -31 166 -13 233 54 54 53 74 110 66 183 -9 76 -53 140 -121 175 -42 22 -133 26 -180 9z"/>
                          <path d="M578 2270 c-150 -45 -204 -229 -102 -348 45 -53 105 -76 184 -70 114 8 190 93 190 210 0 75 -17 114 -68 160 -58 52 -133 70 -204 48z"/>
                          <path d="M1750 1946 c0 -66 8 -73 68 -52 37 13 47 13 83 1 67 -24 69 -22 69 46 l0 62 -37 -8 c-45 -9 -93 -9 -145 0 l-38 7 0 -56z"/>
                          <path d="M1500 1941 c-77 -24 -148 -90 -168 -160 -8 -24 -12 -127 -12 -285 l0 -248 29 -29 29 -29 264 0 264 0 29 30 c22 23 28 39 28 74 0 25 -5 51 -12 59 -8 11 -10 44 -5 121 l7 106 -78 0 -78 0 5 -85 4 -85 -133 0 -133 0 0 149 c0 120 3 151 15 161 13 11 15 -4 15 -124 l0 -136 91 0 92 0 -6 59 c-6 50 -3 63 14 85 19 25 25 26 113 26 119 0 131 -10 128 -108 -1 -37 -5 -79 -8 -93 -3 -15 2 -50 12 -78 16 -50 14 -85 -11 -143 -6 -16 0 -18 69 -18 l76 0 0 270 c0 149 4 270 8 270 29 0 32 -30 32 -282 l0 -258 110 0 110 0 0 283 0 283 -27 55 c-31 60 -92 112 -151 129 -20 5 -77 10 -127 10 l-90 0 -23 -82 c-69 -247 -175 -247 -244 0 l-23 82 -95 -1 c-52 0 -106 -4 -120 -8z"/>
                          <path d="M288 1786 c-82 -22 -148 -81 -174 -154 -9 -26 -13 -99 -14 -238 0 -189 1 -203 21 -228 l20 -26 -44 0 c-65 0 -97 -28 -97 -85 0 -35 5 -48 26 -64 33 -26 58 -26 99 -1 18 11 68 25 114 32 l81 11 0 257 c0 217 2 260 15 270 13 11 15 -20 15 -273 l0 -285 -87 -12 c-49 -7 -101 -19 -116 -27 -34 -17 -67 -69 -67 -105 0 -32 186 -671 203 -700 12 -18 83 -58 104 -58 8 0 10 17 6 52 -6 65 17 101 78 119 21 7 39 15 39 18 0 3 -15 56 -33 116 l-32 110 -61 5 c-33 3 -72 13 -87 23 -34 22 -65 71 -73 114 -9 46 27 116 74 145 36 22 45 23 324 26 181 2 301 -1 326 -8 50 -13 107 -74 116 -124 6 -29 2 -48 -16 -84 -31 -61 -67 -86 -135 -92 l-56 -5 -33 -115 c-19 -63 -31 -116 -27 -118 75 -25 122 -87 103 -137 -14 -36 -4 -48 33 -39 44 9 82 38 95 71 7 16 52 167 103 338 102 348 105 374 51 427 -26 27 -41 32 -143 47 l-114 17 -3 282 c-1 161 2 282 7 282 26 0 31 -36 33 -280 l3 -254 89 -13 c50 -7 103 -21 123 -33 33 -20 50 -20 682 -20 641 0 649 0 675 21 21 16 26 29 26 64 0 35 -5 48 -26 64 -26 21 -34 21 -711 21 l-684 0 20 26 c20 25 21 40 21 222 0 121 -4 210 -12 234 -16 53 -87 131 -140 154 -39 17 -77 19 -368 21 -241 2 -337 -1 -372 -11z"/>
                          <path d="M304 746 c-25 -25 -34 -43 -34 -67 1 -88 51 -119 193 -119 l97 0 0 -160 0 -160 -49 0 c-42 0 -53 -4 -70 -26 -27 -35 -26 -59 4 -89 24 -25 26 -25 203 -25 174 0 179 1 200 23 27 29 28 71 2 97 -15 15 -33 20 -70 20 l-50 0 0 160 0 160 95 0 c112 0 157 15 179 59 26 50 21 88 -18 127 l-34 34 -307 0 -307 0 -34 -34z"/>
                          </g>
                        </svg>
                        {/* <Link to={'/'}> */}
                          <div style={{fontSize:'20px',fontWeight:'bold'}}>Clubs in Action</div>
                        {/* </Link> */}
                    </div>
                  </div>
                  
                  <div style={{width:'30%'}} className="p-3 mb-5 mx-5">
                    <svg className="mx-auto rounded-full mb-3" style={{border:'1px solid grey'}} xmlns="http://www.w3.org/2000/svg" version="1.0" width="60.000000pt" height="60.000000pt" viewBox="0 0 256.000000 256.000000" preserveAspectRatio="xMidYMid meet">
                      <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="rgb(12,63,116)" stroke="none">
                      <path d="M624 2545 c-63 -32 -64 -38 -64 -409 l0 -336 90 0 90 0 0 295 0 295 610 0 610 0 2 -412 3 -413 83 -3 82 -3 0 465 0 466 -29 32 -29 33 -709 2 c-616 2 -712 1 -739 -12z"/>
                      <path d="M943 2176 c-22 -19 -28 -32 -28 -66 0 -34 6 -47 28 -66 l28 -24 380 0 380 0 24 25 c19 18 25 35 25 65 0 30 -6 47 -25 65 l-24 25 -380 0 -380 0 -28 -24z"/>
                      <path d="M935 1828 l-27 -32 43 -19 c24 -10 65 -36 91 -58 l47 -39 310 0 c206 0 318 4 334 11 54 25 66 101 22 144 l-24 25 -385 0 -384 0 -27 -32z"/>
                      <path d="M193 1664 c-18 -9 -43 -32 -54 -51 -19 -30 -21 -45 -16 -113 l5 -78 -32 -6 c-38 -7 -72 -40 -81 -77 -9 -35 171 -1203 192 -1252 9 -21 30 -48 47 -60 l31 -22 988 0 989 0 29 33 c20 22 29 43 29 65 0 18 -40 303 -89 634 -92 626 -97 649 -148 672 -16 7 -174 11 -483 11 l-459 0 -84 98 c-101 117 -123 137 -160 151 -18 7 -146 11 -350 11 -275 0 -327 -3 -354 -16z"/>
                      <path d="M2250 1564 c1 -130 140 -1123 152 -1077 4 15 39 249 79 520 78 536 78 526 21 568 -22 16 -47 21 -139 24 l-113 3 0 -38z"/>
                      </g>
                    </svg>
                    {/* <Link to={'/'}> */}
                      <div style={{fontSize:'20px',fontWeight:'bold',}}>E-Directory</div>
                    {/* </Link> */}
                  </div>
                  
                  <div style={{width:'30%'}} className="p-3 mb-5 mx-5">
                    <svg className="mx-auto rounded-full mb-3" style={{border:'1px solid grey'}} xmlns="http://www.w3.org/2000/svg" version="1.0" width="60.000000pt" height="60.000000pt" viewBox="0 0 256.000000 256.000000" preserveAspectRatio="xMidYMid meet">
                      <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="rgb(12,63,116)" stroke="none">
                      <path d="M120 1440 l0 -1000 680 0 680 0 0 800 0 800 -180 0 c-237 0 -220 -17 -220 220 l0 180 -480 0 -480 0 0 -1000z m1280 480 l0 -40 -600 0 -600 0 0 40 0 40 600 0 600 0 0 -40z m-240 -160 l0 -40 -360 0 -360 0 0 40 0 40 360 0 360 0 0 -40z m240 -160 l0 -40 -600 0 -600 0 0 40 0 40 600 0 600 0 0 -40z m-240 -160 l0 -40 -360 0 -360 0 0 40 0 40 360 0 360 0 0 -40z m240 -160 l0 -40 -600 0 -600 0 0 40 0 40 600 0 600 0 0 -40z m-240 -160 l0 -40 -360 0 -360 0 0 40 0 40 360 0 360 0 0 -40z m240 -160 l0 -40 -600 0 -600 0 0 40 0 40 600 0 600 0 0 -40z m-240 -160 l0 -40 -360 0 -360 0 0 40 0 40 360 0 360 0 0 -40z m240 -160 l0 -40 -600 0 -600 0 0 40 0 40 600 0 600 0 0 -40z"/>
                      <path d="M1160 2257 l0 -137 135 0 c74 0 135 1 135 3 0 1 -61 63 -135 137 l-135 135 0 -138z"/>
                      <path d="M1560 1220 c0 -807 0 -820 -20 -840 -19 -19 -33 -20 -240 -20 l-220 0 0 -120 0 -120 680 0 680 0 0 760 0 760 -180 0 c-167 0 -181 1 -200 20 -19 19 -20 33 -20 200 l0 180 -240 0 -240 0 0 -820z"/>
                      <path d="M2120 1857 l0 -137 135 0 c74 0 135 1 135 3 0 1 -61 63 -135 137 l-135 135 0 -138z"/>
                      </g>
                    </svg>
                    {/* <Link to={'/'}> */}
                      <div style={{fontSize:'20px',fontWeight:'bold'}}>Document Center</div>  
                    {/* </Link> */}
                  </div>
                  
                  <div style={{width:'30%'}} className="p-3 mb-5 mx-5">
                    <svg className="mx-auto rounded-full mb-3" style={{border:'1px solid grey'}} xmlns="http://www.w3.org/2000/svg" version="1.0" width="60.000000pt" height="60.000000pt" viewBox="0 0 256.000000 256.000000" preserveAspectRatio="xMidYMid meet">
                      <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="rgb(12,63,116)" stroke="none">
                      <path d="M325 2385 c-20 -19 -25 -34 -25 -75 l0 -50 -128 0 c-183 0 -172 15 -172 -250 l0 -210 1280 0 1280 0 0 210 c0 265 11 250 -172 250 l-128 0 0 50 c0 62 -31 100 -80 100 -49 0 -80 -38 -80 -100 l0 -50 -145 0 -145 0 0 50 c0 62 -31 100 -80 100 -49 0 -80 -38 -80 -100 l0 -50 -145 0 -145 0 0 50 c0 62 -31 100 -80 100 -49 0 -80 -38 -80 -100 l0 -50 -145 0 -145 0 0 50 c0 62 -31 100 -80 100 -49 0 -80 -38 -80 -100 l0 -50 -145 0 -145 0 0 50 c0 62 -31 100 -80 100 -19 0 -40 -9 -55 -25z m125 -220 c0 -97 -16 -125 -70 -125 -54 0 -70 28 -70 125 l0 85 70 0 70 0 0 -85z m450 0 c0 -97 -16 -125 -70 -125 -54 0 -70 28 -70 125 l0 85 70 0 70 0 0 -85z m450 0 c0 -97 -16 -125 -70 -125 -54 0 -70 28 -70 125 l0 85 70 0 70 0 0 -85z m450 0 c0 -97 -16 -125 -70 -125 -54 0 -70 28 -70 125 l0 85 70 0 70 0 0 -85z m450 0 c0 -97 -16 -125 -70 -125 -54 0 -70 28 -70 125 l0 85 70 0 70 0 0 -85z"/>
                      <path d="M0 925 l0 -734 22 -21 c22 -20 28 -20 1258 -20 1230 0 1236 0 1258 20 l22 21 0 734 0 735 -1280 0 -1280 0 0 -735z m554 491 c61 -25 61 -97 1 -122 -44 -18 -156 -18 -199 0 -59 25 -61 96 -3 121 42 18 158 19 201 1z m450 0 c61 -25 61 -97 1 -122 -44 -18 -156 -18 -199 0 -59 25 -61 96 -3 121 42 18 158 19 201 1z m878 -16 c171 -53 311 -204 353 -382 60 -256 -98 -530 -353 -608 -87 -27 -217 -27 -304 0 -171 53 -311 204 -353 382 -60 254 91 519 345 605 87 30 221 31 312 3z m-1328 -284 c61 -25 61 -97 1 -122 -44 -18 -156 -18 -199 0 -59 25 -61 96 -3 121 42 18 158 19 201 1z m450 0 c61 -25 61 -97 1 -122 -44 -18 -156 -18 -199 0 -59 25 -61 96 -3 121 42 18 158 19 201 1z m-450 -300 c61 -25 61 -97 1 -122 -44 -18 -156 -18 -199 0 -59 25 -61 96 -3 121 42 18 158 19 201 1z m450 0 c61 -25 61 -97 1 -122 -44 -18 -156 -18 -199 0 -59 25 -61 96 -3 121 42 18 158 19 201 1z m-450 -300 c61 -25 61 -97 1 -122 -44 -18 -156 -18 -199 0 -59 25 -61 96 -3 121 42 18 158 19 201 1z m450 0 c61 -25 61 -97 1 -122 -44 -18 -156 -18 -199 0 -59 25 -61 96 -3 121 42 18 158 19 201 1z"/>
                      <path d="M1587 1256 c-110 -46 -182 -123 -217 -235 -62 -195 37 -400 225 -470 76 -28 194 -29 269 -1 111 42 190 125 226 239 62 196 -36 399 -226 471 -79 29 -200 27 -277 -4z m193 -156 c15 -15 20 -33 20 -70 l0 -50 35 0 c49 0 102 -24 110 -50 20 -64 -30 -100 -138 -100 -74 0 -123 14 -137 40 -6 10 -10 62 -10 114 0 109 14 136 70 136 17 0 39 -9 50 -20z"/>
                      </g>
                    </svg>
                    {/* <Link to={'/'}> */}
                      <div style={{fontSize:'20px',fontWeight:'bold'}}>Events</div> 
                    {/* </Link>                                                                     */}
                  </div>
                  <div style={{width:'30%'}} className="p-3 mb-5 mx-5">
                    <svg className="mx-auto rounded-full mb-3" style={{border:'1px solid grey'}} xmlns="http://www.w3.org/2000/svg" version="1.0" width="60.000000pt" height="60.000000pt" viewBox="0 0 256.000000 256.000000" preserveAspectRatio="xMidYMid meet">
                      <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="rgb(12,63,116)" stroke="none">
                      <path d="M10 1280 l0 -1280 950 0 950 0 0 452 0 453 -87 -87 -88 -86 -190 -63 -190 -64 133 -5 c103 -4 135 -8 142 -20 15 -23 12 -38 -12 -54 -34 -24 -1282 -24 -1316 0 -26 18 -28 37 -6 58 14 14 75 16 519 16 l505 0 -11 24 c-9 19 -8 35 5 72 9 26 16 49 16 51 0 2 -226 3 -503 3 -439 0 -505 2 -525 16 -24 16 -27 31 -12 54 8 13 83 16 541 20 l532 5 37 109 37 108 237 237 236 236 0 273 0 272 -224 0 c-221 0 -225 0 -240 22 -13 19 -16 59 -16 240 l0 218 -710 0 -710 0 0 -1280z m1011 -210 c11 -6 19 -21 19 -35 0 -14 -8 -29 -19 -35 -13 -6 -145 -10 -362 -10 -305 0 -344 2 -361 17 -22 20 -23 31 -1 55 15 17 40 18 360 18 218 0 351 -4 364 -10z m603 -726 c22 -21 20 -40 -6 -58 -34 -24 -1282 -24 -1316 0 -26 18 -28 37 -6 58 14 14 88 16 664 16 576 0 650 -2 664 -16z"/>
                      <path d="M1520 2330 l0 -160 167 0 168 0 -160 160 c-88 88 -163 160 -167 160 -5 0 -8 -72 -8 -160z"/>
                      <path d="M2280 1775 l-75 -75 98 -98 97 -97 77 78 78 77 -95 95 c-52 52 -97 95 -100 95 -3 0 -39 -34 -80 -75z"/>
                      <path d="M1835 1336 l-310 -304 95 -96 c52 -53 99 -96 105 -96 6 0 147 137 315 305 l305 305 -95 95 c-52 52 -97 95 -100 95 -3 0 -144 -137 -315 -304z"/>
                      <path d="M1485 939 c-42 -112 -72 -219 -61 -219 23 0 210 66 213 76 2 5 -30 43 -72 84 -52 51 -76 69 -80 59z"/>
                      </g>
                    </svg>
                    <Link to={'/ReportingCMR'}>
                      <div style={{fontSize:'20px',fontWeight:'bold'}}>Reporting CMR</div>
                    </Link>
                  </div>

                

                </div>
              </div>
              <div className="tab-pane fade" id="tabs-governorVertical" role="tabpanel" aria-labelledby="tabs-governor-tabVertical">
                District Governor
              </div>
              <div className="tab-pane fade" id="tabs-messagesVertical" role="tabpanel" aria-labelledby="tabs-profile-tabVertical">
                District Events
              </div>
              <div className="tab-pane fade" id="tabs-contactsVertical" role="tabpanel" aria-labelledby="tabs-contacts-tabVertical">
                Important Contacts
              </div>
              <div className="tab-pane fade" id="tabs-clubsVertical" role="tabpanel" aria-labelledby="tabs-clubs-tabVertical">
                Clubs in Action
              </div>
              <div className="tab-pane fade" id="tabs-documentVertical" role="tabpanel" aria-labelledby="tabs-document-tabVertical">
                Document Center
              </div>
              <div className="tab-pane fade" id="tabs-directoryVertical" role="tabpanel" aria-labelledby="tabs-directory-tabVertical">
                E-Directory
              </div>
              <div className="tab-pane fade" id="tabs-profileVertical" role="tabpanel" aria-labelledby="tabs-profile-tabVertical">
                Profile
              </div>
              <div className="tab-pane fade" id="tabs-pinVertical" role="tabpanel" aria-labelledby="tabs-pin-tabVertical">
                Change PIN 
              </div>
              <div className="tab-pane fade" id="tabs-adminVertical" role="tabpanel" aria-labelledby="tabs-admin-tabVertical">
                Admin Panel
              </div>
              <div className="tab-pane fade" id="tabs-notificationsVertical" role="tabpanel" aria-labelledby="tabs-notifications-tabVertical">
                Notifications
              </div>
              {/* <div className="tab-pane fade" id="tabs-logoutVertical" role="tabpanel" aria-labelledby="tabs-logout-tabVertical">
                Logout
              </div> */}
            </div>
          </div>
        </ContentWithPaddingXl>
        <DecoratorBlob />
      </Container>
      </div>
      </div>
    </>
  );
};
