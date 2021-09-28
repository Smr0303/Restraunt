import {GET_NEW_ARRIVALS} from "../constants/filterConstants";
const intiialState={
    newArrivals:[],
}

const filterReducer=(state=initalState,action)=>{
    switch(action.type){
        case GET_NEW_ARRIVALS:return{
            newArrivals:[...action.payload],
        }

}
}
export default filterReducer;