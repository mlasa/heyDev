const {Router} = require('express')
const router = Router()
const devController = require('./controllers/devController')
const searchController = require('./controllers/searchController')

router.get('/',(req,res)=>{
	return res.json({message:"Hello Omnistack Week 1.0 "})
})

router.post('/devs', devController.store)
router.get('/devs', devController.index)
router.get('/search', searchController.index)

module.exports = router