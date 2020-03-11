
//Problem Data

    order: {

        products: [ { id: 1, cannnotPayWith: “paypal”

            },

      {

          id: 2,                canPayWith: “creditCard, paypal”

      }]}

    userPIs: [{

   id: “A”

                type: “creditCard”              },{

   id: “B”

                type: “paypal”              },{

   id: “C”

                type: “bankAccount”              }, ]

//Specs:

    //A single product can have either canPayWith or cannotPayWith but not both.
    //Function must return an empty array if no PIs are suitable for the order.
    //Other code already checks the user has PIs, the order has products, etc.