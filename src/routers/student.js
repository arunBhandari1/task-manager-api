const express = require('express')
const Student = require('../models/student')
const router = new express.Router()

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, 'thisismynewcourse')
        const student = await Student.findOne({ _id: decoded._id, 'tokens.token': token })

        if (!student) {
            throw new Error()
        }

        req.token = token
        req.student = student
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' })
    }
}
router.post('/student', async (req, res) => {
    const student = new Student(req.body)

    try {
        await student.save()
        const token = await student.generateAuthToken()
        res.status(201).send({student,token})
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/student', auth,async (req, res) => {
    res.send(req.student)
})

router.get('/student/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const student = await Student.findById(_id)

        if (!student) {
            return res.status(404).send()
        }

        res.send(student)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/student/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['major', 'email', 'gpa']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!student) {
            return res.status(404).send()
        }

        res.send(student)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/student/:id', async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id)

        if (!student) {
            return res.status(404).send()
        }

        res.send(student)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router