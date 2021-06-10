const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const jwtDecode = require("jwt-decode");
const { models } = require("../models");

const createToken = (user) => {
  // Sign the JWT

  return jwt.sign(
    {
      sub: user.id,
      name: user.name,
      email: user.email,
      iss: "auth.dubc",
      aud: "auth.dubc",
    },
    "itsasecret",
    { algorithm: "HS256", expiresIn: "1h" }
  );
};

const verifyPassword = (passwordAttempt, hashedPassword) => {
  return bcrypt.compare(passwordAttempt, hashedPassword);
};

const authPerson = async (req, res) => {
  try {
    const { email, password } = req.body;
    const person = await models.User.find({ email }).exec();

    if (!person) {
      console.log("authPerson");
      return res.status(403).json({ message: "Wrong email or password." });
    }
    console.log(`email: ${email}, password: ${password}`);
    console.log("person pwd", person);

    
    const passwordValid = await verifyPassword(password, person[0].password);
    console.log("21");
    if (passwordValid) {
      console.log("23");
      const { password, name, ...rest } = person;
      const userInfo = Object.assign({}, { ...rest });
      const token = createToken(person);

      const decodedToken = jwtDecode(token);
      const expiresAt = decodedToken.exp;
      console.log(`token: ${token}, expiresAt: ${expiresAt}, userInfo: ${userInfo}`);
      return res.status(200).json({
        token,
        expiresAt,
        userInfo,
        message: "Successful authentication!",
      });
    } else {
      return res.status(403).json({
        message: "Wrong email or password.",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

module.exports = {
  authPerson,
};