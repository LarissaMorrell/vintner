import {API_BASE_URL} from '../config';
export const SAVE_DRINKS = 'SAVE_DRINKS';
export const saveDrinks = drinks => ({
    type: SAVE_DRINKS,
    drinks
});

export const SAVE_DRINK = 'SAVE_DRINK';
export const saveDrink = drink => ({
    type: SAVE_DRINK,
    drink
});


export const getDrinks = () => dispatch => {
    return fetch(`${API_BASE_URL}/drinks`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })
      .then(res => res.json())
      .then(drinks => dispatch(saveDrinks(drinks)))
      .catch(err => {
      });
};

export const getDrink = (drinkId) => dispatch => {
    return fetch(`${API_BASE_URL}/drinks/${drinkId}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })
      .then(res => res.json())
      .then(drink => dispatch(saveDrink(drink)))
      .catch(err => {

      });
};
