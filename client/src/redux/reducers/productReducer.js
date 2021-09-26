import { CREATE_PRODUCT, DELETE_PRODUCT, GET_PRODUCT } from "../constants/productConstants";
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
            products:products.filter(!product._id===action.payload._id)
        }
        default:return state
    }
}
export default productReducer;