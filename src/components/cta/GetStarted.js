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
        <Row style={{textAlign:'center',maxWidth:'none',justifyContent:'space-evenly'}}> 
          <TextContainer className="mb-5" style={{marginRight:'20px'}}>
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
            <div className="p-5 rounded-lg" style={{backgroundColor:'white',border:'3px solid rgb(12, 63, 116)'}}>
              <Text style={{color:'rgb(12, 63, 116)',marginBottom:'5px'}}>{text}</Text>
              {/* <p style={{color:'grey',textAlign:'left'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
            </div>
            
           
          </TextContainer>
          <TextContainer className="mb-5" style={{marginRight:'20px'}}>
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
              {/* <p style={{color:'grey',textAlign:'left'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
            </div>
          </TextContainer>
          <TextContainer className="mb-5" style={{}}>
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
              {/* <p style={{color:'grey',textAlign:'left'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
            </div>
            
          </TextContainer>
          
          {/* <LinksContainer>
            <PrimaryLink href={primaryLinkUrl}>{primaryLinkText}{text1}</PrimaryLink>
            <SecondaryLink href={secondaryLinkUrl}>{secondaryLinkText}</SecondaryLink>
          </LinksContainer> */}
        </Row>
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
