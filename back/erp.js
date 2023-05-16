const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

let data = JSON.stringify({
    "jsonrpc": "2.0",
    "params": {}
  });
  
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://localhost:8069/hospital_appointment/get_all_requests_exam',
    headers: { 
      'Content-Type': 'application/json', 
      'Cookie': 'session_id=6d05f0fc0662327f2c0947989fe0c689c3a48834'
    },
    data : data
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
  
  let configt = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://localhost:8069/hospital_appointment/get_all_requests_treat',
    headers: { 
      'Content-Type': 'application/json', 
      'Cookie': 'session_id=6d05f0fc0662327f2c0947989fe0c689c3a48834'
    },
    data : data
  };
  
  axios.request(configt)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
  })