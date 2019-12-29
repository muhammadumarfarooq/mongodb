const User = require("../src/user");
const assert = require("assert");

describe("Creating records", () => {
  it("save a user", done => {
    const name = new User({ name: "Umar" });
    name
      .save()
      .then(() => {
        assert(!name.isNew);
        done();
      })
      .catch(done);
  });
});
