
const express = require('express')

const app = express()

app.get('/', (request, response) => {
  response.json({
    success: true,
    message: 'HOLA MUNDO DESDE NODE EN EXPRESS'
  })
})

app.post('/', (request, response) => {
  response.json({
    success:true,
    message: 'Hola mundo con un post'
  })
})

app.listen(8080, () => {
  console.log('Server is linstening')
})
