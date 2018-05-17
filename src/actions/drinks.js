import { API_BASE_URL } from "../config";
import { closeModal } from "../actions/modal";

export const SAVE_DRINKS = "SAVE_DRINKS";
export const saveDrinks = drinks => ({
  type: SAVE_DRINKS,
  drinks
});

export const SAVE_DRINK = "SAVE_DRINK";
export const saveDrink = drink => ({
  type: SAVE_DRINK,
  drink
});

export const postDrink = drink => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  // review.title = review.title.trim();
  // review.comment = review.comment.trim();

  return fetch(`${API_BASE_URL}/drinks`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${authToken}`,
      "content-type": "application/json"
    },
    body: JSON.stringify(drink)
  })
    .then(res => {
      return res.json();
    })
    .then(review => {
      dispatch(closeModal());
      // dispatch(getDrink(review.drink));
    })
    .catch(err => {});
};

export const getDrinks = () => dispatch => {
  return fetch(`${API_BASE_URL}/drinks`, {
    method: "GET",
    headers: {
      "content-type": "application/json"
    }
  })
    .then(res => {
      return res.json();
    })
    .then(drinks => dispatch(saveDrinks(drinks)))
    .catch(err => {});
};

export const getDrink = drinkId => dispatch => {
  return fetch(`${API_BASE_URL}/drinks/${drinkId}`, {
    method: "GET",
    headers: {
      "content-type": "application/json"
    }
  })
    .then(res => res.json())
    .then(drink => dispatch(saveDrink(drink)))
    .catch(err => {});
};
