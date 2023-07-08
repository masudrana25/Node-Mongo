const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('I know how to sent node request...YAY!')
})

app.listen(3200, () => console.log(' listening on port 3200'));