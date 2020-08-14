const express = require('express')
const app = express()
const port = process.env.PORT || 3000


app.set("views", path.join(__dirname, "client"));

app.get('/', (req, res) => {
  res.sendFile('index.html')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
