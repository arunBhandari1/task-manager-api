const mongoose = require('mongoose')
const validator = require('validator')

const Student = mongoose.model('Student', {
    name: {
        type: String,
        required: true,
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
            if (value < 0) {
                throw new Error('Gpa is non negative number')
            }
        }
    }
})

module.exports = Student