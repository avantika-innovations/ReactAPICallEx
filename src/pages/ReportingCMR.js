import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import tw from "twin.macro";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithBackground.js";
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditorComponent from 'react-froala-wysiwyg';

const Container = tw(ContainerBase)``;


const ReportingCMR = () =>{

  const [show,setShow] = useState(false);
  const [ newText,setNewText ] = useState([]);

  const addtext = () => {
    setNewText ((t) => [...t,"new text"])
  }
   return(
    <AnimationRevealPage> 
    <Container>
      {/* <Content> */}
        <Header/>

        <div style={{fontSize:'25px',textAlign:'center'}}>CLUB MONTHLY REPORT</div>
        <ul className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tab" role="tablist" style={{justifyContent:'start',width:'80%',margin:'0 auto'}}>
          <li className="nav-item" role="presentation">
            <a href="#tabs-home" style={{fontSize:'20px'}} className="nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 active" id="tabs-home-tab" data-bs-toggle="pill" data-bs-target="#tabs-home" role="tab" aria-controls="tabs-home"aria-selected="true">
              Form 1
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a href="#tabs-profile" style={{fontSize:'20px'}} className="nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent" id="tabs-profile-tab" data-bs-toggle="pill" data-bs-target="#tabs-profile" role="tab" aria-controls="tabs-profile" aria-selected="false">
              Form 2
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a href="#tabs-messages" style={{fontSize:'20px'}} className="nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent" id="tabs-messages-tab" data-bs-toggle="pill" data-bs-target="#tabs-messages" role="tab" aria-controls="tabs-messages" aria-selected="false">
              Form 3
            </a>
          </li>
  
        </ul>
        <div className="tab-content" id="tabs-tabContent">
          <div className="tab-pane fade show active" id="tabs-home" role="tabpanel" aria-labelledby="tabs-home-tab">
            <div className="shadow-lg" style={{width:'80%',margin:'0 auto'}}>
            <div className="mt-7 rounded-lg mb-7"  style={{width:'100%',border:'2px solid grey'}}>
          {/* <div className="md:grid md:grid-cols-3 md:gap-6"  style={{width:'100%'}}> */}
            {/* <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Profile</h3>
                <p className="mt-1 text-sm text-gray-600">
                  This information will be displayed publicly so be careful what you share.
                </p>
              </div>
            </div> */}
              <div className="mt-5 md:col-span-2 md:mt-0">
                <div>
                {/* <form action="#" method="POST"> */}
                  <div className=" sm:rounded-md">
                  {/* <div className="shadow sm:overflow-hidden sm:rounded-md"> */}
                    <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                      <div className="grid grid-cols-3 gap-6" style={{alignItems:'end'}}>
                        <div className="">
                          <label htmlFor="month" className="block text-sm font-medium text-gray-700">
                            For the Month of:
                          </label>
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            
                          />
                        </div>
                        <div className="">
                          <label htmlFor="e-mail" className="block text-sm font-medium text-gray-700">
                            Name Of The Club:
                          </label>
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            
                          />
                          {/* <select
                            id="e-mail"
                            name="e-mail"
                            autoComplete="e-mail-name"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          >
                            <option>test@demo.com</option>
                            <option>practice@demo.com</option>
                            <option>testing@demo.com</option>
                          </select> */}
                        </div>
                        <div className="">
                          <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                            Zone:
                          </label>
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            
                          />
                        </div>
                        
                        <div className="">
                          <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                          Total members at the start of the reporting month:
                          </label>
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            
                          />
                        </div>
                        <div className="">
                          <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                            Total members at the end of reporting month
                          </label>
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            
                          />
                        </div>
                        <div className="">
                          <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                            Hosting any district/ Zonal event:
                          </label>
                          {/* <span style={{fontSize:'15px'}}>OFF</span><label className="switch">
                          <input type="checkbox" id="togBtn"/>
                          <div className="slider round"></div>
                          </label>
                          <span style={{fontSize:'15px'}}>ON</span>
                        </div> */}
                        <label className="switch">
                          <input type="checkbox" id="togBtn"/>
                          <div className="slider round">
                            
                            <div className="on" onClick={() => setShow(false)} >ON </div>

                            <div className="off" onClick={() => setShow(true)}>OFF</div>
                            
                          </div>
                        </label>
                        {show && <div>
                          <label>Description</label>
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            
                          />
                        </div>}
                        
                      
                      </div>
                        <div className="">
                          <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                            Number of Members Attending District Event (Please name the Events):
                          </label>
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            
                          />
                          <button onClick={addtext}>Add New Text</button>
                          <p>{newText}</p>
                        </div>
                        <div className="">
                          <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                            Sponsoring New Rotary Club / RCC:
                          </label>
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            
                          />
                        </div>
                        <div className="">
                          <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                            Contribution to District 3240 Foundation during the reporting month:
                          </label>
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            
                          />
                        </div>
                        <div className="">
                          <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                            Did your club have any joint meeting with any other Rotary or Rotaract Club?
                          </label>
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            
                          />
                        </div>
                        <div className="">
                          <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                            No. of lady members inducted in the reporting month:
                          </label>
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            
                          />
                        </div>
                        <div className="">
                          <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                            No. of below 40 years member inducted in the reporting month:
                          </label>
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            
                          />
                        </div>
                        <div className="">
                          <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                          No. of dual members inducted in the reporting month (Rotary/Rotaract):
                          </label>
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            
                          />
                        </div>
                        <div className="">
                          <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                          Additional Club Service Activities :
                          </label>
                          <textarea
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            
                          />
                        </div>
                      </div>
                      

                      {/* <div>
                        <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                          About
                        </label>
                        <div className="mt-1">
                          <textarea
                            id="about"
                            name="about"
                            rows={3}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="you@example.com"
                            defaultValue={''}
                          />
                        </div>
                        <p className="mt-2 text-sm text-gray-500">
                          Brief description for your profile. URLs are hyperlinked.
                        </p>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">Photo</label>
                        <div className="mt-1 flex items-center">
                          <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                            <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                          </span>
                          <button
                            type="button"
                            className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            Change
                          </button>
                        </div>
                      </div> */}

                      {/* <div>
                        <label className="block text-sm font-medium text-gray-700">Bulletein Upload (Please wait a minute, so that your bulletein uploads successfully)</label>
                        <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                          <div className="space-y-1 text-center">
                            <svg
                              className="mx-auto h-12 w-12 text-gray-400"
                              stroke="currentColor"
                              fill="none"
                              viewBox="0 0 48 48"
                              aria-hidden="true"
                            >
                              <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <div className="flex text-sm text-gray-600">
                              <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                              >
                                <span>Upload a file</span>
                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                              </label>
                              <p className="pl-1">or drag and drop</p>
                            </div>
                            
                            <p className="text-xs text-gray-500">Maximum upload size: 10MB</p>
                          </div>
                        </div>
                      </div> */}
                    </div>
                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                      <button
                      style={{background:'blue'}}
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="tabs-profile" role="tabpanel" aria-labelledby="tabs-profile-tab">
          <div className="shadow-lg" style={{width:'80%',margin:'0 auto'}}>
          <div className="mt-7 rounded-lg mb-7"  style={{width:'100%',border:'2px solid grey'}}>
          
            <div className="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST">
                <div className=" sm:rounded-md">
                
                  <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-3 gap-6" style={{alignItems:'end'}}>
                      
                      
                      <div className="">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                          Vocational Excellence Awards (Please mention the awardee name & the field of excellence):
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          
                        />
                      </div>
                      
                      <div className="">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                          Promoting 4-Way Test (Please mention how the 4-way test is promoted):
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          
                        />
                      </div>
                      <div className="">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                          Vocational Training to group of Men/ Women:
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          
                        />
                      </div>
                      <div className="">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Any ongoing Vocational project of Club:
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          
                        />
                      </div>
                      <div className="">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Any other Project on Vocational Services:
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          
                        />
                      </div>
                      <div className="">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                          Number Of Projects Uploaded
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          
                        />
                      </div>
                      
                      <div className="">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                          Contribution to TRF (Specify Major Donor/ 100%PHF Club/ EREY Club / Any other contribution.)<br></br>
                          (Please mention the name of donor and amount in US Dollars):
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          
                        />
                      </div>
                      <div className="">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                          Sponsoring a Peace Scholar or Team Member for Medical Mission / VTT Exchange Program:
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          
                        />
                      </div>
                      <div className="">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                          Contribution to Polio Fund (Please mention the name of donor and amount in US Dollars) :
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          
                        />
                      </div>
                      <div className="">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                          Members attending RI Convention 2022:
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          
                        />
                      </div>
                      <div className="">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Youth Exchange (Specify: New Generation /Youth/Family/Others:
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          
                        />
                      </div>
                      <div className="">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                          Any other project on International Service:
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          
                        />
                      </div>
                      <div className="">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                          Sponsored New Rotaract / Interact Club during the reporting month:
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          
                        />
                      </div>
                      <div className="">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Sponsoring young people for RYLA:
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          
                        />
                      </div>
                      <div className="">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Hosting/co-hosting a RYLA:
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          
                        />
                      </div>
                      <div className="">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Hosting youth exchange/friendship exchange member during the reporting month.:
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          
                        />
                      </div>                                                          
                      <div className="">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Involvement in Rotaract / Interact Clubs sponsored by your Club: Nature of involvement (In brief) :
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          
                        />
                      </div>                                                        
                      <div className="">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                           Sponsoring a Peace Scholar or Team Member for Medical Mission / VTT Exchange Program:
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          
                        />
                      </div>
                      <div className="">
                        <label htmlFor="AG" className="block text-sm font-medium text-gray-700">
                        Send Report To AG (Click on the DropDown to select AG):
                        </label>
                        <select
                          id="AG"
                          name="AG"
                          autoComplete="AG"
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        >
                          <option>Goutam Choudhury (Zone 1)</option>
                          <option>Goutam Choudhury (Zone 2)</option>
                          <option>Goutam Choudhury (Zone 3)</option>
                        </select>
                      </div>
                      
                  </div>
                  
                </div>
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-2 gap-6" style={{alignItems:'end'}}>
                    <div className="">
                      <label htmlFor="AG" className="block text-sm font-medium text-gray-700">
                      Have your Club done any project under Women Empowerment? If Yes, Please give the project name as uploaded in the website.
                      </label>
                      <FroalaEditorComponent/>
                    </div>
                    <div className="">
                      <label htmlFor="AG" className="block text-sm font-medium text-gray-700">
                      Have your Club done any project under Literacy? If Yes, Please give the project name as uploaded in the website.
                      </label>
                      <FroalaEditorComponent/>
                    </div>
                    <div className="">
                      <label htmlFor="AG" className="block text-sm font-medium text-gray-700">
                      Have your Club done any project under Water, Sanitation and Hygiene? If Yes, Please give the project name as uploaded in the website.
                      </label>
                      <FroalaEditorComponent/>
                    </div>
                    <div className="">
                      <label htmlFor="AG" className="block text-sm font-medium text-gray-700">
                      Have your Club done any project under Environment? If Yes, Please give the project name as uploaded in the website
                      </label>
                      <FroalaEditorComponent/>
                    </div>
                    <div className="">
                      <label htmlFor="AG" className="block text-sm font-medium text-gray-700">
                      
                      List the names of projects uploaded. (Mention Project Name Only):
                      </label>
                      <FroalaEditorComponent/>
                    </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button
                    style={{background:'blue'}}
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
            </div>
          </div>
          <div className="tab-pane fade" id="tabs-messages" role="tabpanel" aria-labelledby="tabs-profile-tab">
            Tab 3 content
            
            
          </div>
          <div className="tab-pane fade" id="tabs-contact" role="tabpanel" aria-labelledby="tabs-contact-tab">
            Tab 4 content
          </div>
        </div>
        <Footer />
     
    </Container>
  </AnimationRevealPage>
  )
}

export default ReportingCMR;