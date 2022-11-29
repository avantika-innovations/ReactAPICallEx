/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import TeamIllustrationSrc from "images/team-illustration-2.svg";
import {ReactComponent as SvgDotPattern } from "images/dot-pattern.svg"

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)(props => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.img(props => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);

const DecoratorBlob = styled(SvgDotPattern)(props => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`,
])

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const PrimaryButton = styled(PrimaryButtonBase)(props => [
  tw`mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0`,
  props.buttonRounded && tw`rounded-full`
]);


export default ({
  subheading = "Our Expertise",
  heading = (
    <>
      {/* Designed & Developed by <span tw="text-primary-500">Professionals.</span> */}
      ZONE6 : DISTRICT 3240
    </>
  ),
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  primaryButtonText = "Learn More",
  primaryButtonUrl = "https://timerse.com",
  imageSrc = TeamIllustrationSrc,
  buttonRounded = true,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  imageCss = null,
  imageDecoratorBlob = false,
  imageDecoratorBlobCss = null,
  textOnLeft = true
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <>
    <Container>
      {/* <TwoColumn>
        <ImageColumn>
          <Image css={imageCss} src={imageSrc} imageBorder={imageBorder} imageShadow={imageShadow} imageRounded={imageRounded}/>
          {imageDecoratorBlob && <DecoratorBlob css={imageDecoratorBlobCss} />}
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Subheading>{subheading}</Subheading>
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            <PrimaryButton buttonRounded={buttonRounded} as="a" href={primaryButtonUrl}>
              {primaryButtonText}
            </PrimaryButton>
          </TextContent>
        </TextColumn>
      </TwoColumn> */}
        <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel" style={{height:'20%'}}>
          <div className="carousel-inner relative w-full overflow-hidden">
            <div className="carousel-item active relative float-left w-full">
              {/* <video width="100%" controls  style={{opacity:'0.3'}}>
                <source src="https://www.rotary.org/sites/all/themes/rotary_rotaryorg/media/home/AmbientWebDemo_06.webm" type="video/mp4"></source>
              </video> */}
              <iframe width="100%" height="615"
                src="https://www.rotary.org/sites/all/themes/rotary_rotaryorg/media/home/AmbientWebDemo_06.webm" style={{opacity:'0.3',margin:0}}>
              </iframe>
              <div className="carousel-caption hidden md:block absolute text-center" style={{color:'black',position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',fontWeight:'bold'}}>
                <h1 className="" style={{fontSize:'45px'}}>ZONE6 : DISTRICT 3240</h1>
                <p>Rotary International District 3240 lies in the North Eastern part of the Indian subcontinent between Nepal, China, Bhutan, Myanmar and Bangladesh.
                    This district is one of the largest Rotary districts in the world covering over 2,95, 607 sq. kms of land.
                    Closeted within these perimeters is a land of snow clad mountains, verdant hills, expansive plains, mountain streams, majestic rivers, bustling towns, idyllic hamlets and miles and miles of land carpeted by lush green tea bushes.
                    R.I. District 3240 is a relatively new district formed in the Year 1990 and encompasses nine states of India – Arunachal Pradesh, Assam, Manipur, Meghalaya, Mizoram, Nagaland, Sikkim, Tripura and eight revenue districts of West Bengal.
                    (Barddhaman, Birbhum, Malda, Dakshin Dinajpur, Uttar Dinajpur, Darjeeling, Jalpaiguri & Cooch Bihar). There are 97 clubs in the district with 3342 Rotarians.
                </p>
              </div>

            </div>
            
          </div>
        </div>

    </Container>
    </>
  );
};
