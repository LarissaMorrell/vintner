import {
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR
} from '../actions/users';

const initialState = {
    data: {
      reviews: []
    },
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_USER_SUCCESS) {
        return Object.assign({}, state, {
            data: action.user,
            error: null
        });
    } else if (action.type === FETCH_USER_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}
