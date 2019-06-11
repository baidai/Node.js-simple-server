const EventEmitter = require('events');
const uuid = require('uuid')  // creates random ids 

class Lo extends EventEmitter{
	log(msg) {
		//Call event
		// when log is called, show new id and message sent
		this.emit('message', {id: uuid.v4(), msg})
	}
}

module.exports = Lo()


