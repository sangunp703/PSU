const express = require('express')
const app = express()
const port = 3001

app.listen(port, () => {
  console.log('server is running => ' + `http://localhost:${port}`)
})

app.use('/', express.static('./public'))
app.use('/opening', express.static('./public'))
app.use('/introduction', express.static('./public'))
app.use('/history', express.static('./public'))
app.use('/work', express.static('./public'))
app.use('/contact', express.static('./public'))