const express = require('express')
const pg = require('pg')
const app = express()
const port = process.env.PORT || 3000
const databaseuri = process.env.DATABASE_URL;


var client = new pg.Client(databaseuri);
client.connect();


app.use(express.static('client'));
app.get('/', (req, res) => {
  res.sendFile('index.html')
})
app.listen(port, () => {
  console.log(`Server HTTP listening at http://localhost:${port}`)
  console.log(`Database endpoint at ${databaseuri}`);
})
