import { API_BASE_URL } from "../config";
import { closeModal } from "../actions/modal";

export const SAVE_COMPANIES = "SAVE_COMPANIES";
export const saveCompanies = companies => ({
  type: SAVE_COMPANIES,
  companies
});

export const SAVE_COMPANY = "SAVE_COMPANY";
export const saveCompany = company => ({
  type: SAVE_COMPANY,
  company
});

export const postCompany = company => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  company.name = company.name.trim();
  company.streetAddress = company.streetAddress.trim();
  company.city = company.city.trim();
  console.log("company = ", company);

  return fetch(`${API_BASE_URL}/companies`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${authToken}`,
      "content-type": "application/json"
    },
    body: JSON.stringify(company)
  })
    .then(res => {
      return res.json();
    })
    .then(review => {
      dispatch(closeModal());
    })
    .catch(err => {
      console.log(err);
    });
};

export const getCompanies = () => dispatch => {
  return fetch(`${API_BASE_URL}/companies`, {
    method: "GET",
    headers: {
      "content-type": "application/json"
    }
  })
    .then(res => res.json())
    .then(companies => dispatch(saveCompanies(companies)))
    .catch(err => {});
};

export const getCompany = companyId => dispatch => {
  return fetch(`${API_BASE_URL}/companies/${companyId}`, {
    method: "GET",
    headers: {
      "content-type": "application/json"
    }
  })
    .then(res => res.json())
    .then(company => dispatch(saveCompany(company)))
    .catch(err => {});
};
