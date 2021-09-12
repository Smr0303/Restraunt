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

export const getCategories=async(data)=>{

        const response= await axios.get("http://localhost:5000/category/")
        return response;
}