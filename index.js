
const mongoose = require('mongoose')

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

mongoose.connect('mongodb+srv://charles:kodemia123@kodemia-node-live.eet2k.mongodb.net/school?retryWrites=true&w=majority', {
  useNewUrlParser: true, 
  useUnifiedTopology: true
}, () => {
  console.log('DB connected')
  Student.create({
    name: 'Luis',
    course: 'Ingles',
    age: 30
  })
})




