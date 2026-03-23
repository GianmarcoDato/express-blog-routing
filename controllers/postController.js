 const posts = require('../data/posts.data')


 function index (req, res) {
   res.json(posts)
}

function show (req, res) {
  console.log(`Hai chiesto di mostrare il post con ID: ${req.params.id}`)
  res.json(posts.find(post => post.id === Number(req.params.id)))
 }

function destroy (req, res) {
  const result = posts.find(post => post.id === Number(req.params.id))
  posts.splice(posts.indexOf(result), 1)
  console.log(`Hai chiesto di eliminare il post con ID: ${req.params.id}`, posts)
  res.sendStatus(204)
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
