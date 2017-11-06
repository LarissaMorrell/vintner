import {OPEN_MODAL, CLOSE_MODAL} from '../actions/modal';

const initialState = {
    display: false,
    formComponent: null
};

export default function reducer(state = initialState, action) {

    if (action.type === OPEN_MODAL) {
        return Object.assign({}, state, {
            display: true,
            formComponent: action.formComponent
        });
    } else if (action.type === CLOSE_MODAL) {
        return Object.assign({}, state, {
            display: false,
            formComponent: null
        });
    }
    return state;
}
