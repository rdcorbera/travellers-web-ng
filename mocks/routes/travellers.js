const TRAVELLERS = [
  {
    id: 1,
    firstname: "John",
    lastname: "Doe",
    country: "Argentina"
  },
  {
    id: 2,
    firstname: "Jane",
    lastname: "Doe",
    country: "Colombia"
  },
  {
    id: 3,
    firstname: "Alice",
    lastname: "Doe",
    country: "Perú"
  },
];

module.exports = [
  {
    id: "get-travellers", // id of the route
    url: "/api/travellers", // url in express format
    method: "GET", // HTTP method
    variants: [
      {
        id: "success", // id of the variant
        response: {
          status: 200, // status to send
          body: TRAVELLERS, // body to send
        },
      },
      {
        id: "error", // id of the variant
        response: {
          status: 400, // status to send
          body: {
            // body to send
            message: "Error",
          },
        },
      },
    ],
  },
  {
    id: "get-traveler", // id of the route
    url: "/api/travellers/:id", // url in express format
    method: "GET", // HTTP method
    variants: [
      {
        id: "success", // id of the variant
        response: {
          status: 200, // status to send
          body: TRAVELLERS[0], // body to send
        },
      },
      {
        id: "real", // id of the variant
        response: (req, res) => {
          const travelerId = req.params.id;
          const traveler = TRAVELLERS.find((travelerData) => travelerData.id === Number(travelerId));
          if (traveler) {
            res.status(200);
            res.send(traveler);
          } else {
            res.status(404);
            res.send({
              message: "Traveler not found",
            });
          }
        },
      },
    ],
  },
];