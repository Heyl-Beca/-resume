
const express = require('express')
// express的body-parser中间件
const bodyParser = require('body-parser')
const fs = require('fs')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
console.log('hello node')

app.all('*', (req, res, next) => {
  // res.json('***')
  // 拦截所有请求
  next()
})
app.get('/Login', (req, res) => {
  fs.readFile('../src/data/user.json', (err, data) => {
    console.log(err, data)
    res.send(data)
  })
})
app.post('/User', (req, res) => {
  // 表单参数会放置在query
  // 路径参数 req.params
  // json参数 req.body
  res.send(req.body)
  // return res.send(req.query)
})
var server = app.listen(3000, function () {
  console.log('3000running....')
})
// ------------
function clone (origin) {
  return Object.assign({}, origin)
}

clone(server)
