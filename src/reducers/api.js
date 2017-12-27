import {SAVE_COMPANIES, SAVE_COMPANY} from '../actions/companies';
import {SAVE_DRINK} from '../actions/drinks';
//SAVE_DRINKS,
const initialState = {
  companies: [],
  company: {
    drinks: [],
    hours: [],
    types: []
  },
  drink: {
    name: "",
    type: "",
    reviews: [],
    company: {
      name:""
    }
  }
};

export default function reducer(state = initialState, action) {
    if(action.type === SAVE_COMPANIES){
      return Object.assign({}, state, {companies: action.companies});
    }
    if(action.type === SAVE_COMPANY){
      return Object.assign({}, state, {company: action.company});
    }
    if(action.type === SAVE_DRINK){
      return Object.assign({}, state, {drink: action.drink});
    }
    return state;
}
