 const dbConnection = require('../data/db')


 function index (req, res) {
  const query = 'SELECT * FROM posts'

  dbConnection.query(query, (err, raws) => {
    if (err) {
      res.status(500).json({ error: 'db error', message: 'Errore di connessione al database' });
    }
    
  let results = raws
  if (req.query.tag) {
    results = raws.filter(post => post.tags.includes(req.query.tag))
  }
  res.json(results)
   
})}

function show (req, res) {

  const id = Number(req.params.id)
  console.log(`Hai chiesto di mostrare il post con ID: ${id}`)
  if (isNaN(id)) {
    return res.status(400).json({ error: 'invalid id', message: 'ID non valido' })
  }

  const query = 'SELECT * FROM posts WHERE id = ?'
  dbConnection.query(query, id, (err, raws) => {
    if (err) {
      res.status(500).json({ error: 'db error', message: 'Errore di connessione al database' });
    }
    if (raws.length === 0) {
      return res.status(404).json({ error: 'not found', message: 'Post non trovato' })
    }
    res.json(raws)
  })
 }

function destroy (req, res) {

  const id = Number(req.params.id)  
  if (isNaN(id)) {
    return res.status(400).json({ error: 'invalid id', message: 'ID non valido' })
  }

const quesry = 'DELETE FROM posts WHERE id = ?'
dbConnection.query(quesry, id, (err) => {
  if (err) {
    res.status(500).json({ error: 'db error', message: 'Impossibile eliminare il post' })
  }});
 return res.sendStatus(204);

}

function store (req, res) {
  console.log("Hai chiesto di creare un nuovo post", req.body)
  

  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
    tags: req.body.tags
  }
  posts.push(newPost)
  res.status(201).json(newPost)

}

function update (req, res) {
   
    const result = posts.find(post => post.id === Number(req.params.id))
    result.title = req.body.title
    result.content = req.body.content
    result.image = req.body.image
    result.tags = req.body.tags

  res.json(result)
  
    
 }
 

 function modify (req, res) {
  console.log(`Hai chiesto di modificare il post con ID: ${req.params.id}`, req.body)
  res.json(`Hai chiesto di modificare il post con ID: ${req.params.id}`)
 }

module.exports = {
  index,
  show,
  destroy,
  store,
  update,
  modify
  
}
