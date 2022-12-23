import React from 'react'

const Fields = () => {
    
    return (
        <div style={{display:'flex',justifyContent:'center'}}>
            <div style={{border:'3px solid rgb(12,63,116)',width:'25%',}} className="rounded-lg">
                <div>
                    <div className='text-center px-5 py-3' style={{fontSize:'30px',color:'white',backgroundColor:'rgb(12,63,116)'}}><h1>Details</h1></div>
                    <div className="px-5 py-5 w-100" style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
                        <div className=" mb-5 w-100">
                            <label style={{fontSize:'17px'}} className="mr-5"><b>UserName :</b></label>
                            <input type="text" placeholder="username" style={{border:'2px solid rgb(12,63,116)',borderRadius:'3px'}} className="px-2 py-1"/>
                        </div>
                        
                        <div className=" mb-5">
                            <label className="mr-5" style={{fontSize:'17px'}}><b>Currency :</b></label>
                            <input type="text" placeholder="currency" style={{borderBottom:'2px solid rgb(12,63,116)'}} className="px-2 py-1"/>
                        </div>
                        <div className=" mb-5">
                            <label className="mr-5" style={{fontSize:'17px'}}><b>Status :</b></label>
                            <input type="number" placeholder="currency" style={{border:'2px solid rgb(12,63,116)',borderRadius:'3px'}} className="px-2 py-1"/>
                        </div>
                        <div className=" mb-5">
                            <label className="mr-5" style={{fontSize:'17px'}}><b>Branch :</b></label>
                            <input type="text" placeholder="branch" style={{border:'2px solid rgb(12,63,116)',borderRadius:'3px'}} className="px-2 py-1"/>
                        </div>
                        <div className=" mb-5">
                            <label className="mr-5" style={{fontSize:'17px'}}><b>Salon :</b></label>
                            <input type="text" placeholder="" style={{border:'2px solid rgb(12,63,116)',borderRadius:'3px'}} className="px-2 py-1"/>
                        </div>
                    </div>
                    {/* {logindata.map((item) =>  */}
                    <div >
                        <div style={{fontSize:'20px',textAlign:'center',textDecoration:'underline'}}><b>Sites</b></div>
                        <div style={{display:'flex',justifyContent:'space-between',width:'100%',margin:'5px',width:'100%'}}>
                            <table style={{width:'100%',margin:'15px',border:'1px solid grey',padding:'15px',overflowY:'auto',height:'70px'}}>
                                <th style={{width:'50%',textAlign:'left',marginRight:'10px'}}>Item Code</th>
                                <th style={{width:'50%',textAlign:'left'}}> Item Decription</th>
                                <tbody style={{border:'1px solid grey'}}>
                                    
                                    
                                        <tr>
                                            <td style={{width:'50%',textAlign:'left'}}>Item Code 1</td>
                                            <td style={{width:'50%',textAlign:'left'}}>Item Description 1</td>
                                        </tr>
                                    
                                    {/* <tr>
                                        <td style={{width:'50%',textAlign:'left'}}>Item Code 2</td>
                                        <td style={{width:'50%',textAlign:'left'}}>Item Description 2</td>
                                    </tr>
                                    <tr>
                                        <td style={{width:'50%',textAlign:'left'}}>Item Code 3</td>
                                        <td style={{width:'50%',textAlign:'left'}}>Item Description 3</td>
                                    </tr>
                                    <tr>
                                        <td style={{width:'50%',textAlign:'left'}}>Item Code 4</td>
                                        <td style={{width:'50%',textAlign:'left'}}>Item Description 4</td>
                                    </tr> */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                </div>
            </div>              
        </div>
    )
}

export default Fields