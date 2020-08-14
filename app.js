const express = require('express')
const app = express()
const port = process.env.PORT || 3000


app.use(express.static('client'));


app.get('/', (req, res) => {
  res.sendFile('index.html')
})

app.listen(port, () => {
  console.log(`Server HTTP listening at http://localhost:${port}`)
  console.log(`Database endpoint at ${process.env.DATABASE_URL}`);
})
