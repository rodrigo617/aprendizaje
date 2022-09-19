
// Import the mongoose module
const mongoose = require("mongoose")

// Set up default mongoose connection
const mongoDB = "mongo://127.0.0.1/my_database"
mongoose.connect(mongoDB, {})