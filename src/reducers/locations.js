const initialState = {
  locations: [
    {
      "name": "Moonlight Winery",
      "streetAddress": "13 west way",
      "city": "Elmwood",
      "state": "MA",
      "rating": 1,
      "hours": [
        "10-4",
        "11-6",
        "11-6",
        "11-6",
        "11-6",
        "11-8",
        "10-8"
      ],
      "drinks": [
        {
          "name": "Pinto Noir",
          "rating": 4,
          "reviews": [
            {
               "rating": 3,
               "review": "Lorem ipsum dolor sit amet, ut salutatus constituam ius, vix an meis assentior philosophia.",
               "type": "wine",
               "price": "$$$",
               "purchased": "Yes",
               "flavors": ["sweet", "fruity"],
               "userID": "000000"
            },
            {
               "rating": 2,
               "review": "Lorem ipsum dolor sit amet, ut salutatus constituam ius, vix an meis assentior philosophia.",
               "type": "beer",
               "price": "$$",
               "purchased": "No",
               "flavors": ["hoppy"]
            }
          ]
        }
      ]
    }
  ]
};

export default function reducer(state = initialState, action) {
    // if (action.type === OPEN_MODAL) {
    //     return Object.assign({}, state, {
    //         display: true
    //     });
    // } else if (action.type === CLOSE_MODAL) {
    //     return Object.assign({}, state, {
    //         display: false
    //     });
    // }
    return state;
}
