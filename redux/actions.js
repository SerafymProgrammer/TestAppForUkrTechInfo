import { CURR_ROUTE,IS_LIGHT_MODE } from './types';

export const envActions = {
    setCurrentRoute: (route) => {
        return {
            type: CURR_ROUTE,
            is_sig_in: route
        };
    },
    setIsLightMode: (statusLightMode) => {
        return {
            type: IS_LIGHT_MODE,
            statusLightMode
        };
    },

}