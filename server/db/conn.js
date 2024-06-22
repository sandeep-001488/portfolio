const mongoose=require("mongoose")
require('dotenv').config();

const DB=`${process.env.URL}`

mongoose.connect(DB)
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => {
    console.log("No connection", err);
  });
