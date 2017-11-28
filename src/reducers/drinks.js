drinkimport {SAVE_DRINKS, SAVE_DRINK} from '../actions/drinks';

const initialState = {
    name: "",
    type: "",
    reviews: []
  }
};

export default function reducer(state = initialState, action) {
    if(action.type === SAVE_DRINKS){
      return Object.assign({}, state, {drinks: action.drinks});
    }
    if(action.type === SAVE_DRINK){
      return Object.assign({}, state, {drink: action.drink});
    }
    return state;
}
