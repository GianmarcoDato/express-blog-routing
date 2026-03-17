const express = require('express')
const router = express.Router()
const postController = require('../controllers/postController')


//index (cRud)
router.get('/', postController.index)
//show (cRud)
router.get('/:id',postController.show)
//destroy (cruD)
router.delete('/:id', postController.destroy)


//store (Crud)
router.post('/', (req, res) => {
  console.log("Hai chiesto di creare un nuovo post")
  res.json("hai chiesto di creare un nuovo post")
})

 //update (crUd)
router.put('/:id', (req, res) => {
    console.log(`Hai chiesto di aggiornare il post con ID: ${req.params.id}`)
    res.json(`Hai chiesto di aggiornare il post con ID: ${req.params.id}`)
 })

 //modify (crUd)
router.patch('/:id', (req, res) => {
  console.log(`Hai chiesto di modificare il post con ID: ${req.params.id}`)
  res.json(`Hai chiesto di modificare il post con ID: ${req.params.id}`)
 })

 
module.exports = router