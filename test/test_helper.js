const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const connectURI = "mongodb://umar:Get12345@ds357708.mlab.com:57708/demo-data";

before(done => {
  mongoose.connect(connectURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  mongoose.connection
    .once("open", () => {
      done();
    })
    .on("error", error => {
      console.warn("Warning", error);
    });
});

beforeEach(done => {
  mongoose.connection.collections.users.drop(() => {
    done();
  });
});
