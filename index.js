const express = require('express')
const app = express()

app.get('/', (req, res) => {
  const fruits = {
    Product: 'Apple',
    Price: 2000
  }
  res.send(fruits)
});

app.get('/fruits/banana', (req, res) => {
  res.send({Fruits : 'Banana', Quantity : 20, Price : 2222})
})

app.listen(3100, () => console.log(' listening on port 3100'));