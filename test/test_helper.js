const mongoose = require("mongoose");

const connectURI = "mongodb://umar:Get12345@ds357708.mlab.com:57708/demo-data";

mongoose.connect(connectURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection
  .once("open", () => console.log("Good to go"))
  .on("error", error => {
    console.warn("Warning", error);
  });

beforeEach(done => {
  mongoose.connection.collections.users.drop(() => {
    done();
  });
});
