import React from 'react';
import {shallow, mount} from 'enzyme';

import {CompaniesPage} from '../components/companies-page';

describe('<CompaniesPage />', () => {
  let companies = [
    {
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
  ]

  it('Renders without crashing', () => {
    shallow(
      <CompaniesPage
        companies={companies}
        dispatch={() => {}}
      />
    );
  });
});
