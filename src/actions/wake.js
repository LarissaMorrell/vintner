import { API_BASE_URL } from "../config";

export const wakeupServer = () => dispatch => {
  return fetch(`${API_BASE_URL}/wakeup`, {
    method: "GET",
    headers: {
      "content-type": "application/json"
    }
  })
    .then(res => res.json())
    .catch(err => {});
};
