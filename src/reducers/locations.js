const initialState = {
  locations: [
    {
      "name": "Moonlight Winery",
      "streetAddress": "13 west way",
      "city": "Elmwood",
      "state": "MA",
      "rating": 1,
      "totalReviewCount": 14,
      "hours": [
        "10-4",
        "11-6",
        "11-6",
        "11-6",
        "11-6",
        "11-8",
        "10-8"
      ],
      "image": "nashoba.jpg",
      "types": ["beer", "wine", "cider","mead", "spirits"],
      "drinks": [
        {
          "name": "Porter",
          "rating": 4,
          "type": "beer",
          "reviews": [
            {
               "rating": 3,
               "review": "Lorem ipsum dolor sit amet, ut salutatus constituam ius, vix an meis assentior philosophia.",
               "price": "$$$",
               "purchased": "Yes",
               "flavors": ["sweet", "fruity"],
               "userID": "000000"
            },
            {
               "rating": 2,
               "review": "Lorem ipsum dolor sit amet, ut salutatus constituam ius, vix an meis assentior philosophia.",
               "price": "$$",
               "purchased": "No",
               "flavors": ["hoppy"]
            }
          ]
        },
        {
          "name": "Pinot Noir",
          "rating": 4,
          "type": "wine",
          "reviews": [
            {
               "rating": 3,
               "review": "Lorem ipsum dolor sit amet, ut salutatus constituam ius, vix an meis assentior philosophia.",
               "price": "$$$",
               "purchased": "Yes",
               "flavors": ["sweet", "fruity"],
               "userID": "000000"
            },
            {
               "rating": 2,
               "review": "Lorem ipsum dolor sit amet, ut salutatus constituam ius, vix an meis assentior philosophia.",
               "price": "$$",
               "purchased": "No",
               "flavors": ["hoppy"]
            }
          ]
        }
      ]
    },
    {
      "name": "Boston Brewer",
      "streetAddress": "13 way",
      "city": "Elmwood",
      "state": "MA",
      "rating": 3,
      "totalReviewCount": 4,
      "hours": [
        "10-4",
        "11-6",
        "11-6",
        "11-6",
        "11-6",
        "11-8",
        "10-8"
      ],
      "image": "nashoba.jpg",
      "types": ["beer", "wine", "cider"],
      "drinks": [
        {
          "name": "Belgian white",
          "rating": 4,
          "type": "beer",
          "reviews": [
            {
               "rating": 3,
               "review": "Lorem ipsum dolor sit amet, ut salutatus constituam ius, vix an meis assentior philosophia.",
               "price": "$$$",
               "purchased": "Yes",
               "flavors": ["sweet", "fruity"],
               "userID": "000000"
            },
            {
               "rating": 2,
               "review": "Lorem ipsum dolor sit amet, ut salutatus constituam ius, vix an meis assentior philosophia.",
               "price": "$$",
               "purchased": "No",
               "flavors": ["hoppy"]
            }
          ]
        },
        {
          "name": "Pilsner",
          "rating": 4,
          "type": "wine",
          "reviews": [
            {
               "rating": 3,
               "review": "Lorem ipsum dolor sit amet, ut salutatus constituam ius, vix an meis assentior philosophia.",
               "price": "$$$",
               "purchased": "Yes",
               "flavors": ["sweet", "fruity"],
               "userID": "000000"
            },
            {
               "rating": 2,
               "review": "Lorem ipsum dolor sit amet, ut salutatus constituam ius, vix an meis assentior philosophia.",
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
