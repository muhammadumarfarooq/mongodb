const assert = require("assert");
const User = require("../src/user");

describe("Creating records", () => {
  it("save a user", () => {
    const umar = new User({ name: "Umar" });
    umar.save();
  });
});
