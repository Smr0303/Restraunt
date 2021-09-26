import { CALL_PRODUCT, CREATE_PRODUCT, DELETE_PRODUCT, GET_PRODUCT } from "../constants/productConstants";
const initalState={
    products:[],
}

const productReducer=(state=initalState,action)=>{
    switch(action.type){
        case CREATE_PRODUCT:return{
            products:[...state.products,action.payload],
        }
        case GET_PRODUCT:return {
            ...state,
            products:[...action.payload]

        }
        case DELETE_PRODUCT:return{
            ...state,
            products:state.products.filter((product)=>product._id!==action.payload._id)
        }
        case CALL_PRODUCT:return{
            product:action.payload,
        }
        default:return state
    }
}
export default productReducer;