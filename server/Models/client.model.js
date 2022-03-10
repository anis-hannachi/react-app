const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const clientSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, required: true, unique: true },
    note: { type: Number, required: true },
  },
  {
    timestamps: true,
  },
  {
    collection: "clients",
  }
);

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
