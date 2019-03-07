import { SUCCESS_LOG_IN, SUCCESS_LOG_OUT } from '../actions/type';

export default (state = false, action) => {
    const { type, auth, data } = action;
    switch (type) {
        case SUCCESS_LOG_IN:
            return {
                authenticated: auth,
                userData: data
            };
        case SUCCESS_LOG_OUT:
        return {
            authenticated: auth,
            userData: null
        };
        default:
            return state
    }
};
