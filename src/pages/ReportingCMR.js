import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import tw from "twin.macro";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithBackground.js";
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import { Link } from 'react-router-dom';

const Container = tw(ContainerBase)``;



const ReportingCMR = () =>{
  // <----------form1--------->
  const [show,setShow] = useState(false);
  const [ showText, setShowText ] = useState(false);
  const [ hide, setHide ] = useState(false);
  const [ hideText, setHideText ] = useState(false);
  const [ newText,setNewText ] = useState([]);

  // <----------form2------------>
  const [toggleOne,setToggleOne] = useState(false);
  const [ toggleTwo, setToggleTwo ] = useState(false);
  const [ toggleThird, setToggleThird ] = useState(false);
  const [ toggleFourth, setToggleFourth ] = useState(false);

  // <----------form3------------->
  const [ toggleFifth, setToggleFifth ] = useState(false);
  const [ toggleSixth, setToggleSixth] = useState(false);
  const [ addText, setAddText ] = useState([]);
  const [ toggleSeventh, setToggleSeventh] = useState(false);
  const [ toggleEighth, setToggleEighth] = useState(false);
  const [ toggleNineth, setToggleNineth] = useState(false);
  const [ toggleTenth, setToggleTenth] = useState(false);

  const[ close, setClose ] = useState(false)

  const addtext = () => {
    setNewText ((t) => [...t,
    <div>
      <div>
        <input type="text" style={{border:'2px solid rgb(209 213 219 )',width:'98%',borderRadius:'5px',padding:'5px 10px',margin:'3px 2px'}}/>
      </div>
      {/* <button >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </button> */}
    </div>
      
    
    ])
  
  }

  const addtext1 = () => {
    setAddText ((t) => [...t,<input type="text" style={{border:'2px solid rgb(209 213 219 )',width:'35%',borderRadius:'5px',padding:'5px 10px',margin:'3px 2px'}}/>])
  }

   return(
    <AnimationRevealPage> 
    <Container>
      {/* <Content> */}
        <Header/>
        <button className="rounded-full px-5 py-3 mx-5" type="button" style={{background:'rgb(12,63,116)',color:'white',float:'right'}}>
          <Link to={'/Projectupload'}>Project Upload</Link>
        </button>
        <div style={{fontSize:'25px',textAlign:'center'}}><b>CLUB MONTHLY REPORT</b></div>
        <ul className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tab" role="tablist" style={{justifyContent:'start',width:'80%',margin:'0 auto',alignItems:'center'}}>
          <li className="nav-item" role="presentation">
            
            <a href="#tabs-home" style={{fontSize:'18px'}} className="nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 active" id="tabs-home-tab" data-bs-toggle="pill" data-bs-target="#tabs-home" role="tab" aria-controls="tabs-home"aria-selected="true">
              <span style={{fontSize:'20px'}} className="px-3 py-1 rounded-full mr-3 span">
                1
              </span>
              <b>Form 1</b>
            </a>
          </li>
          <span className="h-1 w-full lg:w-1/3" style={{background:'#80808069'}}></span>
          <li className="nav-item" role="presentation">
            <a href="#tabs-profile" style={{fontSize:'18px'}} className="nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent" id="tabs-profile-tab" data-bs-toggle="pill" data-bs-target="#tabs-profile" role="tab" aria-controls="tabs-profile" aria-selected="false">
              <span style={{fontSize:'20px'}} className="px-3 py-1 rounded-full mr-3 span">
                2
              </span>
              <b>Form 2</b>
            </a>
          </li>
          <span className="h-1 w-full lg:w-1/3" style={{background:'#80808069'}}></span>
          <li className="nav-item" role="presentation">
            <a href="#tabs-messages" style={{fontSize:'18px'}} className="nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent" id="tabs-messages-tab" data-bs-toggle="pill" data-bs-target="#tabs-messages" role="tab" aria-controls="tabs-messages" aria-selected="false">
              <span style={{fontSize:'20px'}} className="px-3 py-1 rounded-full mr-3 span">
                3
              </span>
              <b>Form 3</b>
            </a>
          </li>
  
        </ul>
        <div className="tab-content" id="tabs-tabContent">
          <div className="tab-pane fade show active" id="tabs-home" role="tabpanel" aria-labelledby="tabs-home-tab">
            <div className="shadow-lg" style={{width:'80%',margin:'0 auto'}}>
              <div className="mt-7 rounded-lg mb-7"  style={{width:'100%',border:'2px solid grey'}}>
                <div className="mt-5 md:col-span-2 md:mt-0">
                  <div>
                    {/* <form action="#" method="POST"> */}
                    <div className=" sm:rounded-md">{/* <div className="shadow sm:overflow-hidden sm:rounded-md"> */}
                      <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-3 gap-6" style={{alignItems:'start'}}>
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
                        </div>
                        <div>
                          <div className="my-3">
                            <h2><b>A. Club Service</b></h2>
                          </div>
                          <div  className="grid grid-cols-3 gap-6" style={{alignItems:'start'}} >
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
                                Contribution to District 3240 Foundation during the reporting month:
                              </label>
                              <input
                                type="number"
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
                              Additional Club Service Activities :
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
                                Number of Members Attending District Event (Please name the Events):
                              </label>
                              <div className="mt-1 block w-full rounded-md border border-gray-300 bg-white focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap'}}>
                                {/* <input
                                  type="text"
                                  name="first-name"
                                  id="first-name"
                                  autoComplete="given-name"  
                                  className=" py-2 px-3 rounded-md" 
                                  style={{width:'auto'}}                  
                                /> */}
                                <div style={{width:'100%',display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>{newText}
                                </div>
                                <div style={{marginRight:'10px'}} onClick={() => setClose(true)}>
                                  <button onClick={addtext} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                    </svg>
                                  </button>
                                </div>
                                
                              </div>
                            </div>
                            <div className="">
                              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                No. of dual members inducted in the reporting month (Rotary/Rotaract):
                              </label>
                              <label className="switch">
                                <input type="checkbox" id="togBtn"/>
                                <div className="slider round">
                                  <div className="on" onClick={() => setHide(false)} >YES </div>
                                  <div className="off" onClick={() => setHide(true)}>NO</div>
                                </div>
                              </label>
                              {hide && 
                                <div>
                                  <label>Description</label>
                                  <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    
                                  />
                                </div>
                              }
                            </div>
                            <div className="">
                              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                Did your club have any joint meeting with any other Rotary or Rotaract Club?
                              </label>
                              <label className="switch">
                                <input type="checkbox" id="togBtn"/>
                                <div className="slider round">
                                  <div className="on" onClick={() => setHideText(false)} >YES </div>
                                  <div className="off" onClick={() => setHideText(true)}>NO</div>
                                </div>
                              </label>
                              {hideText && 
                                <div>
                                  <label>Description</label>
                                  <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    
                                  />
                                </div>
                              }
                            </div>
                            <div className="">
                              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                Sponsoring New Rotary Club / RCC:
                              </label>
                              <label className="switch">
                                <input type="checkbox" id="togBtn"/>
                                <div className="slider round">
                                  <div className="on" onClick={() => setShowText(false)} >YES </div>
                                  <div className="off" onClick={() => setShowText(true)}>NO</div>
                                </div>
                              </label>
                              {showText && 
                                <div>
                                  <label>Description</label>
                                  <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    
                                  />
                                </div>
                              }
                            </div>
                            <div className="">
                              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                Hosting any district/ Zonal event:
                              </label>            
                              <label className="switch">
                                <input type="checkbox" id="togBtn"/>
                                <div className="slider round">
                                  <div className="on" onClick={() => setShow(false)} >YES </div>
                                  <div className="off" onClick={() => setShow(true)}>NO</div>
                                </div>
                              </label>
                              {show && 
                                <div>
                                  <label>Description</label>
                                  <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    
                                  />
                                </div>
                              }
                            </div>                        
                          </div>                      
                        </div>                      
                      </div>
                      <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                        <button
                        style={{background:'rgb(12,63,116)'}}
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
                  <div>
                    {/* <form action="#" method="POST"> */}
                    <div className=" sm:rounded-md">{/* <div className="shadow sm:overflow-hidden sm:rounded-md"> */}
                      <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                        <div className="my-3">
                          <h2><b>B. Community Service</b></h2>
                        </div>
                        <div className="grid grid-cols-3 gap-6" style={{alignItems:'start'}}>
                          <div className="">
                            <label htmlFor="month" className="block text-sm font-medium text-gray-700">
                              Number Of Projects Uploaded :
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
                              Total Value of Projects :
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
                              Total Man-Hours Involved :
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
                              Total Beneficiaries :
                            </label>
                            <input
                              type="text"
                              name="first-name"
                              id="first-name"
                              autoComplete="given-name"
                              className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              
                            />
                          </div>
                        </div>
                        <div>
                          <div className="my-3">
                            <h2><b>C. Vocational Service</b></h2>
                          </div>
                          <div  className="grid grid-cols-3 gap-6" style={{alignItems:'start'}} >
                            <div className="">
                              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                Promoting 4-Way Test :
                              </label>            
                              <label className="switch">
                                <input type="checkbox" id="togBtn"/>
                                <div className="slider round">
                                  <div className="on" onClick={() => setToggleFourth(false)} >YES </div>
                                  <div className="off" onClick={() => setToggleFourth(true)}>NO</div>
                                </div>
                              </label>
                              {toggleFourth && 
                                <div>
                                  <label>Description</label>
                                  <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"                                  
                                  />
                                </div>
                              }
                            </div> 

                            <div className="">
                              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                              Vocational Excellence Awards :
                              </label>
                              <label className="switch">
                                <input type="checkbox" id="togBtn"/>
                                <div className="slider round">
                                  <div className="on" onClick={() => setToggleOne(false)} >YES </div>
                                  <div className="off" onClick={() => setToggleOne(true)}>NO</div>
                                </div>
                              </label>
                              {toggleOne && 
                                <div>
                                  <label>Description</label>
                                  <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    
                                  />
                                </div>
                              }
                            </div>
                            <div className="">
                              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                Vocational Training to group of Men/ Women:
                              </label>
                              <label className="switch">
                                <input type="checkbox" id="togBtn"/>
                                <div className="slider round">
                                  <div className="on" onClick={() => setToggleTwo(false)} >YES </div>
                                  <div className="off" onClick={() => setToggleTwo(true)}>NO</div>
                                </div>
                              </label>
                              {toggleTwo && 
                                <div>
                                  <label>Description</label>
                                  <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    
                                  />
                                </div>
                              }
                            </div>
                            {/* <div className="">
                              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                Any ongoing Vocational project of Club:
                              </label>
                              <label className="switch">
                                <input type="checkbox" id="togBtn"/>
                                <div className="slider round">
                                  <div className="on" onClick={() => setToggleThird(false)} >YES </div>
                                  <div className="off" onClick={() => setToggleThird(true)}>NO</div>
                                </div>
                              </label>
                              {toggleThird && 
                                <div>
                                  <label>Description</label>
                                  <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    
                                  />
                                </div>
                              }
                            </div> */}
                            <div className="">
                              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                              Any other Vocational Service Projects :
                              </label>
                              <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                autoComplete="given-name"
                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"                              
                              />
                            </div>                    
                        </div>                      
                      </div>                      
                    </div>
                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                      <button
                      style={{background:'rgb(12,63,116)'}}
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
          <div className="tab-pane fade" id="tabs-messages" role="tabpanel" aria-labelledby="tabs-profile-tab">
          <div className="shadow-lg" style={{width:'80%',margin:'0 auto'}}>
              <div className="mt-7 rounded-lg mb-7"  style={{width:'100%',border:'2px solid grey'}}>
                <div className="mt-5 md:col-span-2 md:mt-0">
                  <div>
                    {/* <form action="#" method="POST"> */}
                    <div className=" sm:rounded-md">{/* <div className="shadow sm:overflow-hidden sm:rounded-md"> */}
                      <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                        <div className="my-3">
                          <h2><b>D. International Service</b></h2>
                        </div>
                        <div className="grid grid-cols-3 gap-6" style={{alignItems:'start'}}>
                          <div className="">
                            <label htmlFor="month" className="block text-sm font-medium text-gray-700">
                              Contribution to TRF :
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
                              Contribution to Polio Fund :
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
                              Any other project on International Service :
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
                              Sponsoring a Peace Scholar or Team Member :
                            </label>
                            <label className="switch">
                              <input type="checkbox" id="togBtn"/>
                              <div className="slider round">
                                <div className="on" onClick={() => setToggleFifth(false)} >YES </div>
                                <div className="off" onClick={() => setToggleFifth(true)}>NO</div>
                              </div>
                            </label>
                            {toggleFifth && 
                              <div>
                                <label>Description</label>
                                <input
                                  type="text"
                                  name="first-name"
                                  id="first-name"
                                  autoComplete="given-name"
                                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                  
                                />
                              </div>
                            }
                          </div>
                          <div className="">
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                              Youth Exchange :
                            </label>
                            <label className="switch">
                              <input type="checkbox" id="togBtn"/>
                              <div className="slider round">
                                <div className="on" onClick={() => setToggleSixth(false)} >YES </div>
                                <div className="off" onClick={() => setToggleSixth(true)}>NO</div>
                              </div>
                            </label>
                            {toggleSixth && 
                              <div>
                                <label>Description</label>
                                <input
                                  type="text"
                                  name="first-name"
                                  id="first-name"
                                  autoComplete="given-name"
                                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                  
                                />
                              </div>
                            }
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
                            <div>{addText}</div>
                            <button onClick={addtext1}>Add New Text</button>
                          </div>
                        </div>
                        <div>
                          <div className="my-3">
                            <h2><b>E. Youth Service</b></h2>
                          </div>
                          <div  className="grid grid-cols-3 gap-6" style={{alignItems:'start'}} >
                            <div className="">
                              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                Sponsored New Rotaract / Interact Club during the reporting month :
                              </label>
                              <label className="switch">
                                <input type="checkbox" id="togBtn"/>
                                <div className="slider round">
                                  <div className="on" onClick={() => setToggleSeventh(false)} >YES </div>
                                  <div className="off" onClick={() => setToggleSeventh(true)}>NO</div>
                                </div>
                              </label>
                              {toggleSeventh && 
                                <div>
                                  <label>Description</label>
                                  <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    
                                  />
                                </div>
                              }
                            </div>
                            <div className="">
                              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                               Sponsoring Candidates for RYLA :
                              </label>
                              <label className="switch">
                                <input type="checkbox" id="togBtn"/>
                                <div className="slider round">
                                  <div className="on" onClick={() => setToggleEighth(false)} >YES </div>
                                  <div className="off" onClick={() => setToggleEighth(true)}>NO</div>
                                </div>
                              </label>
                              {toggleEighth && 
                                <div>
                                  <label>Description</label>
                                  <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    
                                  />
                                </div>
                              }
                            </div>
                            <div className="">
                              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                Hosting/co-hosting a RYLA :
                              </label>
                              <label className="switch">
                                <input type="checkbox" id="togBtn"/>
                                <div className="slider round">
                                  <div className="on" onClick={() => setToggleNineth(false)} >YES </div>
                                  <div className="off" onClick={() => setToggleNineth(true)}>NO</div>
                                </div>
                              </label>
                              {toggleNineth && 
                                <div>
                                  <label>Description</label>
                                  <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    
                                  />
                                </div>
                              }
                            </div>
                            <div className="">
                              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                Hosting Youth Exchange :
                              </label>
                              <label className="switch">
                                <input type="checkbox" id="togBtn"/>
                                <div className="slider round">
                                  <div className="on" onClick={() => setToggleTenth(false)} >YES </div>
                                  <div className="off" onClick={() => setToggleTenth(true)}>NO</div>
                                </div>
                              </label>
                              {toggleTenth && 
                                <div>
                                  <label>Description</label>
                                  <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    
                                  />
                                </div>
                              }
                            </div>                       
                          </div>                      
                        </div>                      
                      </div>
                      <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                        <button
                        style={{background:'rgb(12,63,116)'}}
                          type="submit"
                          className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          
          
        <Footer />
    </Container>
  </AnimationRevealPage>
  )
}

export default ReportingCMR;