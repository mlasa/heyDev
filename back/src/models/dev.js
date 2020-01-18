const mongoose = require('mongoose')
const pointSchema = require('./utils/pointSchema')

const devSchema = new mongoose.Schema({
	name: {type:String, require:true},
	github_username: {type:String, require:true},
	bio: {type:String, require:true},
	avatar_url:{type:String, require:true},
	techs: {type:[String], require:true},
	location:{type:pointSchema,index:'2dsphere'}
})

module.exports = mongoose.model('dev',devSchema)