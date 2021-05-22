const mongoose = require("mongoose");
bcrypt = require(bcrypt);
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    SignUp: [
      {
        FirstName: {
            type: String,
        },
        LastName: {
            type: String,
        },
        email: {
            type: String, 
            lowercase: true, 
            required: [true, "can't be blank"], 
            match: [/\S+@\S+\.\S+/, 'is invalid'],
        },
        Password: {
            type: String,
            required: [true, "can't be blank"],
            allowNull: false,
            validate: {
                len: [8],
            },
            bcrypt: true,
            rounds: 3,
        },
      },
    ],
});

const User = mongoose.model("User", UserSchema);
module.exports = User;