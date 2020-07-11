
const mongoose = require('mongoose')
const express = require('express')

const app = express()

const Student = mongoose.model('Students', {
  name: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true,
    enum: [
      'Programacion',
      'Ingles',
      'Cocina'
    ]
  },
  age: {
    type: Number,
    min: 18
  }
})

app.get('/students', async (request, response) => {
  const allStudents = await Student.find()

  response.json({
    success: true,
    data: {
      students: allStudents
    }
  })
})

mongoose.connect('mongodb+srv://charles:kodemia123@kodemia-node-live.eet2k.mongodb.net/school?retryWrites=true&w=majority', {
  useNewUrlParser: true, 
  useUnifiedTopology: true
}, () => {
  console.log('DB connected')
  app.listen(8080, () => {
    console.log('Server is ready')
  })
})




