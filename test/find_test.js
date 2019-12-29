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
  it("Finding a User", () => {
    User.find({ name: "Malik" }).then(user => {
      assert(malik._id.toString() === user[0]._id.toString());
    });
  });

  it("Find User with ID", done => {
    User.findOne({ _id: malik._id })
      .then(user => {
        assert(user.name === malik.name);
        done();
      })
      .catch(error => {
        console.log(error);
      });
  });
});
