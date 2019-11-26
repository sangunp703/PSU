const express = require('express')
const app = express()
const PORT = process.env.PORT
const fs = require('fs');
 
app.listen(PORT, () => {
  console.log('server is running => ' + `http://localhost:${PORT}`)
})
// work페이지 뷰 스크린샷 리스트 제공 API
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
// history페이지 내용 제공 API
app.get('/api/history', (req, res) => {
  const history = JSON.parse(fs.readFileSync('./src/content/history.json')).item[req.query.index]
  res.json({historyBox: history})
})
//work페이지 내용 제공 API
app.get('/api/work', (req, res) => {
  const work = JSON.parse(fs.readFileSync('./src/content/work.json')).item[req.query.index]
  res.json({workBox: work})
})

app.use('/', express.static('./public'))
app.use('/test', express.static('./public'))
app.use('/test2', express.static('./public'))
app.use('/opening', express.static('./public'))
app.use('/introduction', express.static('./public'))
app.use('/history', express.static('./public'))
app.use('/work', express.static('./public'))
app.use('/contact', express.static('./public'))