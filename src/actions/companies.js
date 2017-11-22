import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

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
          const {reason, message, location} = err;

      });
};

export const SAVE_COMPANIES = 'SAVE_COMPANIES';
export const saveCompanies = companies => ({
    type: SAVE_COMPANIES,
    companies
});
