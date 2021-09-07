import { getCookie, setCookie ,deleteCookie} from "./cookies";
import {getlocalStorage, setlocalStorage,deletelocalStorage}from "./localStorage";

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
export const logOut=(next)=>{
    deleteCookie('token');
    deletelocalStorage('user');
    next();

}