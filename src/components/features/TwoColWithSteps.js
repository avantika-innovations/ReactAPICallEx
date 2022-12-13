/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import TeamIllustrationSrc from "images/team-illustration-2.svg";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative h-2`;
const TextColumn = styled(Column)(props => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.img(props => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`
]);

const DecoratorBlob = styled(SvgDotPattern)(() => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`
]);

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;

const Steps = tw.ul`mt-12`;
const Step = tw.li`mt-8 flex flex-col md:flex-row items-center md:items-start`;
const StepNumber = tw.div`font-semibold text-4xl leading-none text-gray-400`;
const StepText = tw.div`mt-3 md:mt-0 md:ml-6`;
const StepHeading = tw.h6`leading-none text-xl font-semibold`;
const StepDescription = tw.p`mt-3 max-w-xs leading-loose text-sm text-gray-600 font-medium`;

export default ({
  // subheading = "Our Expertise",
  heading = (
    <>
      {/* Designed & Developed by <span tw="text-primary-500">Professionals.</span> */}
      RI THEME VIDEO 2022-23
    </>
  ),
  imageSrc = TeamIllustrationSrc,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  imageDecoratorBlob = false,
  textOnLeft = true,
  steps = null,
  decoratorBlobCss = null,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  const defaultSteps = [
    {
      heading: "Register",
      description: "Create an account with us using Google or Facebook."
    },
    {
      heading: "Download",
      description: "Browse and Download the template that you like from the marketplace."
    },
    {
      heading: "Run",
      description: "Follow the instructions to setup and customize the template to your needs."
    }
  ];

  if (!steps) steps = defaultSteps;

  return (
    <>
    <Container>
      <TwoColumn>
        <ImageColumn style={{height:'auto'}}>
          {/* <iframe width="100%" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1">
          </iframe> */}
           {/* <div id="carouselExampleCrossfade" className="carousel slide carousel-fade relative mb-3" data-bs-ride="carousel">
            <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
              <button type="button" data-bs-target="#carouselExampleCrossfade" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCrossfade" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCrossfade" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner relative w-full">
              <div className="carousel-item active float-left w-full">
                <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"  width="100%" height="345" className="block w-full" alt="Wild Landscape"/>
                 
                
              </div>
              <div className="carousel-item float-left w-full">
                <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"  width="100%" height="345" className="block w-full" alt="Camera"/>
              </div>
              <div className="carousel-item float-left w-full">
                <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"  width="100%" height="345" className="block w-full" alt="Exotic Fruits"/>
              </div>
            </div>
            
          </div>
          <div style={{display:'flex',width:'100%',justifyContent:'center',padding:'25px'}}>
            <button
            className="rounded-full carousel-control-prev bottom-0 flex items-center justify-center p-0 text-center border-0  left-0"
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide="prev" 
            style={{top:'auto',backgroundColor:'rgb(12, 63, 116)',marginLeft:'20px',padding:'20px',opacity:'1'}}
            >
            <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="rounded-full carousel-control-next bottom-0 flex items-center justify-center p-0 text-center border-0  right-0"
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide="next" 
            style={{top:'auto',backgroundColor:'rgb(12, 63, 116)',marginLeft:'20px',padding:'20px',opacity:'1'}}
            >
            <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div> */}



        <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
            
            <div className="carousel-inner relative w-full overflow-hidden">
              <div className="carousel-item active relative float-left w-full ">
                <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"  width="100%" height="345" className="block w-full" alt="..."/>
                <div className="carousel-caption hidden md:block absolute text-center">
                  <h5 className="text-xl">Title 1</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div className="carousel-item relative float-left w-full">
                <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"  width="100%" height="345" className="block w-full" alt="..."/>
                <div className="carousel-caption hidden md:block absolute text-center">
                  <h5 className="text-xl">Title 2</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div className="carousel-item relative float-left w-full">
                <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"  width="100%" height="345" className="block w-full" alt="..."/>
                <div className="carousel-caption hidden md:block absolute text-center">
                  <h5 className="text-xl">Title 3</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </div>
            
            <div style={{display:'flex',justifyContent:'space-between',padding:'25px'}}>
              <div style={{display:'flex'}}>
                <button
                  className="rounded carousel-control-prev bottom-0 px-2 py-1 text-center"
                  // className="rounded-full carousel-control-prev bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                  style={{backgroundColor:'rgb(214, 158, 46)',opacity:'1',width:'auto',height:'fit-content'}}
                >
                  <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                  <div className="carousel-indicators right-0 bottom-0 p-0 " style={{opacity:'1',display:'flex'}}>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" style={{opacity:'1',textAlign:'right',height:'auto'}}>1</button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" style={{opacity:'1',height:'auto',textAlign:'right'}}>2</button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" style={{opacity:'1',height:'auto',textAlign:'right'}}>3</button>
                  </div>
                <button
                  className="rounded carousel-control-next bottom-0 flex items-center justify-center px-2 py-1 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                  style={{backgroundColor:'rgb(214, 158, 46)',opacity:'1',width:'auto'}}
                >
                  <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div style={{margin:'auto 0',fontWeight:'bold'}}>
                <a href="#" style={{}}>Read More</a>
              </div>
            </div>
            
          </div>
          
        </ImageColumn>
        
        
        
        <div className="divider" style={{left: '50%',top: '0',margin: '0 30px',borderLeft: '6px solid grey',borderImage: 'grey',height:'500px'}}></div>
        <TextColumn textOnLeft={textOnLeft} style={{marginLeft:0}}>
          <TextContent style={{marginLeft:0}}>
            {/* <Subheading>{subheading}</Subheading> */}
            <Heading>{heading}</Heading>
            <Steps>
              
            District’s Channel For All Recorded Videos Of Events And Other Releases – Subscribe For Notifications.
              <img src="https://www.rid3240.org/new/wp-content/uploads/2020/07/27a445684cbc228f33a4786560ab8998-removebg-preview.png" width="345"/>
            Also Press the Bell “🔔” Icon To Never Miss An Update.
            </Steps>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
   
    </>
  );
};
