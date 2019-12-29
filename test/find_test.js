const User = require("../src/user");
const assert = require("assert");

describe("Finding Records", () => {
  let malik;
  beforeEach(done => {
    malik = new User({ name: "Malik" });
    malik
      .save()
      .then(() => done())
      .catch(error => {
        console.log(error);
      });
  });
  it("Finding a User", () => {});
});
