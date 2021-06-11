const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const bcryptSalt = require('bcryptjs');
const Schema = mongoose.Schema;
'use strict';

const UserSchema = new Schema (
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);
// Hashes password automatically
UserSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, Number(bcryptSalt));
  this.password = hash;
  next();
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
