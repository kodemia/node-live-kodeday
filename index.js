
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

app.use(express.json())

app.get('/students', async (request, response) => {
  try{
    const allStudents = await Student.find()
  
    response.json({
      success: true,
      data: {
        students: allStudents
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

app.post('/students', async (request, response) => {
  const studentInfo = request.body

  const newStudent = await Student.create(studentInfo)

  response.json({
    success: true,
    data: {
      student: newStudent
    }
  })
})

app.delete('/students', () => {
  
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




