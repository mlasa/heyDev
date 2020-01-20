const socketio = require	('socket.io')
const toArray = require	('../src/utils/parseStringAsArray')
const calculateDistance = require	('../src/utils/calculateDistance')

let io
const connections = [] // seria melhor guardar no banco

exports.setupWebsocket = (server) =>{
	console.log('ok')
	io = socketio(server)

	io.on('connection',socket=>{
		const {latitude,longitude,techs} = socket.handshake.query

		connections.push({
			id:socket.id,
			coordinates:{latitude:Number(latitude), longitude: Number(longitude)},
			techs:toArray(techs,','),
		})
	})
}

exports.findConnection = (coordinates,techs)=>{
	return connections.filter(connections=>{
		return calculateDistance(coordinates,connection.coordinates)<10 //km
			&& connection.techs.some(item =>techs.includes(item))
	})
}

exports.sendMessage = (to,message,data)=>{
	to.array.forEach(connection => {
		io.to(connection.id).emit(message,data)
	});
}