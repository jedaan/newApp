import { FETCH_USER_DATA, SUCCESS_LOG_IN } from '../actions/type';

export default (state = {}, action) => {
    const { type, payload } = action;
    console.log('payload payload', payload);
    switch (type) {
        case SUCCESS_LOG_IN:
            return {
                authenticated: true,
                data: payload
            };
        case FETCH_USER_DATA:
            return { data: payload }
        default:
            return state
    }
}