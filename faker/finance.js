const { faker } = require('@faker-js/faker');
function generateFinance () {
  var finance = []
  for (var id = 0; id < 50; id++) {
    var accountName = faker.finance.accountName()
    var accountNumber = faker.finance.accountNumber()
    var amount = faker.finance.amount()
    var pin = faker.finance.pin()
    finance.push({
      "accountName": accountName,
      "accountNumber": accountNumber,
      "amount": amount,
      "pin": pin
    })
  }
  return { "finance": finance }
}
module.exports = generateFinance
