const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 1337;
const path = require("path");
const mongoose = require("mongoose");
const Client = require("./Models/client.model");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../client/", "src")));

mongoose
  .connect(
    "mongodb+srv://mehdi2010:mehdi2010@restapi.ac2sg.mongodb.net/clients?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("connected"))
  .catch((e) => console.log(e));

app.post("/api/saveclient", async (req, res) => {
  try {
    const result = await Client.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      note: req.body.note,
    });
    res.send(result);
  } catch (error) {
    console.error(error);
  }
});

app.get("/api/client", (req, res) => {
  Client.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
