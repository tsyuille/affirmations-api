const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const affirm = {
    1: {  
        "id": 1,
        "text": "Sometimes you win. Sometimes you learn."
    },
    2: {
        "id": 2,
        "text": "There’s nothing wrong with quitting. But don’t just quit when it gets difficult. Quit when you no longer want it."
    }, 
    3: {
        "id": 3,
        "text": "No one in the world can do what you do in the way that you do it."
    },
    4: {
        "id": 4,
        "text": "You are growing and making progress."
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:id', (req, res) => {
    const affirmId = Number(req.params.id)
    if(affirm[affirmId]) {
        res.json(affirm[affirmId])
    } else {
        res.json(affirm[1])
    }
    
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is now running on port ${PORT}`)
})