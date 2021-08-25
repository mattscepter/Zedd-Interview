const express = require("express");
const mongoose = require("mongoose");
const testimonialRouter=require("./addtestimonial")
const cors=require("cors")


const app = express();

mongoose
  .connect('mongodb://localhost:27017/MyDb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected"));

  app.use(cors())
  app.use(express.json())
  app.use("/api", testimonialRouter);

  app.listen(5000, () => {
    console.log(`Listening on port 5000`);
  });
  