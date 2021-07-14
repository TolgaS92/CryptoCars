const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User.js');

const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const userExist = await User.findOne({ email });
        if(!userExist) return res.status(404).json({ message: "User doesnt't exists."});
        
        const passwordCorrection = await bcrypt.compare(password, userExist.password);

        if(!passwordCorrection) return res.status(400).json({ message: "Invalid password!"});

        const token = jwt.sign({ email: userExist.email, id: userExist._id}, 'test', { expiresIn: "1h"});

        res.status(200).json({ result: userExist, token});
    } catch (error) {
        res.status(500).json({ message: "Something went wrong!" });
    }
};

const signup = async (req, res) => {
    const { firstName, lastName, email, password, confirmPassword} = req.body;
    
    try {
        const userExist = await User.findOne({ email });
        if(userExist) return res.status(400).json({ message: "User already exists."});

        if(password !== confirmPassword) return res.status(400).json({ message: "Passwords doesn't match!"});

        const hashedPassword = await bcrypt.hash(password, 12);
        
        const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}`});

        const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: "1h"});

        res.status(200).json({ result , token});
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Something went wrong!" });
    }
};

module.exports = {
    signin,
    signup
  };