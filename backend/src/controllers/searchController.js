const devSchema = require('../models/dev')
const toArray = require ('../utils/parseStringAsArray.js')

const index  = async (req,res)=>{
	 const {techs,latitude,longitude} = req.query
	 const techsArray = toArray(techs,',')
	 const devs = await devSchema.find({
		 techs: {
			$in: techsArray
		 },
		 location:{
			 $near:{
				 $geometry:{
					 type:'Point',
					 coordinates:[longitude,latitude]
				 },
				 $maxDistance:10000,
			 }
		 }
	 })
	 console.log(devs)
	return res.json({devs})
}

module.exports = {index}