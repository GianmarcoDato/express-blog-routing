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

module.exports = {
  index,
  show,
  destroy
}