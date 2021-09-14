import axios from "axios";
export const createProduct=async(data)=>{
    const config={
        headers:{
            "Content-type":"application/json",
        }
    }
const res=await axios.post("http://localhost:5000/product/create",data,config)
return res;
}