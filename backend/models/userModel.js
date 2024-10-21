const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const validator = require('validator');

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }, 
    password: {
        type: String,
        required: true
    }
});

const hasAlphanumeric = (username) => {
    const hasLetters = /[a-zA-z]/.test(username);
    const hasNumbers = /[0-9]/.test(username);

    return hasLetters && hasNumbers;
}

// static signup method
userSchema.statics.signup = async function (username, email, password) {

    // validation
    if (!email || !password || !username) {
        throw Error('All fields must be filled')
    }
    if (!validator.isAlphanumeric(username)) {
        throw Error('Must contain only alphanumeric characters');
    }
    if (!hasAlphanumeric(username)) {
        throw Error('Username must contain alphanumeric characters');
    }
    if (!validator.isEmail(email)) {
        throw Error('Invalid email')
    }
    if (!validator.isStrongPassword(password)) {
        throw Error("Password not strong enough")
    }

    const usernameExists = await this.findOne({ username });

    if (usernameExists) {
        throw Error('username already taken');
    }

    const emailExists = await this.findOne({ email });

    if (emailExists) {
        throw Error('Email already in use');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({ username, email, password: hash })

    return user;
}

//static login method 
userSchema.statics.login = async function (email, password) {

    // validation
    if (!email || !password) {
        throw Error('All fields must be filled')
    }

    const user = await this.findOne({ email });

    if (!user) {
        throw Error('Incorrect email');
    }

    if (!validator.isEmail(email)) {
        throw Error('Invalid email')
    }
    
    if (!validator.isStrongPassword(password)) {
        throw Error("Password not strong enough! It should contain both uppercase and lowercase alphabets, a number and a special character");
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        throw Error("Incorrect password");
    }

    return user;
}

module.exports = mongoose.model('User', userSchema);