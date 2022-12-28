const mongoose = require("mongoose"); 

const userSchema = new mongoose.Schema({
  username: {
    type: String, 
    required: true 
  }, 
  password: {
    type: String, 
    required: true 
  }, 
  roles: [{
    type: String, 
    default: "Emloyee"
  }], 
  active: {
    type: Boolean, 
    required: true 
  }
})

module.exports = mongoose.modeul("User", userSchema)