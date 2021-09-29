import {GET_NEW_ARRIVAL} from "../constants/filterConstants";

const initialState={
    newArrivals:[],
}

const filterReducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_NEW_ARRIVAL:return{
            newArrivals:[...action.payload],
        }
        default:return state

}
}
export default filterReducer;