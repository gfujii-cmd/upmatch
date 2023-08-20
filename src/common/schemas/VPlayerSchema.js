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
      email: {
        type: "number",
      },
      password: {
        type: "string",
      },
    },
    required: ["name", "surname", "nickname", "email", "password"],
    additionalProperties: false,
  };