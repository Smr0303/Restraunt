import { setCookie } from "./cookies";
import {setlocalStorage}from "./localStorage";

export const setAuthentication=(token,user)=>{
    setCookie('token',token);
    setlocalStorage('user',user);
}