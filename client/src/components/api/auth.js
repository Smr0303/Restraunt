import React from 'react'
import axios from 'axios'

export const Signup=async(data)=>{
    const config={
        headers:{
            'Content-type':'application/json'
        },
    }
   const response= await axios.post('./api/auth/Signup',data,config);
   return response;
}