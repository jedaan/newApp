import { FETCH_USER_DATA, SUCCESS_LOG_IN, SUCCESS_LOG_OUT } from '../actions/type';

export default (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case SUCCESS_LOG_IN:
            return {
                authenticated: true,
                data: payload
            };
        case SUCCESS_LOG_OUT:
            return {
                authenticated: payload,
                data: null
            }
        case FETCH_USER_DATA:
            return { data: payload }
        default:
            return state
    }
}