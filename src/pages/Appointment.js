
import React from 'react';
import Scheduler, { Resource, View, Scrolling } from 'devextreme-react/scheduler';
import {resources,generateAppointments} from '../data.js';
import Pagination from '@material-ui/lab/Pagination';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import { useEffect,useState } from 'react';
import axios from 'axios';


const currentDate = new Date(2021, 1, 2);

const groups = ['humanId'];
var pageNum = 1;
var pageSize = 10;  
var totalCount = resources.length;
const startDay = new Date(2021, 1, 1);
const endDay = new Date(2021, 1, 28);
const startDayHour = 9;  
const endDayHour = 22;


const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );


var chunkedArray = chunk(resources, pageSize); 
console.log('chunkedarraydat ',chunkedArray);

var newData= chunkedArray[pageNum - 1 ];

     
const appointments = generateAppointments(startDay, endDay, startDayHour, endDayHour);

const Appointment = () => {
  // const [page, setPage] = React.useState(0);
  const [name, setName] = React.useState([]);
  // const [number, setNumber] = React.useState();
  const [auto, setAuto] = React.useState([]);

  const [data, setData] = useState([]);
   
  useEffect(() => {
    const token = "token " + localStorage.getItem('login');
     fetch('http://103.253.15.184:8000/api/empappointmentview/?date=2022-12-24&check=day&page=1&limit=10&search=&type=staff', {
        method:'GET',
        headers: {
            "Authorization" : token
        },
    })
    .then((result) => {
      result.json().then((resp) =>{
        console.warn("result",resp)
        setData(resp.data.dataList)
      })
    })
    
    // console.log(token)
  },[])

  // useEffect(() => {
  //     const token = "token " + localStorage.getItem('login');
  //      fetch('http://103.253.15.184:8000/api/empappointmentview/?date=2022-12-24&check=day&page=1&limit=10&search=&type=staff', {
  //         method:'GET',
  //         headers: {
  //             "Authorization" : token
  //         },
  //     }).then((result) => result.json()
  //     .then((resp) => {
  //         console.warn("result",resp)
  //         setData(resp)
  //     }
  //     ))  
  //     console.log(token)
  // },[])

  console.warn('data',data);


  const handleChange = (event,value,e,inputval) => {
    
      console.log('value',value);
      pageNum=value;
      console.log("pagenum1 ",pageNum);   
      console.log("pagesize1 ",pageSize); 
      
      newData = chunkedArray[(pageNum-1)];

      setName(typeof newData === 'string' ? newData.split(',') : newData);
      
      console.log('newData1 ',newData);
       
  };

  const inputNumber = (e,value) => {  
    var inputval = e.target.value;
 
    if(inputval>0){
      const inputval = e.target.value;
      pageSize=inputval;
      const middleIndex = Math.ceil(pageSize);
      chunkedArray = chunk(resources, middleIndex ); 
      setName(typeof pageSize === 'string' ? pageSize.split(',') : pageSize);
    }else{
      pageSize=10;
      chunkedArray = chunk(resources, pageSize ); 
      console.log('chunkedarray ',chunkedArray);
      setName(typeof pageSize === 'string' ? pageSize.split(',') : pageSize);
    }
    
    handleChange('',pageNum,'');
    
  }

  const autoComplete = (event,value) => {
    const data = value
    var searchtext = [];
    data.forEach(element => {
      searchtext.push(element.text);
    });
    setAuto(typeof searchtext === 'string' ? searchtext.split(',') : searchtext);
    if(searchtext.length > 0){    
      newData = resources.filter(items => items.text.split(',').find(text => searchtext.includes(text)));
    }else{
      newData= chunkedArray[pageNum - 1 ];
    }
  }

  var calculatePagesCount = (pageSize, totalCount) => {    
    return totalCount < pageSize ? 1 : Math.ceil(totalCount / pageSize);
  };

  var totalPageCount = calculatePagesCount(pageSize,totalCount);

  totalPageCount = calculatePagesCount(pageSize,totalCount);

  return (
    <>  
    {/* {data.map(item => {      
        <h1>{item.id}</h1>
      }
      )}  */}
    <div>
     <div className="" style={{display:'flex',alignItems:'center',margin:'5px'}}> 
        <h1 style={{margin:'10px 50px',fontSize:'25px',width:'20%'}}><b>Filter</b></h1>
          <Autocomplete
            id="country-select-demo"
            sx={{ width: '30%' }}
            style={{padding:'10px 50px 0 0',margin:'5px'}}
            options={resources}

            multiple
            onChange={autoComplete}
            getOptionLabel={(option) => option.text}
            renderOption={(props, option) => (
              <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                <MenuItem value={option.text}>  
                    <Checkbox checked={auto.indexOf(option.text) > -1}  />
                  <ListItemText primary={option.text} />          
                </MenuItem> 
              </Box>
                )}
                renderInput={(params) => ( 
                  <TextField
                    {...params}
                    label="Select Employees Name"
                  />  
                )}
                
          />
          <Input 
            placeholder="Type No. of Employees" 
            onChange={inputNumber} 
            style={{fontSize:'20px',width:'30%',height: 'fit-content',padding:'20px 10px 0 0',margin:'5px'}}
          />   
      </div>
      
      <Scheduler
        dataSource={appointments}
        defaultCurrentView='Timeline'
        defaultCurrentDate={currentDate}
        startDayHour={startDayHour}
        endDayHour={endDayHour}

        showAllDayPanel={false}
        groups={groups}
        >
        
        <View
          type='day'
          groupOrientation='horizontal'
        />

        <View
          type='workWeek'
          groupOrientation='horizontal'
        />
        
        <View
          type='month'
          groupOrientation='horizontal'
        />
        
        <Resource 
          dataSource={newData}
          label='Employee'
          groupOrientation='horizontal'
          fieldExpr='humanId'
          />
          <Scrolling
          mode='virtual'/>
      </Scheduler>
                  
      <Pagination 
        count={totalPageCount}
        onChange={handleChange}
        style={{marginTop:'15px',fontSize:'20px',textAlign:'right',float:'right'}}
      />
    </div>
    
    </>
  );
}

export default Appointment;

