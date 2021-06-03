/* const mongoose = require("mongoose");

const Schema = mongoose.Schema;

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
module.exports = User; */
"use strict";
module.exports = (mongoose) => {
  const userSchema = new mongoose.Schema(
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
  userSchema.pre("save", async function (next) {
    const hash = await bcrypt.hash(this.password, Number(bcryptSalt));
    this.password = hash;
    next();
  });

  const User = mongoose.model("User", userSchema);
  return User;
};