import { GET_PRODUCT } from "../constants/productConstants";
const initalState={
    products:[],
}

const productReducer=(state=initalState,action)=>{
    switch(action.type){
        case GET_PRODUCT:return {
            ...state,
            products:[...action.payload]

        }
        default:return state
    }
}
export default productReducer;