import {
    BUDGET_GET,
    BUDGET_GET_REQUEST,
    BUDGET_GET_SUCCESS,
    BUDGET_GET_FAILURE,
    LOADING_STATES,
    BUDGETED_CATEGORIES_GET_REQUEST,
    BUDGETED_CATEGORIES_GET_SUCCESS,
    BUDGETED_CATEGORIES_GET_FAILURE,
} from "data/constants";

const initialState = {
    loadingState: {},
    budget: {},
    budgetedCategories: [],
}

function budget(state = initialState, action){
    const newLoadingState = { ...state.loadingState };

    switch (action.type) {
        case BUDGET_GET_REQUEST:
            return {
                ...state,
                loadingState:{
                    [action.type]: LOADING_STATES.LOADING
                }
            } 
        case BUDGET_GET_SUCCESS:
            delete newLoadingState.BUDGET_GET_REQUEST;
            return {
                ...state,
                budget: action.paylod,
                loadingState: newLoadingState,
            }
        case BUDGET_GET_FAILURE:
            delete newLoadingState.BUDGET_GET_REQUEST;
            return {
                ...state,
                budget: {},
                loadingState: newLoadingState,
            } 
        case BUDGETED_CATEGORIES_GET_REQUEST:
            return {
                ...state,
                loadingState:{
                    [action.type]: LOADING_STATES.LOADING
                }
            } 
        case BUDGETED_CATEGORIES_GET_SUCCESS:
            delete newLoadingState.BUDGETED_CATEGORIES_GET_REQUEST;
            return {
                ...state,
                budget: action.paylod,
                loadingState: newLoadingState,
            }
        case BUDGETED_CATEGORIES_GET_FAILURE:
            delete newLoadingState.BUDGETED_CATEGORIES_GET_REQUEST;
            return {
                ...state,
                budgetedCategories: [],
                loadingState: newLoadingState,
            }           
        default:
            return state;
    }
}

export default budget;