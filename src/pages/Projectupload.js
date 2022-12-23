import React from 'react'
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithBackground.js";
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const Projectupload = () => {

    const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
    const checkedIcon = <CheckBoxIcon fontSize="small" />;
    const categoryA = [
        { title: 'Community', year: 1994 },
        { title: 'Fundraiser', year: 1972 },
        { title: 'International', year: 1974 },
        { title: 'Polio', year: 2008 },
        { title: 'Vocational', year: 1957 },
        { title: "Environment", year: 1993 },
        { title: 'Disaster Response', year: 1994 },
        {
          title: 'Public Image',
          year: 2003,
        },
        { title: 'Youth Service', year: 1966 },
        { title: 'Fight Club', year: 1999 },
    ]
    const categoryB = [
        { title:'Basic Education And Literacy'},
        { title:'Disease Prevention And Treatment'},
        { title:'Economic And Community Development'},
        { title:'Maternal And Child Health'},
        { title:'Peace And Con�ict Prevention/Resolution'},
        { title:'Water And Sanitaization'},
        { title:'Supporting the Environment'},
    ]
    const Funding = [
        { title:'Club Fund'},
        { title:'Rotary District 3240 Foundation'},
        { title:'District Grant'},
        { title:'Rotary Grant'},
        { title:'CSR Fund'},
    ]
    return (
        <AnimationRevealPage>
            <Header/>
                <div style={{fontSize:'25px',textAlign:'center'}} className="my-5"><b>PROJECT UPLOAD</b></div>  
                
                <div style={{width:'70%',border:'3px solid rgb(229 231 235)'}} className="rounded-lg p-5 mb-5 mx-auto">
                    <div style={{}}>
                        <div className="md:grid md:grid-cols-3 md:gap-6">
                            <div className="md:col-span-1">
                                <div className="px-4 sm:px-0">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">Project Profile</h3>
                                </div>
                            </div>
                            <div className="mt-5 md:col-span-2 md:mt-0">
                                <form action="#" method="POST">
                                    <div className="shadow sm:overflow-hidden sm:rounded-md">
                                        <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                                            <div className="grid grid-cols-3 gap-6">
                                                <div className="col-span-3 sm:col-span-2">
                                                    <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                                                        Upload Project Cover Image :–
                                                    </label>
                                                    <label
                                                        htmlFor="file-upload1"
                                                        className="relative inline-block cursor-pointer rounded-md bg-white font-medium focus-within:outline-none hover:text-white hover:bg-blue-900 border px-5 py-2 "
                                                    >
                                                        <span>Upload a file</span>
                                                        <input id="file-upload1" name="file-upload1" type="file" className="sr-only" />
                                                    </label>                                    
                                                </div>
                                            </div>
                                        
                                            <div className="grid grid-cols-6 gap-6">
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                        Project Title :–
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="last-name"
                                                        id="last-name"
                                                        autoComplete="family-name"
                                                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    />
                                                </div>
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                        Club Name :–
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="last-name"
                                                        id="last-name"
                                                        autoComplete="family-name"
                                                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    />
                                                </div>
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                        Location :–
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="last-name"
                                                        id="last-name"
                                                        autoComplete="family-name"
                                                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    />
                                                    
                                                </div>
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                        Brief Description :–
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="last-name"
                                                        id="last-name"
                                                        autoComplete="family-name"
                                                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    />
                                                </div>
                                            </div>
                                        </div>                                                                                                                                
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="hidden sm:block" aria-hidden="true">
                        <div className="py-5">
                            <div className="border-t border-gray-200" />
                        </div>
                    </div>

                    <div className="mt-10 sm:mt-0">
                        <div className="md:grid md:grid-cols-3 md:gap-6">
                            <div className="md:col-span-1">
                                <div className="px-4 sm:px-0">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">Project Timeline</h3>
                                    {/* <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p> */}
                                </div>
                            </div>
                            <div className="mt-5 md:col-span-2 md:mt-0">
                                <form action="#" method="POST">
                                <div className="overflow-hidden shadow sm:rounded-md">
                                    <div className="bg-white px-4 py-5 sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                            Project Start Date :–
                                        </label>
                                        <input
                                            type="date"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                            
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                            Project End Date :–
                                        </label>
                                        <input
                                            type="date"
                                            name="last-name"
                                            id="last-name"
                                            autoComplete="family-name"
                                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                        </div>

                                        {/* <div className="col-span-6 sm:col-span-4">
                                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                            Email address
                                        </label>
                                        <input
                                            type="text"
                                            name="email-address"
                                            id="email-address"
                                            autoComplete="email"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                        </div> */}

                                        {/* <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                            Country
                                        </label>
                                        <select
                                            id="country"
                                            name="country"
                                            autoComplete="country-name"
                                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        >
                                            <option>United States</option>
                                            <option>Canada</option>
                                            <option>Mexico</option>
                                        </select>
                                        </div> */}

                                        {/* <div className="col-span-6">
                                        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                            Street address
                                        </label>
                                        <input
                                            type="text"
                                            name="street-address"
                                            id="street-address"
                                            autoComplete="street-address"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                        </div> */}

                                        {/* <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            name="city"
                                            id="city"
                                            autoComplete="address-level2"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                        </div> */}

                                        {/* <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                                            State / Province
                                        </label>
                                        <input
                                            type="text"
                                            name="region"
                                            id="region"
                                            autoComplete="address-level1"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                        </div> */}

                                        {/* <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                                            ZIP / Postal code
                                        </label>
                                        <input
                                            type="text"
                                            name="postal-code"
                                            id="postal-code"
                                            autoComplete="postal-code"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                        </div> */}
                                    </div>
                                    </div>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="hidden sm:block" aria-hidden="true">
                        <div className="py-5">
                        <div className="border-t border-gray-200" />
                        </div>
                    </div>

                    <div className="mt-10 sm:mt-0">
                        <div className="md:grid md:grid-cols-3 md:gap-6">
                        <div className="md:col-span-1">
                            <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Project Category</h3>
                            <p className="mt-1 text-sm text-gray-600">Select project category</p>
                            </div>
                        </div>
                        <div className="mt-5 md:col-span-2 md:mt-0">
                            <form action="#" method="POST">
                            <div className="overflow-hidden shadow sm:rounded-md">
                                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                                    <div>
                                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                        Project Category A :–
                                        </label>
                                        <Autocomplete
                                            multiple
                                            id="checkboxes-tags-demo"
                                            options={categoryA}
                                            disableCloseOnSelect
                                            getOptionLabel={(option) => option.title}
                                            renderOption={(props, option, { selected }) => (
                                                <li {...props} >         
                                                <Checkbox
                                                    icon={icon}
                                                    checkedIcon={checkedIcon}
                                                    style={{ marginRight: 8 }}
                                                    checked={selected}
                                                />
                                                {option.title}
                                                </li>
                                            )}
                                            style={{ width: 500,margin:0}}
                                            renderInput={(params) => (
                                                <TextField {...params} placeholder="Category A"/>
                                            )}
                                            />
                                    </div>
                                    <div>
                                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                        Project Category B :–
                                        </label>
                                        <Autocomplete
                                            multiple
                                            id="checkboxes-tags-demo"
                                            options={categoryB}
                                            disableCloseOnSelect
                                            getOptionLabel={(option) => option.title}
                                            renderOption={(props, option, { selected }) => (
                                                <li {...props} >         
                                                <Checkbox
                                                    icon={icon}
                                                    checkedIcon={checkedIcon}
                                                    style={{ marginRight: 8 }}
                                                    checked={selected}
                                                />
                                                {option.title}
                                                </li>
                                            )}
                                            style={{ width: 500,margin:0}}
                                            renderInput={(params) => (
                                                <TextField {...params} placeholder="Category B"/>
                                            )}
                                            />
                                    </div>
                                    <div>
                                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                        Funding :-
                                        </label>
                                        <Autocomplete
                                            multiple
                                            id="checkboxes-tags-demo"
                                            options={Funding}
                                            disableCloseOnSelect
                                            getOptionLabel={(option) => option.title}
                                            renderOption={(props, option, { selected }) => (
                                                <li {...props} >         
                                                <Checkbox
                                                    icon={icon}
                                                    checkedIcon={checkedIcon}
                                                    style={{ marginRight: 8 }}
                                                    checked={selected}
                                                />
                                                {option.title}
                                                </li>
                                            )}
                                            style={{ width: 500,margin:0}}
                                            renderInput={(params) => (
                                                <TextField {...params} placeholder="Funds"/>
                                            )}
                                            />
                                    </div>
                                </div>
                                
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    <div className="hidden sm:block" aria-hidden="true">
                        <div className="py-5">
                        <div className="border-t border-gray-200" />
                        </div>
                    </div>
                    <div className="mt-10 sm:mt-0">
                        <div className="md:grid md:grid-cols-3 md:gap-6">
                            <div className="md:col-span-1">
                                <div className="px-4 sm:px-0">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">Project Timeline</h3>
                                    {/* <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p> */}
                                </div>
                            </div>
                            <div className="mt-5 md:col-span-2 md:mt-0">
                                <form action="#" method="POST">
                                    <div className="overflow-hidden shadow sm:rounded-md">
                                        <div className="bg-white px-4 py-5 sm:p-6">
                                            <div className="grid grid-cols-6 gap-6">
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                        Rotarians Involved :–
                                                    </label>
                                                    <input
                                                        type="number"
                                                        name="first-name"
                                                        id="first-name"
                                                        autoComplete="given-name"
                                                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    />
                                                    
                                                </div>

                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                        Rotaractors/Interact/Innerwheel/Volunteers Involved :–
                                                    </label>
                                                    <input
                                                        type="number"
                                                        name="last-name"
                                                        id="last-name"
                                                        autoComplete="family-name"
                                                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    />
                                                </div>
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                        Man Hours :–
                                                    </label>
                                                    <input
                                                        type="number"
                                                        name="last-name"
                                                        id="last-name"
                                                        autoComplete="family-name"
                                                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="hidden sm:block" aria-hidden="true">
                        <div className="py-5">
                        <div className="border-t border-gray-200" />
                        </div>
                    </div>
                    <div className="mt-10 sm:mt-0">
                        <div className="md:grid md:grid-cols-3 md:gap-6">
                            <div className="md:col-span-1">
                                <div className="px-4 sm:px-0">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">Total Donations</h3>
                                    {/* <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p> */}
                                </div>
                            </div>
                            <div className="mt-5 md:col-span-2 md:mt-0">
                                <form action="#" method="POST">
                                    <div className="overflow-hidden shadow sm:rounded-md">
                                        <div className="bg-white px-4 py-5 sm:p-6">
                                            <div className="grid grid-cols-6 gap-6">
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                        Number of Beneficiaries :–
                                                    </label>
                                                    <input
                                                        type="number"
                                                        name="last-name"
                                                        id="last-name"
                                                        autoComplete="family-name"
                                                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    />
                                                </div>
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                        Total Value INR :–
                                                    </label>
                                                    <input
                                                        type="number"
                                                        name="last-name"
                                                        id="last-name"
                                                        autoComplete="family-name"
                                                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    />
                                                </div>
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                        Donation In Kind :–
                                                    </label>
                                                    <textarea
                                                        id="about"
                                                        name="about"
                                                        rows={3}
                                                        className="p-2 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                        placeholder="description"
                                                        defaultValue={''}
                                                    />
                                                    
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="hidden sm:block" aria-hidden="true">
                        <div className="py-5">
                        <div className="border-t border-gray-200" />
                        </div>
                    </div>
                    <div className="mt-10 sm:mt-0">
                        <div className="md:grid md:grid-cols-3 md:gap-6">
                            <div className="md:col-span-1">
                                <div className="px-4 sm:px-0">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">Total Donations</h3>
                                    {/* <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p> */}
                                </div>
                            </div>
                            <div className="mt-5 md:col-span-2 md:mt-0">
                                <form action="#" method="POST">
                                    <div className="overflow-hidden shadow sm:rounded-md">
                                        <div className="bg-white px-4 py-5 sm:p-6">
                                            <div className="grid grid-cols-6 gap-6">
                                                <div className="col-span-6 sm:col-span-3">
                                                    {/* <div className="col-span-3 sm:col-span-2"> */}
                                                        <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                                                            Project Picture 1 :– 
                                                        </label>
                                                        <label
                                                                htmlFor="file-upload2"
                                                                className="relative inline-block cursor-pointer rounded-md bg-white font-medium focus-within:outline-none hover:text-white hover:bg-blue-900 border px-5 py-2 "
                                                            >
                                                                <span>SELECT IMAGE</span>
                                                                <input id="file-upload2" name="file-upload2" type="file" className="sr-only" />
                                                        </label>                                    
                                                    {/* </div> */}
                                                </div>
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                                                        Project Picture 2 :– 
                                                    </label>
                                                    <label
                                                            htmlFor="file-upload3"
                                                            className="relative inline-block cursor-pointer rounded-md bg-white font-medium focus-within:outline-none hover:text-white hover:bg-blue-900 border px-5 py-2 "
                                                        >
                                                            <span>SELECT IMAGE</span>
                                                            <input id="file-upload3" name="file-upload3" type="file" className="sr-only" />
                                                    </label>    
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="mx-4 my-3 text-right sm:px-6">
                        <button
                            style={{background:'rgb(12,63,116)'}}
                            type="submit"
                            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            SUBMIT
                        </button>
                    </div>
                </div>
            <Footer/>
        </AnimationRevealPage>
    )
}

export default Projectupload