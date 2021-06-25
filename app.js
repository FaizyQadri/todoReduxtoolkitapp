const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 5000;
const User = require("./models/user");
const bcrypt = require("bcryptjs");
const cors = require('cors')
const jwt = require("jsonwebtoken");
const { JWT_SECRET, MOGOURI } = require("./config/keys");
const Todo = require("./models/todo");

mongoose.connect(MOGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log('connected to mongo yeahhh')
})
mongoose.connection.on('error', (err) => {
    console.log('error', err)
})
app.use(cors())
app.use(express.json())


const requireLogin = (req, res, next) => {
    const { authorization } = req.headers
    if (!authorization) {
        return res.status(401).json({ error: "you must be logged in" })
    }
    try {
        const { userId } = jwt.verify(authorization, JWT_SECRET)
        req.user = userId
        next()
    } catch (err) {
        return res.status(401).json({ error: "you must be logged in" })
    }

}


app.post('/signup', async (req, res) => {
    const { email, password } = req.body
    try {

        if (!email || !password) {
            return res.status(422).json({ error: "plase add all the fields", statusCode: 422 })
        }
        const user = await User.findOne({ email })
        if (user) {
            return res.status(422).json({ error: "user already exists with that email", statusCode: 422 })
        }
        const hashedPassword = await bcrypt.hash(password, 12)
        await new User({
            email,
            password: hashedPassword
        }).save()
        res.status(200).json({ message: "signup success you can login now", statusCode: 200 })

    } catch (err) {
        console.log(err)
    }

})

app.post('/signin', async (req, res) => {
    const { email, password } = req.body
    try {

        if (!email || !password) {
            return res.status(422).json({ error: "plase add all the fields", statusCode: 422 })
        }
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({ error: "user dosent exist with that email", statusCode: 404 })
        }
        const doMatch = await bcrypt.compare(password, user.password)
        if (doMatch) {
            const token = jwt.sign({ userId: user._id }, JWT_SECRET)
            res.status(201).json({ token, statusCode: 201 })
        } else {
            return res.status(401).json({ error: "email or password is invalid", statusCode: 401 })
        }

    } catch (err) {
        console.log(err)
    }

})

app.post('/createtodo', requireLogin, async (req, res) => {
    if (req.body.todo != "") {
        const data = await new Todo({
            todo: req.body.todo,
            todoBy: req.user,
        }).save()
        res.status(201).json({ message: data, statusCode: 201 })
    } else {

        res.status(404).json({ error: "field can't be empty", statusCode: 404 })
    }

})


app.get('/gettodos', requireLogin, async (req, res) => {
    const data = await Todo.find({
        todoBy: req.user
    })
    // res.status(200).json({ message: data, statusCode: 200 })
    // res.status(203).json({ statusCode: 203 })
    res.send({statusCode:204})
    


})

app.delete('/remove/:id', requireLogin, async (req, res) => {
    if (req.params.id != "") {
        const removedTodo = await Todo.findOneAndRemove({ _id: req.params.id })
        res.status(200).json({ message: removedTodo, statusCode: 200 })

    } else {
        res.status(404).json({ error: "something went wrong", statusCode: 404 })

    }
})


if (process.env.NODE_ENV == 'production') {
    const path = require('path')

    app.get('/', (req, res) => {
        app.use(express.static(path.resolve(__dirname, 'client', 'build')))
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}


app.listen(PORT, () => {
    console.log('server running on ', PORT)
})
