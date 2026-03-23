const express = require('express')
const postsRouter = require('./routers/posts')
const errorHandler = require('./middleware/errorHandler')
const notFound = require('./middleware/notFound')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use (express.json())
app.use('/posts', postsRouter)
app.use(notFound)
app.use(errorHandler)



//welcome screen
app.get('/', (req, res) => {
  res.send('Server del mio blog')
})


// Avvio applicazione
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})