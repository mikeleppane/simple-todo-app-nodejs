import express from 'express'
import morgan from 'morgan'
import bp from 'body-parser'

const PORT = process.env.PORT || 8000

const {urlencoded, json} = bp

const db = {
    todos: [],
}

const app = express()

app.use(urlencoded({extended: true}))
app.use(json())
app.use(morgan('dev'))

app.get('/todos', (req, res) => {
    res.json({data: db.todos})
})

app.post('/todo', (req, res) => {
    const newTodo = {complete: false, id: Date.now(), todo: req.query.todo}
    db.todos.push(newTodo)

    res.status(201).json({data: newTodo})
})

app.get('/todo/:id', (req, res) => {
    const todo = db.todos.find(t => t.id === +req.params.id
    )
    res.json({data: todo})
})

app.delete('/todo/:id', (req, res) => {
    db.todos = db.todos.filter(t => t.id !== +req.params.id)
    res.json({data: `Todo (${req.params.id}) removed`})
})

app.post('/todo/update', (req, res) => {
    const todo = db.todos.find(t => {
        if (t.id === +req.query.id) {
            if (typeof req.query.complete !== 'undefined') {
                if (req.query.complete === "true" || req.query.complete === true) {
                    t.complete = true
                } else {
                    t.complete = false
                }
            }
            if (typeof req.query.todo !== 'undefined') {
                t.todo = req.query.todo
            }
            return t
        }
    })
    res.json({data: todo})
})

app.listen(PORT, () => {
    console.log(`Server on http://localhost:${PORT}`)
})