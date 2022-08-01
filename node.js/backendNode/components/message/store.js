const db = require('mongoose')
const Model = require('./model')

//mongodb+srv://user:user1234@telegrom.l6j9err.mongodb.net/?retryWrites=true&w=majority
db.Promise = global.Promise
db.connect('mongodb+srv://user:user1234@telegrom.l6j9err.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})
console.log('[db] Contectada con exito')

function addMessage(message) {
    //list.push(message)
    const myMessage = new Model(message)
    myMessage.save()
}

async function getMessages(filterUser) {
    let filter = {}
    if (filterUser !== null) {
        filter = { user: filterUser }
    }
    const messages = await Model.find(filter)
    return messages
}

function removeMessage(id) {
    return Model.deleteOne({
        _id: id
    })
}

async function updateText(id, message) {
    const foundMessage = await Model.findOne({
        _id: id
    })

    foundMessage.message = message
    const newMessage = await foundMessage.save()
    return newMessage
}

module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText,
    remove: removeMessage,
    //get
    //update
    //delete
}