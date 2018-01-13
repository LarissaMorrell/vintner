import React from 'react';
import {shallow, mount} from 'enzyme';
import {DrinkReviewsPage} from '../components/drink-reviews-page';

describe('<DrinkReviewsPage />', () => {
  const review = {
    rating: "5",
    title: "Gotta Buy It!",
    comment: "This is the best ever.",
    price: "3",
    purchased: false,
    flavors: ["fruity"],
    user: {},
    drink: {}
  }

  const drink = {
    id: "5a43df85e5662405fc2cf553",
    name: "Cranberry Apple",
    type: "wine",
    description: "A New England tradition. Tart and flavorful, with berries and local Red Delicious apples.",
    company: "5a21a31a1957ae0ffa7e2e02",
    reviews: [
      {
        id: "5a452d5cd4cb490d85ed76cb",
        comment: "This wine is fantastic with poultry!",
        drink: "5a43df85e5662405fc2cf553",
        flavors: ["Semi-Dry", "Fruity"],
        price: 2,
        purchased: true,
        rating: 4,
        title: "It's Delicious!",
        user: "5a43caf791ed5f0277800ee9"
      }
    ]
  }

  const match = {
    params: {
      drinkId: "5a43df85e5662405fc2cf553"
    }
  }

  it('Renders without crashing', () => {
    shallow(<DrinkReviewsPage drink={drink} loggedIn={true} match={match} dispatch={() => {}} />);
  });
});
