/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styled from "styled-components"; //eslint-disable-line
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-9.svg";
import { ContentWithPaddingXl, Container } from "components/misc/Layouts";

const PrimaryBackgroundContainer = tw.div`py-20 lg:py-24 rounded-lg relative`
const Row = tw.div`px-8 max-w-screen-lg mx-auto flex items-center relative z-10 flex-col lg:flex-row text-center lg:text-left`;

const ColumnContainer = tw.div`lg:w-1/2 max-w-lg`
const TextContainer = tw(ColumnContainer)``;
const Text = tw.h6`text-gray-100 text-base sm:text-lg font-bold`;
// const Text = tw.h5`text-gray-100 text-2xl sm:text-3xl font-bold`;

const LinksContainer = tw(ColumnContainer)`flex justify-center lg:justify-end mt-6 lg:mt-0 flex-col sm:flex-row`;

const Link = tw.a`w-full sm:w-auto text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 mt-4 first:mt-0 sm:mt-0 sm:mr-8 sm:last:mr-0 rounded-full font-bold border border-transparent tracking-wide transition duration-300 focus:outline-none focus:shadow-outline`;
const PrimaryLink = tw(Link)`bg-red-500 text-gray-100 shadow-lg hocus:bg-red-600 hocus:text-gray-200`;

const SecondaryLink = tw(Link)`text-gray-100 border-gray-500 hover:bg-gray-100 hover:text-primary-500 hover:border-primary-500`;

const DecoratorBlobContainer = tw.div`absolute inset-0 overflow-hidden rounded-lg`
const DecoratorBlob1 = tw(SvgDecoratorBlob1)`absolute bottom-0 left-0 w-80 h-80 transform -translate-x-20 translate-y-32 text-primary-700 opacity-50`
const DecoratorBlob2 = tw(SvgDecoratorBlob1)`absolute top-0 right-0 w-80 h-80 transform  translate-x-20 -translate-y-64 text-primary-700 opacity-50`
export default ({
  text = "MEMBERS",
  primaryLinkText = "YEARS OF SERVICE",
  text1 ="YEARS OF SERVICE",
  text2 ="CLUBS",
  text3 ="VALUE OF DONATION",
  text4 ="HOURS IN SERVICE",
  text5 ="PROJECT COMPLETED",
  primaryLinkUrl = "http://timerse.com",
  secondaryLinkText = "CLUBS",
  secondaryLinkUrl = "http://google.com",
  pushDownFooter = true
}) => {
  return (
    <>
    
    <Container css={pushDownFooter && tw`mb-20 lg:mb-24`} style={{marginBottom:0,backgroundImage:"url('https://i.pinimg.com/originals/22/e2/2a/22e22a1e45bef25f8079823ca773a262.jpg')"}}>
    {/* <Container css={pushDownFooter && tw`mb-20 lg:mb-24`} style={{marginBottom:0,backgroundImage:"url('https://i.pinimg.com/originals/22/e2/2a/22e22a1e45bef25f8079823ca773a262.jpg')"}}> */}
      <ContentWithPaddingXl style={{maxWidth:'none',padding:0,backgroundImage:"url(https://www.rotary.org/sites/default/files/styles/w_700/public/home-concrete-background.jpg?itok=qFdwqRT7)"}}>
      {/* <ContentWithPaddingXl style={{maxWidth:'none',padding:0,backgroundImage:"url('https://i.pinimg.com/originals/22/e2/2a/22e22a1e45bef25f8079823ca773a262.jpg')"}}> */}
      <PrimaryBackgroundContainer style={{color:'white'}}>
        {/* <h2 style={{textAlign:'center',fontWeight:'bold',marginBottom:'20px'}}>OUR MILESTONES</h2> */}
        {/* <Text style={{textAlign:'center',fontWeight:'bold',marginBottom:'20px',fontSize:'25px',color:'chartreuse'}}>OUR MILESTONES</Text> */}
        <Row style={{textAlign:'center',maxWidth:'none',justifyContent:'space-evenly',flexWrap:'wrap'}}> 
          <TextContainer className="mb-7 col-4 col-md-6" style={{marginRight:'20px'}}>
            <div className="mb-3" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
              <Text  style={{color:'rgb(12, 63, 116)',fontSize:'50px',marginRight:'15px'}}>3,640</Text>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="50.000000pt" height="50.000000pt" viewBox="0 0 256.000000 256.000000" preserveAspectRatio="xMidYMid meet">

              <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="rgb(12, 63, 116)" stroke="none">
              <path d="M1200 2091 c-94 -29 -187 -116 -215 -202 -47 -140 7 -300 125 -374 100 -63 212 -67 320 -13 196 97 230 371 64 516 -78 69 -204 100 -294 73z"/>
              <path d="M390 1851 c-138 -45 -208 -177 -168 -315 16 -55 101 -140 154 -155 100 -28 192 -3 257 69 24 26 49 66 55 88 35 117 -16 239 -122 294 -43 22 -136 32 -176 19z"/>
              <path d="M2040 1851 c-138 -45 -208 -177 -168 -315 16 -55 101 -140 154 -155 100 -28 192 -3 257 69 24 26 49 66 55 88 35 117 -16 239 -122 294 -43 22 -136 32 -176 19z"/>
              <path d="M888 1370 c-61 -53 -134 -163 -167 -253 -26 -71 -26 -74 -26 -362 l0 -290 590 0 590 0 0 280 c0 261 -2 285 -22 350 -33 105 -94 198 -186 284 l-36 34 -53 -49 c-103 -96 -189 -129 -322 -122 -101 5 -190 46 -262 119 -26 27 -51 49 -54 49 -3 0 -26 -18 -52 -40z"/>
              <path d="M132 1232 c-103 -105 -132 -199 -132 -419 l0 -153 289 0 289 0 4 193 c5 189 12 231 55 343 3 9 -15 5 -53 -13 -115 -54 -254 -30 -340 58 -21 21 -44 39 -52 39 -7 0 -34 -22 -60 -48z"/>
              <path d="M2316 1241 c-82 -84 -224 -111 -330 -63 -27 12 -50 21 -52 20 -1 -2 6 -28 16 -59 29 -84 43 -228 37 -361 l-6 -118 289 0 290 0 0 153 c0 169 -12 237 -58 321 -30 55 -113 146 -134 146 -8 0 -31 -18 -52 -39z"/>
              </g>
              </svg>
              
              
            </div>
            <div className="p-4 rounded-lg col-4" style={{backgroundColor:'white',border:'3px solid rgb(12, 63, 116)'}}>
              <Text style={{color:'rgb(12, 63, 116)'}}>{text}</Text>
              {/* <p style={{color:'grey',textAlign:'left'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
            </div>
            
           
          </TextContainer>
          <TextContainer className="mb-7 col-4 col-md-6" style={{marginRight:'20px'}}>
            <div className="mb-3" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
              <Text  style={{color:'rgb(214, 158, 46)',fontSize:'50px',marginRight:'15px'}}>31</Text>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="50.000000pt" height="50.000000pt" viewBox="0 0 256.000000 256.000000" preserveAspectRatio="xMidYMid meet">

              <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="rgb(214, 158, 46)" stroke="none">
              <path d="M1463 2467 c-12 -6 -46 -29 -76 -50 -49 -35 -63 -39 -142 -46 -78 -8 -90 -12 -117 -38 -20 -20 -35 -51 -47 -99 -23 -89 -32 -105 -81 -144 -80 -63 -87 -114 -35 -229 33 -75 34 -78 24 -149 -15 -106 1 -134 106 -187 78 -39 87 -48 159 -150 10 -15 34 -34 54 -42 32 -13 42 -13 122 8 l87 23 74 -22 c41 -12 80 -22 87 -22 38 0 83 36 123 97 40 60 49 69 126 105 108 52 118 69 109 188 -7 84 -6 87 28 160 53 110 50 126 -44 225 -49 52 -59 69 -74 130 -29 117 -54 139 -171 147 -73 5 -98 15 -179 73 -51 37 -94 44 -133 22z m193 -198 c181 -68 288 -272 240 -459 -31 -119 -100 -205 -211 -263 -57 -30 -66 -32 -170 -32 -99 0 -116 3 -168 27 -73 35 -155 116 -193 193 -26 55 -29 69 -29 165 0 93 3 112 27 162 90 192 306 281 504 207z"/>
              <path d="M1433 2205 c-137 -38 -222 -142 -231 -281 -6 -89 15 -155 67 -222 55 -69 126 -104 222 -110 100 -6 162 14 228 74 137 123 144 329 15 458 -78 77 -199 110 -301 81z m282 -165 c11 -12 15 -28 12 -42 -8 -30 -239 -258 -261 -258 -10 0 -51 32 -92 72 -55 53 -74 78 -74 98 0 65 57 67 120 5 l46 -45 94 95 c99 100 122 111 155 75z"/>
              <path d="M1057 1298 c-32 -68 -57 -128 -57 -134 0 -8 21 -7 73 2 107 19 101 22 148 -61 24 -41 46 -75 50 -75 3 0 25 42 49 93 57 123 55 117 34 117 -72 0 -140 46 -194 130 -18 28 -35 50 -39 50 -4 0 -33 -55 -64 -122z"/>
              <path d="M1861 1361 c-50 -73 -85 -99 -154 -113 l-54 -12 44 -95 c24 -53 48 -100 53 -105 5 -4 28 25 52 67 24 42 50 76 58 77 8 0 48 -6 88 -14 40 -7 74 -10 77 -6 5 8 -110 260 -119 260 -3 0 -23 -27 -45 -59z"/>
              <path d="M910 991 c-54 -17 -360 -190 -360 -205 0 -7 215 -393 225 -404 2 -2 13 1 24 7 16 9 75 -3 303 -64 313 -83 355 -88 433 -51 28 13 214 125 415 248 301 186 368 231 382 259 48 92 -8 179 -114 179 -62 -1 -127 -31 -371 -174 -120 -70 -226 -130 -235 -133 -9 -4 -36 -24 -59 -45 -36 -32 -49 -38 -89 -38 -47 0 -309 65 -331 83 -18 13 -16 42 2 57 13 11 40 7 155 -23 153 -41 185 -44 217 -22 27 19 46 76 38 114 -11 51 -51 77 -160 105 -55 14 -158 46 -228 71 -128 45 -188 54 -247 36z"/>
              <path d="M295 809 c-73 -43 -85 -53 -85 -81 0 -9 78 -156 174 -325 135 -239 180 -310 200 -317 20 -8 36 -4 78 19 90 48 108 64 108 94 0 26 -310 591 -348 634 -23 26 -51 21 -127 -24z m99 -91 c8 -14 6 -22 -10 -39 -18 -17 -25 -19 -43 -10 -20 11 -29 50 -14 65 12 12 56 2 67 -16z"/>
              </g>
              </svg>
              
            </div>
            <div className="p-4 rounded-lg" style={{backgroundColor:'white',border:'3px solid rgb(214, 158, 46)'}}>
              <Text style={{color:'rgb(214, 158, 46)'}}>{text1}</Text>
            </div>
          </TextContainer>
          <TextContainer className="mb-7 col-4 col-md-6" style={{marginRight:'20px'}}>
            <div className="mb-3" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <Text  style={{color:'rgb(173 18 95)',fontSize:'50px',marginRight:'15px'}}>107</Text>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="50.000000pt" height="50.000000pt" viewBox="0 0 256.000000 256.000000" preserveAspectRatio="xMidYMid meet">

                  <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="rgb(173 18 95)" stroke="none">
                    <path d="M492 2379 c-58 -29 -109 -92 -129 -159 -29 -101 12 -209 105 -274 35 -25 55 -31 113 -34 110 -7 197 39 246 131 24 44 24 180 1 223 -25 46 -77 94 -123 115 -57 26 -157 25 -213 -2z"/>
                    <path d="M1180 2384 c-45 -20 -96 -69 -123 -119 -16 -30 -21 -58 -21 -110 0 -52 5 -80 21 -110 27 -51 78 -100 125 -119 46 -20 148 -21 192 -2 47 19 104 73 129 120 30 57 30 165 0 221 -27 51 -78 100 -125 119 -47 20 -152 20 -198 0z"/>
                    <path d="M1854 2382 c-54 -26 -109 -84 -130 -138 -20 -53 -15 -153 9 -201 43 -83 127 -132 225 -133 78 0 139 27 188 83 98 115 74 282 -55 372 -37 26 -53 30 -119 33 -59 2 -86 -2 -118 -16z"/>
                    <path d="M381 1781 c-23 -33 -46 -105 -38 -124 3 -8 21 -17 40 -21 47 -9 147 -75 186 -124 l32 -40 47 50 c51 55 105 90 174 114 l45 15 -7 38 c-8 45 -44 117 -56 114 -5 -1 -35 -11 -66 -23 -83 -29 -204 -27 -281 4 l-57 24 -19 -27z"/>
                    <path d="M1046 1758 c-31 -61 -34 -106 -8 -114 94 -32 183 -92 225 -154 l17 -24 17 24 c42 62 136 126 226 154 23 7 22 50 -3 101 -32 68 -30 67 -95 40 -85 -35 -205 -35 -290 0 -33 14 -61 25 -62 25 0 0 -13 -23 -27 -52z"/>
                    <path d="M1738 1788 c-16 -27 -34 -71 -42 -110 -5 -24 -2 -27 40 -42 71 -24 125 -59 176 -114 l47 -50 32 40 c39 49 139 115 186 124 19 4 37 13 40 21 8 19 -15 91 -38 124 l-19 27 -62 -25 c-54 -22 -72 -25 -157 -21 -72 3 -107 10 -140 26 -25 12 -46 22 -47 22 -1 0 -8 -10 -16 -22z"/>
                    <path d="M145 1473 c-173 -98 -173 -338 0 -436 44 -24 59 -27 126 -25 64 3 83 8 125 33 30 19 60 49 79 79 27 44 30 58 30 131 0 73 -3 87 -30 131 -19 30 -49 60 -79 79 -42 25 -61 30 -125 33 -67 2 -82 -1 -126 -25z"/>
                    <path d="M844 1486 c-46 -20 -102 -74 -127 -120 -30 -57 -30 -165 0 -222 25 -47 82 -101 129 -120 48 -20 151 -17 199 5 82 37 145 136 145 226 0 90 -63 189 -145 226 -48 22 -155 25 -201 5z"/>
                    <path d="M1515 1481 c-82 -37 -145 -136 -145 -226 0 -90 63 -189 145 -226 48 -22 151 -25 199 -5 47 19 104 73 129 120 30 57 30 165 0 222 -25 47 -82 101 -129 120 -48 20 -151 17 -199 -5z"/>
                    <path d="M2181 1474 c-91 -46 -136 -129 -129 -239 5 -82 44 -147 112 -190 42 -25 61 -30 125 -33 67 -2 82 1 126 25 173 98 173 340 0 435 -70 38 -159 39 -234 2z"/>
                    <path d="M44 884 c-40 -60 -43 -91 -44 -390 0 -277 1 -291 20 -312 28 -30 63 -34 274 -30 l188 3 24 28 24 28 0 277 c0 284 -5 329 -41 389 l-20 32 -47 -22 c-69 -32 -246 -32 -315 0 l-47 22 -16 -25z"/>
                    <path d="M710 868 c-25 -43 -25 -46 -28 -343 -2 -164 0 -310 3 -323 11 -45 57 -54 276 -50 191 3 199 4 221 26 23 22 23 24 23 320 l0 297 -27 58 c-15 31 -30 57 -33 57 -3 0 -25 -10 -48 -22 -32 -17 -64 -23 -137 -26 -94 -4 -109 -1 -210 42 -12 5 -23 -6 -40 -36z"/>
                    <path d="M1382 853 l-27 -58 0 -297 c0 -296 0 -298 23 -320 22 -22 30 -23 221 -26 219 -4 265 5 276 50 3 13 5 159 3 323 -3 297 -3 300 -28 343 -17 30 -28 41 -40 36 -101 -43 -116 -46 -210 -42 -73 3 -105 9 -137 26 -23 12 -45 22 -48 22 -3 0 -18 -26 -33 -57z"/>
                    <path d="M2071 877 c-36 -60 -41 -105 -41 -389 l0 -277 24 -28 24 -28 188 -3 c211 -4 246 0 274 30 19 21 20 35 20 312 -1 299 -4 330 -44 390 l-16 25 -47 -22 c-40 -18 -66 -22 -158 -22 -92 0 -118 4 -157 22 l-47 22 -20 -32z"/>
                  </g>
                </svg>
                
              </div>
              <div className="p-4 rounded-lg" style={{backgroundColor:'white',border:'3px solid rgb(173 18 95)'}}>
              <Text style={{color:'rgb(173 18 95)'}}>{text2}</Text> 
            </div>           
          </TextContainer>
        
          <TextContainer className="mb-7 col-4 col-md-6" style={{marginRight:'20px'}}>
            <div className="mb-3" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <Text  style={{color:'#1d701d',fontSize:'50px',marginRight:'15px'}}>10</Text>
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="50.000000pt" height="50.000000pt" viewBox="0 0 256.000000 256.000000" preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="#1d701d" stroke="none">
                      <path d="M16 2544 c-14 -13 -16 -51 -16 -259 0 -289 -5 -275 106 -275 l74 0 -20 37 c-28 52 -26 81 6 95 24 11 29 10 48 -15 63 -84 110 -126 165 -151 105 -47 215 -58 311 -31 30 9 74 18 98 22 l43 6 247 -246 c206 -204 254 -247 288 -256 64 -17 132 8 164 62 24 38 26 107 6 145 -8 15 -150 162 -315 327 -247 246 -301 305 -301 327 0 25 23 48 46 48 4 0 96 -88 204 -195 l196 -195 53 10 c30 5 91 10 137 10 46 0 84 2 84 5 0 7 -410 474 -437 497 -52 46 -74 48 -639 48 -471 0 -534 -2 -548 -16z"/>
                      <path d="M1462 1913 c-10 -4 -2 -17 24 -44 31 -31 45 -39 75 -39 77 0 195 -30 279 -71 67 -33 102 -59 165 -123 128 -129 185 -267 185 -448 0 -205 -85 -376 -253 -510 l-49 -38 75 0 75 0 60 66 c202 220 243 557 100 826 -101 191 -286 328 -500 372 -74 15 -208 20 -236 9z"/>
                      <path d="M1625 1713 c4 -10 10 -44 13 -75 2 -32 8 -58 11 -58 19 0 96 -79 112 -114 21 -47 25 -106 7 -124 -16 -16 -53 -15 -65 1 -6 6 -13 30 -16 52 -7 42 -57 102 -76 91 -7 -5 -11 -51 -11 -131 l0 -123 33 -11 c50 -17 102 -65 127 -118 17 -37 21 -60 18 -109 -5 -87 -44 -148 -118 -187 -30 -15 -59 -37 -64 -47 -17 -37 -71 -36 -84 1 -4 10 -32 31 -62 46 -72 37 -112 93 -118 166 -3 40 0 56 12 66 24 20 65 6 71 -24 3 -14 7 -37 11 -51 5 -28 55 -84 73 -84 7 0 11 45 11 133 l0 133 -36 13 c-78 28 -143 115 -144 192 0 30 -5 38 -34 51 -19 9 -63 44 -100 78 l-65 62 -37 -59 c-137 -214 -106 -501 75 -682 282 -282 757 -175 901 204 31 82 38 227 16 312 -33 132 -126 263 -236 333 -54 35 -171 79 -209 80 -18 0 -22 -4 -16 -17z"/>
                      <path d="M977 1637 c-210 -275 -202 -659 19 -917 66 -77 70 -79 152 -80 l74 0 -59 44 c-105 79 -193 213 -228 347 -20 73 -23 220 -6 291 19 82 52 158 96 223 l43 63 -32 31 -33 32 -26 -34z"/>
                      <path d="M1451 1379 c-31 -9 -33 -12 -27 -42 7 -34 51 -87 73 -87 9 0 13 19 13 70 0 76 0 75 -59 59z"/>
                      <path d="M1600 1005 c0 -69 4 -125 9 -125 15 0 61 49 71 75 14 38 12 81 -5 115 -14 27 -51 60 -67 60 -5 0 -8 -56 -8 -125z"/>
                      <path d="M568 539 c-14 -8 -18 -24 -18 -77 0 -40 5 -73 12 -80 17 -17 1969 -17 1986 0 18 18 15 133 -4 152 -14 14 -117 16 -987 16 -642 -1 -978 -4 -989 -11z"/>
                      <path d="M590 157 c0 -86 4 -118 16 -135 l15 -22 933 0 c711 0 935 3 944 12 8 8 12 53 12 135 l0 123 -960 0 -960 0 0 -113z"/>
                    </g>
                  </svg>
                
              </div>
              <div className="p-4 rounded-lg" style={{backgroundColor:'white',border:'3px solid #1d701d'}}>
              <Text style={{color:'#1d701d'}}>{text3}</Text> 
            </div>           
          </TextContainer>
          <TextContainer className="mb-7 col-4 col-md-6" style={{marginRight:'20px'}}>
            <div className="mb-3" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <Text  style={{color:'rgb(26 109 149)',fontSize:'50px',marginRight:'15px'}}>75</Text>
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="50.000000pt" height="50.000000pt" viewBox="0 0 256.000000 256.000000" preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="rgb(26 109 149)" stroke="none">
                      <path d="M1330 2315 l0 -95 265 0 265 0 0 95 0 95 -265 0 -265 0 0 -95z"/>
                      <path d="M1470 2080 l0 -60 125 0 125 0 0 60 0 60 -125 0 -125 0 0 -60z"/>
                      <path d="M83 1928 c2 -7 28 -66 57 -130 l53 -118 336 0 337 0 54 56 c72 72 144 128 222 170 l63 34 -564 0 c-446 0 -562 -3 -558 -12z"/>
                      <path d="M1383 1915 c-265 -68 -483 -257 -582 -507 -50 -123 -64 -213 -58 -358 6 -145 22 -211 81 -335 198 -419 702 -600 1124 -404 543 251 670 959 249 1380 -211 211 -527 298 -814 224z m432 -202 c133 -49 225 -116 302 -217 165 -219 186 -497 56 -736 -56 -101 -180 -218 -284 -268 -242 -117 -510 -86 -720 81 -104 83 -192 224 -224 360 -21 89 -19 228 5 321 58 229 242 414 472 476 113 31 285 23 393 -17z"/>
                      <path d="M1435 1651 c-198 -57 -358 -221 -409 -417 -20 -78 -21 -212 -1 -289 80 -315 398 -505 709 -425 110 28 190 74 272 155 147 147 205 351 154 549 -29 114 -73 190 -160 276 -82 82 -163 129 -265 155 -79 20 -224 18 -300 -4z m34 -118 c6 -20 9 -37 8 -38 -154 -60 -255 -166 -293 -309 -56 -209 71 -432 285 -501 73 -24 217 -17 283 12 l47 21 20 -31 c19 -30 20 -33 3 -45 -38 -28 -147 -53 -234 -53 -190 0 -365 111 -445 281 -94 199 -56 418 98 571 49 49 180 129 210 129 4 0 13 -17 18 -37z m161 -147 c0 -165 1 -175 20 -181 10 -3 31 -20 46 -38 23 -27 26 -38 22 -89 l-4 -57 98 -98 98 -97 -27 -28 -27 -28 -101 100 c-98 98 -101 100 -133 91 -57 -17 -118 12 -148 71 -29 55 -7 130 46 162 l30 17 0 175 0 174 40 0 40 0 0 -174z"/>
                      <path d="M1555 1120 c-38 -42 17 -106 64 -74 27 20 28 69 2 84 -29 15 -46 12 -66 -10z"/>
                      <path d="M428 1330 l57 -131 89 3 90 3 12 65 c7 36 22 92 33 124 12 33 21 61 21 63 0 1 -81 3 -179 3 l-179 0 56 -130z"/>
                      <path d="M198 974 c-3 -3 20 -62 51 -132 l57 -127 212 -3 c121 -1 212 1 212 7 0 5 -7 24 -15 43 -12 31 -31 104 -50 191 l-5 27 -229 0 c-125 0 -230 -3 -233 -6z"/>
                      <path d="M463 478 c2 -7 28 -66 57 -130 l53 -118 320 0 320 0 -59 31 c-81 43 -182 119 -238 179 l-47 50 -205 0 c-161 0 -205 -3 -201 -12z"/>
                    </g>
                  </svg>
                
              </div>
              <div className="p-4 rounded-lg" style={{backgroundColor:'white',border:'3px solid rgb(26 109 149)'}}>
              <Text style={{color:'rgb(26 109 149)'}}>{text4}</Text> 
            </div>           
          </TextContainer>
          <TextContainer className="mb-7 col-4 col-md-6" style={{marginRight:'20px'}}>
            <div className="mb-3" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <Text  style={{color:'rgb(197 30 14)',fontSize:'50px',marginRight:'15px'}}>7</Text>
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="50.000000pt" height="50.000000pt" viewBox="0 0 256.000000 256.000000" preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="rgb(197 30 14)" stroke="none">
                      <path d="M898 2351 c-3 -110 -5 -121 -27 -145 -24 -25 -28 -26 -148 -26 l-123 0 0 -456 0 -456 58 48 c31 27 90 77 130 111 60 52 79 63 109 63 40 0 47 -7 173 -155 69 -81 75 -92 73 -130 -1 -42 -1 -42 44 -52 41 -10 49 -8 79 12 23 15 57 26 100 30 62 7 65 9 60 31 -10 38 12 69 102 146 124 106 142 118 176 118 40 -1 43 -4 159 -138 l97 -113 -2 613 -3 613 -527 3 -526 2 -4 -119z m72 -236 c18 -22 9 -43 -61 -138 -77 -104 -96 -113 -145 -66 -19 18 -34 43 -34 55 0 29 27 45 57 33 21 -8 29 -1 75 61 54 72 82 86 108 55z m260 -5 c19 -35 -4 -60 -53 -60 -45 0 -67 13 -67 40 0 27 22 40 67 40 32 0 45 -5 53 -20z m595 -20 l0 -35 -242 -3 c-234 -2 -242 -2 -253 18 -8 14 -8 26 0 40 11 20 19 20 253 18 l242 -3 0 -35z m-340 -170 l0 -35 -174 -3 c-178 -3 -201 2 -201 37 0 38 18 42 200 39 l175 -3 0 -35z m-515 -145 c19 -22 9 -43 -66 -143 -55 -75 -74 -92 -94 -92 -38 0 -82 50 -78 86 3 27 6 29 41 28 37 -1 41 2 90 67 53 71 81 85 107 54z m260 -5 c19 -35 -4 -60 -53 -60 -45 0 -67 13 -67 40 0 27 22 40 67 40 32 0 45 -5 53 -20z m595 -20 l0 -35 -242 -3 c-234 -2 -242 -2 -253 18 -8 14 -8 26 0 40 11 20 19 20 253 18 l242 -3 0 -35z m-345 -144 c6 -8 10 -25 8 -38 -3 -23 -4 -23 -177 -26 -178 -3 -201 2 -201 37 0 37 20 41 191 41 133 0 169 -3 179 -14z"/>
                      <path d="M730 2335 l-74 -75 77 0 77 0 0 75 c0 41 -1 75 -3 75 -1 0 -36 -34 -77 -75z"/>
                      <path d="M670 1215 c-113 -96 -211 -184 -219 -195 -17 -25 -9 -37 76 -130 56 -60 62 -64 84 -53 21 10 288 234 392 329 20 19 37 44 37 54 0 26 -120 164 -146 168 -12 1 -88 -57 -224 -173z"/>
                      <path d="M1607 1327 c-40 -35 -73 -73 -75 -85 -5 -30 381 -482 411 -482 29 0 177 124 177 148 0 22 -402 482 -421 482 -11 0 -52 -28 -92 -63z"/>
                      <path d="M1389 1111 l-65 -6 -140 -120 c-145 -125 -154 -133 -154 -152 0 -15 28 -43 44 -43 7 0 73 52 147 115 74 64 141 120 150 125 26 15 62 -17 56 -49 -5 -24 14 -50 139 -197 80 -93 148 -170 152 -171 9 -4 123 94 122 104 0 4 -76 97 -168 205 -138 162 -171 197 -192 196 -14 -1 -55 -4 -91 -7z"/>
                      <path d="M868 938 c-180 -155 -187 -163 -171 -180 12 -13 25 -17 41 -13 56 14 142 -47 142 -101 0 -17 9 -27 33 -38 41 -17 77 -60 77 -92 0 -17 7 -25 24 -30 32 -8 75 -54 85 -90 5 -19 19 -35 43 -46 58 -28 89 -97 68 -152 -9 -25 -7 -33 22 -67 26 -30 39 -38 63 -36 38 3 45 35 16 76 -26 37 -27 67 -1 81 24 13 54 0 70 -31 9 -15 19 -19 43 -17 47 4 48 41 2 95 -36 43 -44 70 -23 91 22 22 46 13 86 -33 40 -45 68 -55 90 -33 21 21 13 41 -38 101 -51 60 -59 84 -38 105 25 25 53 12 102 -48 32 -39 57 -60 71 -60 25 0 45 18 45 40 0 11 -283 354 -355 429 -12 12 -27 3 -100 -60 -124 -107 -144 -119 -188 -119 -73 0 -127 53 -127 125 0 52 20 80 116 160 46 39 84 73 84 76 0 4 -16 10 -36 13 -19 4 -41 9 -47 11 -7 2 -96 -69 -199 -157z"/>
                      <path d="M724 646 c-3 -8 -4 -25 -2 -38 2 -18 9 -23 32 -23 36 0 56 27 40 53 -14 22 -62 28 -70 8z"/>
                      <path d="M837 523 c-4 -3 -7 -19 -7 -34 0 -22 6 -30 25 -35 43 -11 73 34 43 64 -13 13 -50 16 -61 5z"/>
                      <path d="M944 386 c-15 -40 21 -80 54 -60 37 24 21 74 -25 74 -13 0 -26 -6 -29 -14z"/>
                      <path d="M1057 263 c-11 -11 -8 -48 5 -61 30 -30 75 0 64 43 -5 19 -13 25 -35 25 -15 0 -31 -3 -34 -7z"/>
                    </g>
                  </svg>
                  
              </div>
              <div className="p-4 rounded-lg" style={{backgroundColor:'white',border:'3px solid rgb(197 30 14)'}}>
              <Text style={{color:'rgb(197 30 14)'}}>{text5}</Text> 
            </div>           
          </TextContainer>
        </Row>
          
          {/* <LinksContainer>
            <PrimaryLink href={primaryLinkUrl}>{primaryLinkText}{text1}</PrimaryLink>
            <SecondaryLink href={secondaryLinkUrl}>{secondaryLinkText}</SecondaryLink>
          </LinksContainer> */}
        
        {/* <h3 style={{textAlign:'center',fontWeight:'bold',marginTop:'20px'}}>AS ON 30TH NOVEMBER 2022</h3> */}
        {/* <DecoratorBlobContainer>
          <DecoratorBlob1/>
          <DecoratorBlob2/>
        </DecoratorBlobContainer> */}
      </PrimaryBackgroundContainer>
      </ContentWithPaddingXl>
    </Container>
    {/* <section className="AdvSection mb-0" style={{fontFamily:'Comic Sans MS'}}>

    <div className="p-3" style={{backgroundImage:"url('https://thumbs.dreamstime.com/b/light-beige-old-paper-parchment-gradient-background-171067611.jpg')"}}>
      <div className="row">
        <div className="col-md-6 col-xlg-3">
          <div className="images-content">
            <div className="icon text-center m-3" style={{display:'flex',justifyContent: 'space-around'}}>
              <div className="px-1 font-weight-bold" style={{marginTop: 'auto',marginBottom: 'auto'}}>
                <h3 className="font-weight-bold" style={{color: 'darkcyan',fontFamily: 'Microsoft Sans Serif'}}>Huge profit margins</h3>
              </div>
              <img src="<?=base_url()?>assets_old/front/images/high-11.png"/>
            </div>
            <div className="text text-center m-2 p-2 mb-3" style={{background:'white',border:'2px solid darkcyan'}}>
              <p>FastinPay provides an opportunity to generate the highest profit in the industry.</p>
            </div>
          </div>
        </div>
  
        <div className="col-md-6 col-lg-3">
          <div className="images-content">
            <div className="icon text-center m-3" style={{display:'flex',justifyContent: 'space-around'}}>
              <div className="px-1 font-weight-bold" style={{marginTop: 'auto',marginBottom: 'auto'}}>
                <h3 className="font-weight-bold" style={{color: 'darkmagenta',fontFamily: 'Microsoft Sans Serif'}}>Exceptionally fast and easy</h3>
              </div>
              <img src="<?=base_url()?>assets_old/front/images/super-removebg-preview.png"/>
            </div>
            <div className="text text-center m-2 p-2" style={{background:'white',border:'2px solid darkmagenta'}}>
                <p>FastinPay provides Super Fast Service with the Highest Success Ratio</p>
            </div>
          </div>
        </div>
  
        <div className="col-md-6 col-lg-3">
          <div className="images-content">
            <div className="icon text-center m-3" style={{display:'flex',justifyContent: 'space-around'}}>
              <div className="px-1 font-weight-bold"  style={{marginTop: 'auto',marginBottom: 'auto'}}>
                <h3 className="font-weight-bold" style={{color: 'navy',fontFamily: 'Microsoft Sans Serif'}}>User-friendly interface Which Is Simple</h3>
              </div>
              <img src="<?=base_url()?>assets_old/front/images/mobile.png"/>
            </div>
            <div className="text text-center m-2 p-2" style={{background:'white',border:'2px solid navy'}}>
                <p>FastinPay is indeed a very simple and easy to use payment system with a smooth interface.</p>
            </div>
          </div>
        </div>
  
        <div className="col-md-6 col-lg-3">
          <div className="images-content">
            <div className="icon text-center m-3" style={{display:'flex',justifyContent: 'space-around'}}>
              <div className="px-1 font-weight-bold" style={{marginTop: 'auto',marginBottom: 'auto'}}>
                <h3 className="font-weight-bold" style={{color: 'saddlebrown',fontFamily: 'Microsoft Sans Serif'}}>Trusted</h3>
              </div>
              <img src="<?=base_url()?>assets_old/front/images/trust-removebg-preview.png"/>
            </div>
            <div className="text text-center m-2 p-2" style={{background:'white',border:'2px solid saddlebrown'}}>
              <p>FastinPay is a 100% trustworthy company that values mutual cooperation and transparency.</p>
            </div>
          </div>
        </div>
     
      </div>
    </div>
  </section> */}
  </>
  );
};
