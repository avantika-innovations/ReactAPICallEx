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
    <Container>
      <ContentWithPaddingXl>
        {subheading && <Subheading>{subheading}</Subheading>}
        {heading && <Heading>{heading}</Heading>}
        {description && <Description>{description}</Description>}
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
        <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap',textAlign:'center',padding:'0 20px'}}>  

          <div style={{width:'30%'}} className="p-3 mb-5 mx-5">
            <div>
              <svg className="mx-auto rounded-full mb-3" style={{border:'1px solid grey'}} xmlns="http://www.w3.org/2000/svg" version="1.0" width="60.000000pt" height="60.000000pt" viewBox="0 0 256.000000 256.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="rgb(12,63,116)" stroke="none">
                <path d="M1247 2394 c-4 -4 -7 -43 -7 -86 l0 -78 -40 0 c-46 0 -95 -21 -104 -45 -3 -9 -6 -42 -6 -74 0 -57 0 -57 -50 -94 -91 -68 -150 -190 -150 -308 l0 -58 -32 14 c-26 10 -34 21 -38 47 -4 28 -10 34 -34 36 -33 4 -46 -10 -46 -50 0 -20 -5 -28 -18 -28 -31 0 -89 -48 -111 -93 -17 -35 -21 -62 -21 -145 l0 -102 -32 0 c-37 0 -53 -8 -60 -30 -10 -30 11 -50 52 -50 l40 0 0 -60 0 -60 -136 0 c-74 0 -144 -5 -155 -10 -21 -12 -25 -50 -7 -68 9 -9 267 -12 1100 -12 l1088 0 0 -30 0 -30 -1200 0 -1200 0 0 30 c0 29 1 30 48 30 53 0 72 12 72 47 0 31 -28 43 -102 43 -107 0 -99 44 -96 -495 l3 -470 1275 0 1275 0 0 175 0 175 -29 3 c-36 4 -46 -10 -46 -70 l0 -48 -130 0 -130 0 0 245 0 245 130 0 130 0 0 -134 c0 -144 6 -161 52 -154 l23 3 3 250 c2 226 1 251 -15 263 -12 9 -88 12 -295 12 l-278 0 0 60 0 60 40 0 c41 0 62 20 52 50 -7 22 -23 30 -59 30 l-31 0 -4 113 c-3 103 -5 117 -30 154 -16 25 -44 49 -72 62 -38 19 -45 27 -48 54 -3 27 -8 33 -32 35 -33 4 -46 -10 -46 -50 0 -21 -5 -28 -19 -28 -11 0 -23 -4 -26 -10 -15 -24 -23 -5 -27 68 -6 100 -23 137 -63 137 -29 0 -30 -1 -27 -45 1 -25 5 -156 8 -292 l6 -248 -312 0 -312 0 4 248 c3 231 5 250 26 298 46 102 151 175 260 182 79 5 139 -11 200 -54 50 -36 71 -41 90 -22 25 25 13 56 -33 89 -44 32 -45 33 -45 90 0 31 -3 65 -6 74 -9 24 -58 45 -103 45 l-40 0 -3 83 -3 82 -30 3 c-17 2 -34 0 -38 -4z m-408 -820 c36 -25 51 -75 51 -164 l0 -80 -110 0 -110 0 0 80 c0 125 34 180 110 180 20 0 46 -7 59 -16z m1000 0 c36 -25 51 -75 51 -164 l0 -80 -110 0 -110 0 0 80 c0 125 34 180 110 180 20 0 46 -7 59 -16z m-949 -384 l0 -60 -110 0 -110 0 0 60 0 60 110 0 110 0 0 -60z m1000 0 l0 -60 -110 0 -110 0 0 60 0 60 110 0 110 0 0 -60z m-300 -30 l0 -30 -310 0 -310 0 0 30 0 30 310 0 310 0 0 -30z m-1250 -515 l0 -245 -130 0 -130 0 0 245 0 245 130 0 130 0 0 -245z m150 0 l0 -245 -35 0 -35 0 0 245 0 245 35 0 35 0 0 -245z m180 0 l0 -245 -50 0 -50 0 0 245 0 245 50 0 50 0 0 -245z m150 0 l0 -245 -35 0 -35 0 0 245 0 245 35 0 35 0 0 -245z m180 0 l0 -245 -50 0 -50 0 0 245 0 245 50 0 50 0 0 -245z m150 0 l0 -245 -35 0 -35 0 0 245 0 245 35 0 35 0 0 -245z m180 0 l0 -245 -50 0 -50 0 0 245 0 245 50 0 50 0 0 -245z m150 0 l0 -245 -35 0 -35 0 0 245 0 245 35 0 35 0 0 -245z m180 0 l0 -245 -50 0 -50 0 0 245 0 245 50 0 50 0 0 -245z m150 0 l0 -245 -35 0 -35 0 0 245 0 245 35 0 35 0 0 -245z m180 0 l0 -245 -50 0 -50 0 0 245 0 245 50 0 50 0 0 -245z m150 0 l0 -245 -35 0 -35 0 0 245 0 245 35 0 35 0 0 -245z m340 -365 l0 -40 -1200 0 -1200 0 0 40 0 40 1200 0 1200 0 0 -40z"/>
                </g>
              </svg>
              <div style={{fontSize:'20px',fontWeight:'bold'}}>District Governor</div>
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
              <div style={{fontSize:'20px',fontWeight:'bold',}}>Important Contacts</div>
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
                <div style={{fontSize:'20px',fontWeight:'bold'}}>Clubs in Action</div>
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
            <div style={{fontSize:'20px',fontWeight:'bold',}}>E-Directory</div>
          </div>
          {/* <div className="divider lg:divider-horizontal h-20" style={{border:'1px solid grey',}}></div> */}
          <div style={{width:'30%'}} className="p-3 mb-5 mx-5">
            <svg className="mx-auto rounded-full mb-3" style={{border:'1px solid grey'}} xmlns="http://www.w3.org/2000/svg" version="1.0" width="60.000000pt" height="60.000000pt" viewBox="0 0 256.000000 256.000000" preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="rgb(12,63,116)" stroke="none">
              <path d="M120 1440 l0 -1000 680 0 680 0 0 800 0 800 -180 0 c-237 0 -220 -17 -220 220 l0 180 -480 0 -480 0 0 -1000z m1280 480 l0 -40 -600 0 -600 0 0 40 0 40 600 0 600 0 0 -40z m-240 -160 l0 -40 -360 0 -360 0 0 40 0 40 360 0 360 0 0 -40z m240 -160 l0 -40 -600 0 -600 0 0 40 0 40 600 0 600 0 0 -40z m-240 -160 l0 -40 -360 0 -360 0 0 40 0 40 360 0 360 0 0 -40z m240 -160 l0 -40 -600 0 -600 0 0 40 0 40 600 0 600 0 0 -40z m-240 -160 l0 -40 -360 0 -360 0 0 40 0 40 360 0 360 0 0 -40z m240 -160 l0 -40 -600 0 -600 0 0 40 0 40 600 0 600 0 0 -40z m-240 -160 l0 -40 -360 0 -360 0 0 40 0 40 360 0 360 0 0 -40z m240 -160 l0 -40 -600 0 -600 0 0 40 0 40 600 0 600 0 0 -40z"/>
              <path d="M1160 2257 l0 -137 135 0 c74 0 135 1 135 3 0 1 -61 63 -135 137 l-135 135 0 -138z"/>
              <path d="M1560 1220 c0 -807 0 -820 -20 -840 -19 -19 -33 -20 -240 -20 l-220 0 0 -120 0 -120 680 0 680 0 0 760 0 760 -180 0 c-167 0 -181 1 -200 20 -19 19 -20 33 -20 200 l0 180 -240 0 -240 0 0 -820z"/>
              <path d="M2120 1857 l0 -137 135 0 c74 0 135 1 135 3 0 1 -61 63 -135 137 l-135 135 0 -138z"/>
              </g>
            </svg>
            <div style={{fontSize:'20px',fontWeight:'bold'}}>Document Center</div>
          </div>
          
          <div style={{width:'30%'}} className="p-3 mb-5 mx-5">
            <svg className="mx-auto rounded-full mb-3" style={{border:'1px solid grey'}} xmlns="http://www.w3.org/2000/svg" version="1.0" width="60.000000pt" height="60.000000pt" viewBox="0 0 256.000000 256.000000" preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="rgb(12,63,116)" stroke="none">
              <path d="M325 2385 c-20 -19 -25 -34 -25 -75 l0 -50 -128 0 c-183 0 -172 15 -172 -250 l0 -210 1280 0 1280 0 0 210 c0 265 11 250 -172 250 l-128 0 0 50 c0 62 -31 100 -80 100 -49 0 -80 -38 -80 -100 l0 -50 -145 0 -145 0 0 50 c0 62 -31 100 -80 100 -49 0 -80 -38 -80 -100 l0 -50 -145 0 -145 0 0 50 c0 62 -31 100 -80 100 -49 0 -80 -38 -80 -100 l0 -50 -145 0 -145 0 0 50 c0 62 -31 100 -80 100 -49 0 -80 -38 -80 -100 l0 -50 -145 0 -145 0 0 50 c0 62 -31 100 -80 100 -19 0 -40 -9 -55 -25z m125 -220 c0 -97 -16 -125 -70 -125 -54 0 -70 28 -70 125 l0 85 70 0 70 0 0 -85z m450 0 c0 -97 -16 -125 -70 -125 -54 0 -70 28 -70 125 l0 85 70 0 70 0 0 -85z m450 0 c0 -97 -16 -125 -70 -125 -54 0 -70 28 -70 125 l0 85 70 0 70 0 0 -85z m450 0 c0 -97 -16 -125 -70 -125 -54 0 -70 28 -70 125 l0 85 70 0 70 0 0 -85z m450 0 c0 -97 -16 -125 -70 -125 -54 0 -70 28 -70 125 l0 85 70 0 70 0 0 -85z"/>
              <path d="M0 925 l0 -734 22 -21 c22 -20 28 -20 1258 -20 1230 0 1236 0 1258 20 l22 21 0 734 0 735 -1280 0 -1280 0 0 -735z m554 491 c61 -25 61 -97 1 -122 -44 -18 -156 -18 -199 0 -59 25 -61 96 -3 121 42 18 158 19 201 1z m450 0 c61 -25 61 -97 1 -122 -44 -18 -156 -18 -199 0 -59 25 -61 96 -3 121 42 18 158 19 201 1z m878 -16 c171 -53 311 -204 353 -382 60 -256 -98 -530 -353 -608 -87 -27 -217 -27 -304 0 -171 53 -311 204 -353 382 -60 254 91 519 345 605 87 30 221 31 312 3z m-1328 -284 c61 -25 61 -97 1 -122 -44 -18 -156 -18 -199 0 -59 25 -61 96 -3 121 42 18 158 19 201 1z m450 0 c61 -25 61 -97 1 -122 -44 -18 -156 -18 -199 0 -59 25 -61 96 -3 121 42 18 158 19 201 1z m-450 -300 c61 -25 61 -97 1 -122 -44 -18 -156 -18 -199 0 -59 25 -61 96 -3 121 42 18 158 19 201 1z m450 0 c61 -25 61 -97 1 -122 -44 -18 -156 -18 -199 0 -59 25 -61 96 -3 121 42 18 158 19 201 1z m-450 -300 c61 -25 61 -97 1 -122 -44 -18 -156 -18 -199 0 -59 25 -61 96 -3 121 42 18 158 19 201 1z m450 0 c61 -25 61 -97 1 -122 -44 -18 -156 -18 -199 0 -59 25 -61 96 -3 121 42 18 158 19 201 1z"/>
              <path d="M1587 1256 c-110 -46 -182 -123 -217 -235 -62 -195 37 -400 225 -470 76 -28 194 -29 269 -1 111 42 190 125 226 239 62 196 -36 399 -226 471 -79 29 -200 27 -277 -4z m193 -156 c15 -15 20 -33 20 -70 l0 -50 35 0 c49 0 102 -24 110 -50 20 -64 -30 -100 -138 -100 -74 0 -123 14 -137 40 -6 10 -10 62 -10 114 0 109 14 136 70 136 17 0 39 -9 50 -20z"/>
              </g>
            </svg>
            <div style={{fontSize:'20px',fontWeight:'bold'}}>Events</div>                                                                     
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
            <div style={{fontSize:'20px',fontWeight:'bold'}}>Reporting CMR</div>
          </div>

          {/* <div className="divider lg:divider-horizontal h-32" style={{border:'1px solid grey'}}></div>  */}

        </div>
      </ContentWithPaddingXl>
      <DecoratorBlob />
    </Container>
  );
};
