import React from 'react';
import {shallow, mount} from 'enzyme';
import {DrinkReviewsPage} from '../components/drink-reviews-page';

describe('<DrinkReviewsPage />', () => {

  it('Renders without crashing', () => {
    shallow(<DrinkReviewsPage />);
  });
});
