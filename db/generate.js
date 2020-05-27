
module.exports = function() {
  let faker = require("faker")
  let _ = require("lodash")

  return {
    users: _.times(32, function(n){
      return {
        id: n + 1,
        name: faker.name.findName(),
        phone: faker.phone.phoneNumber(),
        email: faker.internet.email()
      }
    })
  }
}

