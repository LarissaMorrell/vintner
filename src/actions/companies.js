import {API_BASE_URL} from '../config';

export const getCompanies = () => dispatch => {
    return fetch(`${API_BASE_URL}/companies`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })
      .then(res => res.json())
      .then(companies => dispatch(saveCompanies(companies)))
      .catch(err => {

      });
};

export const SAVE_COMPANIES = 'SAVE_COMPANIES';
export const saveCompanies = companies => ({
    type: SAVE_COMPANIES,
    companies
});

export const getCompany = (companyId) => dispatch => {
    return fetch(`${API_BASE_URL}/companies/${companyId}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })
      .then(res => res.json())
      .then(company => dispatch(saveCompany(company)))
      .catch(err => {

      });
};

export const SAVE_COMPANY = 'SAVE_COMPANY';
export const saveCompany = company => ({
    type: SAVE_COMPANY,
    company
});
