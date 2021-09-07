import { getCookie, setCookie } from "./cookies";
import {getlocalStorage, setlocalStorage}from "./localStorage";

export const setAuthentication=(token,user)=>{
    setCookie('token',token);
    setlocalStorage('user',user);
}
export const checkAuthentication=(key)=>{
    if(getCookie('token')&&getlocalStorage('user')){
        return getlocalStorage('user');
    }
    else{
        return false;
    }
}