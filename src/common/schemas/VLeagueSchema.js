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
      },
      game: {
        type: "string"
      },
      status: {
        type: "boolean"
      }
    },
    required: ["startDate", "endDate", "typeOfLeague", "game", "status"],
    additionalProperties: false,
  };