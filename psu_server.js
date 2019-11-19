const express = require('express')
const app = express()
const port = 3001
const fs = require('fs');
 
app.listen(port, () => {
  console.log('server is running => ' + `http://localhost:${port}`)
})

app.get('/api/screenshot', (req, res) => {
  const title = req.query.title
  const imgList = []
  fs.readdir('./public/resource/screenshot/', function(err, filelist){
    for(let i = 0; i < filelist.length; i++){
      if(filelist[i].indexOf(title) != -1)  imgList.push(filelist[i])
    }
    res.json({
      list: imgList
    })
  })
})

app.use('/', express.static('./public'))
app.use('/opening', express.static('./public'))
app.use('/introduction', express.static('./public'))
app.use('/history', express.static('./public'))
app.use('/work', express.static('./public'))
app.use('/contact', express.static('./public'))