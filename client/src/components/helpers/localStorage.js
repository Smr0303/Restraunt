export const setlocalStorage=(key,value)=>{
    localStorage.setItem(key,JSON.stringify(value));
}
export const getlocalStorage=(key)=>{
    return JSON.parse(localStorage.getItem(key));
}
export const deletelocalStorage=(key)=>{
    localStorage.removeItem(key);
}