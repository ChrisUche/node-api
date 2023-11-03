const express = require('express')
const mongoose = require('mongoose')
const Risk = require('./modals/riskModal')
const app = express()

app.use(express.json())
//routes

app.get('/', (req, res)=> {
    res.send('Hello Node API')
})

app.get('/blog', (req, res)=> {
    res.send('Hello blog')
})

app.get('/risk', async(req, res)=> {
    try {
            const risk = await Risk.find({});
            res.status(200).json({risk})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.post('/risk', async(req, res) => {
    try {
        const risk = await Risk.create(req.body)
        res.status(200).json(risk)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})

    }
})


mongoose.
connect('mongodb+srv://admin:12345678admin@interviewapi.gstxcqs.mongodb.net/Node-Api?retryWrites=true&w=majority')
.then(() => {
    console.log('connected to mongodb')
    app.listen(3000, () => {
        console.log('Node API is running on port 3000')
    })
}).catch((error) => {
    console.log(error)
})