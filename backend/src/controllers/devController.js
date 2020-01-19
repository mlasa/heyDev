const axios = require('axios')
const devSchema = require('../models/dev')
const toArray = require ('../utils/parseStringAsArray')

const store = async (req,res)=>{
	const {github_username,techs,latitude,longitude} = req.body

	const dev = await devSchema.findOne({github_username})
	if(dev){
		return res.status(400).send( {error:'User already exists'})
	}

	const responseApi = await axios.get(`https://api.github.com/users/${github_username}`)
	const {name = login,avatar_url,bio} = responseApi.data

	const techsArray = toArray(techs,',')

	const location = {
		type:'Point',
		coordinates:[longitude,latitude]
	}
	const newDev = await devSchema.create({
		github_username,
		name,
		avatar_url,
		bio,
		techs:techsArray,
		location
	})

	return res.json(newDev)
}

const index = async (req,res)=>{
	const devs = await devSchema.find()
	return res.json(devs)
}
module.exports = {store,index}
