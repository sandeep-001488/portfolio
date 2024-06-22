const express=require("express");
require("./db/conn");
const Contact=require("./models/contacts")

const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors('*'));

app.post("/contact", async (req, res) => {
  try {
    const { username, email, message } = req.body;

    const data = {
      username,
      email,
      message,
    };

    await Contact.create(data);
    res.status(201).send({ message: "Data saved successfully" });
  } catch (error) {
    console.error("Error saving data:", error);
    if (error.code === 11000) {
      res.status(400).send({ error: "Email id is already present" });
    } else {
      res.status(500).send({ error: "Error saving data" });
    }
  }
});

app.listen(port, () => {
  console.log(`Port connected at ${port}`);
});