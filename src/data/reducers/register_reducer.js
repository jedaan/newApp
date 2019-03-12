import { FETCH_REGISTER_DATA } from '../actions/type';

export default (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case FETCH_REGISTER_DATA:
            return payload;
        default:
            return state;
    }
};
