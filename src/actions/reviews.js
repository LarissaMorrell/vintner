import { API_BASE_URL } from "../config";
import { closeModal } from "../actions/modal";
import { getDrink } from "../actions/drinks";

export const postReview = review => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  review.title = review.title.trim();
  review.comment = review.comment.trim();

  return fetch(`${API_BASE_URL}/reviews`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${authToken}`,
      "content-type": "application/json"
    },
    body: JSON.stringify(review)
  })
    .then(res => {
      return res.json();
    })
    .then(review => {
      dispatch(closeModal());
      dispatch(getDrink(review.drink));
    })
    .catch(err => {});
};

export const getReview = reviewId => dispatch => {
  return fetch(`${API_BASE_URL}/reviews/${reviewId}`, {
    method: "GET",
    headers: {
      "content-type": "application/json"
    }
  })
    .then(res => res.json())
    .then(review => dispatch())
    .catch(err => {});
};
