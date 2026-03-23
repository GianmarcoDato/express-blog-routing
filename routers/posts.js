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
router.post('/', postController.store)
//update (crUd)
router.put('/:id',postController.update) 
//modify (crUd)
router.patch('/:id', postController.modify)

 
module.exports = router