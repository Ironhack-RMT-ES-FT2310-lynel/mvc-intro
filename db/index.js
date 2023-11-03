const mongoose = require("mongoose")
const MONGO_URI = "mongodb://127.0.0.1:27017/my-first-database"

mongoose.connect(MONGO_URI)
.then(() => {
  console.log("conectados a la DB correctamente")
})
.catch((error) => {
  console.log(error)
})