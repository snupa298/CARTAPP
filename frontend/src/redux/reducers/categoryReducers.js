import { DELETEW_CATEGORY, GET_CATEGORIES_REQUEST, INSERT_CATEGORY, SAVE_ATTR } from "../constants/categoryConstants";


export const getCategoriesReducer = (state ={categories:[]},action) =>{
    switch(action.type){
        case GET_CATEGORIES_REQUEST:
            return{
                ...state,
                categories:action.payload
            }
            case SAVE_ATTR:
                return{
                    ...state,
                    categories:action.payload
                }
                case INSERT_CATEGORY:
                    return{
                        ...state,
                        categories:action.payload
                    }
                    case DELETEW_CATEGORY:
                        return{
                            ...state,
                            categories:action.payload
                        }
            default:
                return state;
    }
}