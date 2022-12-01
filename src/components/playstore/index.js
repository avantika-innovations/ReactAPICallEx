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
const Text = tw.h5`text-gray-100 text-2xl sm:text-3xl font-bold`;

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
    <Container css={pushDownFooter && tw`mb-20 lg:mb-24`} style={{marginBottom:0}}>
      <ContentWithPaddingXl style={{maxWidth:'none',padding:0}}>
        <PrimaryBackgroundContainer style={{color:'black'}}>
            <div className="" style={{display:'flex',maxWidth:'750px',marginRight:'auto',marginLeft:'auto'}}>
                <Text style={{textAlign:'center',fontWeight:'bold',marginBottom:'20px',fontSize:'45px',color:'black'}}>DOWNLOAD OUR OFFICIAL DISTRICT APP</Text>   
                <img width="226" height="131" src="https://www.rid3240.org/new/wp-content/uploads/2020/07/rid3240.jpg" class="attachment-large size-large" alt="" loading="lazy"/>
            </div>
            <Row style={{textAlign:'center',maxWidth:'none',justifyContent:'center'}}> 
                <TextContainer>     
                    <img style={{float:'right'}} width="246" height="150" src="https://www.rid3240.org/new/wp-content/uploads/2020/06/en_badge_web_generic.png" class="attachment-large size-large" alt="" loading="lazy"/>
                </TextContainer>
                <TextContainer>
                    <img width="224" height="154" src="https://www.rid3240.org/new/wp-content/uploads/2020/07/0_1-msaTEYYCzIXAYC_-1024x354.png" class="attachment-large size-large" alt="" loading="lazy"/>
                </TextContainer>
            </Row>
        </PrimaryBackgroundContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};
