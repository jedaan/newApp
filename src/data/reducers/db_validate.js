import { VALID_EMAIL } from '../actions/type';

export default (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case VALID_EMAIL:
            return payload;
        default:
            return state;
    }
};
