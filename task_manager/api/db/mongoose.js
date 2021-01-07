const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://simonholmes001:CPIWgGkVC8SizQhD@cluster0.hzfck.mongodb.net/recipe_list?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDB

// CPIWgGkVC8SizQhD
