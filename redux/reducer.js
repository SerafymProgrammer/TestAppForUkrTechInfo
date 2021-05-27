
import { CURR_ROUTE,IS_LIGHT_MODE } from './types';



const initialState = {
    current_route: false,
    isLigthMode: false
}

//reducer
export const envReducer = (state = initialState, action) => {
    switch (action.type) {
        case CURR_ROUTE: {
            return {
                ...state,
                current_route: action.route
            }
        }
        case IS_LIGHT_MODE: {
            return {
                ...state,
                isLigthMode: action.statusLightMode
            }
        }
        default: return state;
    }
}

//action creator

