import React from 'react';
import axios from 'axios';

export const Signup=async(data)=>{
    const config={
        headers:{
            "Content-type":"application/json"
        }
    }
    const res= await axios.post("http://localhost:5000/auth/Signup",data,config)
    return res;

}