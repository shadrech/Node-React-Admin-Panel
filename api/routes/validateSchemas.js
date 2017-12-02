module.exports = {
  NewUserSchema: {
    type: "object",
    properties: {
      firstname: {type: "string", title: "First Name field"},
      lastname: {type: "string", title: "Last Name field"},
      email: {type: "string", title: "Email"},
      password: {type: "string", minLength: 6, title: "Password"},
    },
    required: ["firstname", "lastname", "email", "password"]
  },

  EditUserSchema: {
    type: "object",
    properties: {
      firstname: {type: "string"},
      lastname: {type: "string"},
      email: {type: "string"}
    }
  }
}
