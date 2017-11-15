const initialState = {
  companies: [
    {
      "name": "Moonlight Winery & Brewery",
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
      "types": ["beer", "wine", "cider","mead", "spirit"],
      "drinks": [
        {
          "name": "Porter",
          "rating": 4,
          "type": "spirit",
          "reviews": [
            {
               "rating": 3,
               "title": "Similar to Bud Light, so not great",
               "comments": "Lorem ipsum dolor sit amet, ut salutatus constituam ius, vix an meis assentior philosophia.",
               "price": 3,
               "purchased": "Yes",
               "flavors": ["sweet", "fruity"],
               "userID": "000000"
            },
            {
               "rating": 2,
               "title": "Similar to Blue Moon, if you left it out overnight",
               "comments": "Lorem ipsum dolor sit amet, ut salutatus constituam ius, vix an meis assentior philosophia.",
               "price": 2,
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
               "rating": 4,
               "title": "You gotta try this",
               "comments": "Lorem ipsum dolor sit amet, ut salutatus constituam ius, vix an meis assentior philosophia.",
               "price": 4,
               "purchased": "Yes",
               "flavors": ["pepper", "dry"],
               "userID": "000000"
            },
            {
               "rating": 5,
               "title": "It's great. I bought a whole case!",
               "comments": "Lorem ipsum dolor sit amet, ut salutatus constituam ius, vix an meis assentior philosophia.",
               "price": 2,
               "purchased": "No",
               "flavors": ["spice", "dry", "pepper"]
            }
          ]
        }
      ]
    },
    {
      "name": "Boston Brewer",
      "streetAddress": "1 Oak Ave",
      "city": "Brighton",
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
               "title": "It's ok if you're already drunk",
               "comments": "Lorem ipsum dolor sit amet, ut salutatus constituam ius, vix an meis assentior philosophia.",
               "price": 3,
               "purchased": "Yes",
               "flavors": ["sweet", "fruity"],
               "userID": "000000"
            },
            {
               "rating": 2,
               "title": "Don't bother",
               "comments": "Lorem ipsum dolor sit amet, ut salutatus constituam ius, vix an meis assentior philosophia.",
               "price": 5,
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
               "title": "It's worth a taste",
               "comments": "Lorem ipsum dolor sit amet, ut salutatus constituam ius, vix an meis assentior philosophia.",
               "price": 3,
               "purchased": "Yes",
               "flavors": ["sweet", "fruity"],
               "userID": "000000"
            },
            {
               "rating": 2,
               "title": "It's great if you need to clean your toilet",
               "comments": "Lorem ipsum dolor sit amet, ut salutatus constituam ius, vix an meis assentior philosophia.",
               "price": 2,
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
