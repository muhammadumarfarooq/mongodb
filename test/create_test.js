const assert = require("assert");
const User = require("../src/user");

describe("Creating records", () => {
  it("save a user", () => {
    const name = new User({ name: "Umar" });
    name.save();
  });
});
