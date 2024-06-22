const express=require("express")
const mongoose=require("mongoose")
const validator=require("validator")

const contactSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 3 
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email id is already present"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    }
  },
  message: {
    type: String,
    minlength: 10,
    required: true
  }
});

const Contact = mongoose.model("Contact", contactSchema);
module.exports=Contact