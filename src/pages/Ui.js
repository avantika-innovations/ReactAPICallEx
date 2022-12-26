import React, { useEffect,useState } from 'react'
import { Link, Router, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Fields from "pages/Fields";

const Ui = () => {
    const navigate = useNavigate();
    const [name, setName] = useState(null);
    const[ userName,setUserName ] = useState('');
    const [ password, setPassword ] = useState('')
    
    const win = window.sessionStorage;

    useEffect(() => { 
        if(win.getItem('userName'))
        setUserName(win.getItem('userName'));

        if(win.getItem('password'))
        setPassword(win.getItem('password'));
    },[])

    useEffect(() => {
        win.setItem('userName',userName);
        win.setItem('password',password);
    },[userName,password])
    
    const Submit = async(event) => {
        event.preventDefault();
        fetch('http://103.253.15.184:8000/api/login', {
            method:'post',
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify({
                "salon": "29",
                "username": userName,
                "password": password
            })
        })
        .then(response => {
            response.json().then((result) => {          
                localStorage.setItem('login',result.data.token);
            }
            
            )
        }
            )
        .catch((err) => console.log(err))   
        if(userName === 'TestManager' && password === '123123'){
            alert('successfully logged in')
            navigate('/Appointmentdesigns')
        }
        else{
            alert('Please enter valid username/password')
        }
      
    }

    

    return (
        <form style={{display:'flex',justifyContent:'center',marginTop:'250px'}} >
            <div style={{width:'25%',border:'2px solid rgb(214,158,46)',borderRadius:'15px ',alignItems:'center'}}>
                <div style={{fontSize:'25px',textAlign:'center',background:'rgb(214,158,46)',color:'white',borderRadius:'14px 14px 0 0 '}} className="px-5 py-4"><h3><b>Login</b></h3></div>
                <div style={{justifyContent:'space-between'}} className="px-5 py-3">
                    <div style={{margin:'10px'}}>
                        <label className='mr-3' style={{fontSize:'20px'}} >Username:</label>
                        <input
                            type="text"
                            name={userName}
                            placeholder="Username"
                            aria-describedby="inputGroupPrepend2" required
                            onChange={(e) => setUserName(e.target.value)}
                            
                        />
                    </div>
                    <div style={{margin:'10px'}}>
                        <label className='mr-3' style={{fontSize:'20px'}}>Password:</label>
                        <input
                            type="password"
                            name={password}
                            placeholder="Password"
                            aria-describedby="inputGroupPrepend2" required
                            onChange={(e) => setPassword(e.target.value)}
                            />
                    </div>
                </div>
                <button type="button" style={{backgroundColor:'rgb(12,63,116)',color:'white',float:'right'}} className="m-3 px-5 py-2 rounded-full" onClick={Submit}>
                    SUBMIT
                </button>
            </div>
        </form>
        
    )                                                       
}

export default Ui