module.exports = {
    type: "object",
    properties: {
      name: {
        type: "string",
      },
      surname: {
        type: "string",
      },
      nickname: {
        type: "string",
      },
      // email: {
      //   type: "number",
      // },
      // password: {
      //   type: "string",
      // },
      totalPoints: {
        type: "number"
      }
    },
    required: ["name", "surname", "nickname"],
    additionalProperties: false,
  };