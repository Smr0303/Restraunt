import axios from "axios";

export const createCategory=async(data)=>{
    const config={
        headers:{
            "Content-type":"application/json",
        },
    };
        const response= await axios.post("http://localhost:5000/category/",data,config,)
        return response;
}