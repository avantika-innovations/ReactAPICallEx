import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";

import Header from "../headers/light.js";

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
      <Container>
        <TwoColumn  >
            
          <LeftColumn>
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
