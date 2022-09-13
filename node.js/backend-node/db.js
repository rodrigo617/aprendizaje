const db = require('mongoose')

db.Promise = global.Promise
//'mongodb+srv://user:user1234@telegrom.l6j9err.mongodb.net/?retryWrites=true&w=majority'
async function connect(url) {
    await db.connect(url, {
        useNewUrlParser: true,
    })
    console.log('[db] Contectada con exito')

}

module.exports = connect