import { GET_CATEGORY,CREATE_CATEGORY } from "../constants/categoryConstants"

const initialState={
    categories:[],
}
const categoryReducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_CATEGORY:return{
            ...state,
            categories:action.payload
        }
        case CREATE_CATEGORY:return {
            ...state,
            categories:[...categories,action.payload]
        }
        default :return state;
    }
}
export default categoryReducer;