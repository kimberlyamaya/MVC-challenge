const {formatDate} = require('../utils/helpers');

test("formatDate() returns MM/DD/YYYY", () => {
  const date = new Date("2021-04-14 16:12:03");

  expect(formatDate(date)).toBe("4/14/2021");  
});