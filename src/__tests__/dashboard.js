import React from "react";
import { shallow, mount } from "enzyme";
import { Dashboard } from "../components/dashboard";

describe("<Dashboard />", () => {
  let user = {
    id: "5a43df85e5662405fc2cf553",
    firstName: "John",
    lastName: "Doe",
    avatar: "boy1",
    username: "johnDoe",
    reviews: [
      {
        rating: "5",
        title: "Gotta Buy It!",
        comment: "This is the best ever.",
        price: "3",
        purchased: false,
        flavors: ["fruity"],
        user: {},
        drink: {}
      }
    ]
  };

  it("Renders without crashing", () => {
    shallow(<Dashboard user={user} loggedIn="true" dispatch={() => {}} />);
  });
});
