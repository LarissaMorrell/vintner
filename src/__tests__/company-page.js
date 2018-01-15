import React from 'react';
import {shallow, mount} from 'enzyme';

import {CompanyPage} from '../components/company-page';

describe('<CompanyPage />', () => {
  let company = {
    id: "5a43df85e5662405fc2cf553",
    name: "Brewery to Rock Your Socks",
    streetAddress: "1 Hops Way",
    city: "Huntsville",
    state: "MA",
    hours: ["10:00 AM - 6:00 PM","10:00 AM - 6:00 PM","10:00 AM - 6:00 PM","10:00 AM - 6:00 PM","10:00 AM - 6:00 PM","10:00 AM - 6:00 PM","10:00 AM - 6:00 PM"],
    imageUrl: "https://www.narda-sts.com/fileadmin/_processed_/csm_no-image-available_EN_3dd8d65e1e.png",
    types: ["wine", "beer", "mead", "cider", "spirits"],
    drinks: []
  }
  const match = {
    params: {
      drinkId: "5a43df85e5662405fc2cf553"
    }
  }

  it('Renders without crashing', () => {
    shallow(
      <CompanyPage
        company={company}
        match={match}
        dispatch={() => {}}
      />
    );
  });
});
