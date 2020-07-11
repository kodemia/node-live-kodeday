
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

// /students/123
// /students/abc
app.delete('/students/:id/:name', async (request, response) => {
  try {
    const id = request.params.id

    const studentDeleted = await Student.findByIdAndDelete(id)

    response.json({
      success: true,
      data: {
        student: studentDeleted
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

mongoose.connect('mongodb+srv://charles:kodemia123@kodemia-node-live.eet2k.mongodb.net/school?retryWrites=true&w=majority', {
  useNewUrlParser: true, 
  useUnifiedTopology: true
}, () => {
  console.log('DB connected')
  app.listen(8080, () => {
    console.log('Server is ready')
  })
})




