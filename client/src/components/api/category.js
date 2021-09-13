import axios from "axios";

export const createCategory=async(data)=>{
    const config={
        headers:{
            "Content-type":"application/json",
},
    };
        const response= await axios.post("http://localhost:5000/category/create",data,config)
        return response;
}

export const getCategories=async(data)=>{
        const response= await axios.get("http://localhost:5000/category/read")
        return response;
}