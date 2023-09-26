module.exports = {
    type: "object",
    properties: {
      players: {
        type: "array",
      },
      endDate: {
        type: "string"
      },
      startDate: {
        type: "string"
      },
      typeOfLeague: {
        type: "string"
      },
      storeName: {
        type: "string"
      }
    },
    required: ["startDate", "endDate", "typeOfLeague"],
    additionalProperties: false,
  };