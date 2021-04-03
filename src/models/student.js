const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    major:{
        type:String,
        required:true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    gpa: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0 || value>4) {
                throw new Error('Gpa should be [0,4]')
            }
        }
    }
    ,token:[{
        token: {
            type: String,
            required: true
        }
    }]

})

userSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens


    return userObject
}

userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, 'thisismynewcourse')

    user.tokens = user.tokens.concat({ token })
    await user.save()

    return token
}
const Student = mongoose.model('Student', userSchema)

module.exports = Student