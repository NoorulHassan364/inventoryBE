const mongoose = require("mongoose");

const app = require("./app");
require("dotenv").config({ path: `${__dirname}/../.env` });

mongoose
  .connect(process.env.DBlink, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB successfully connected!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT || 5000, () => {
  console.log("app is Listen at ", process.env.PORT);
});
