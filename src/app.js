const express= require('express')
const path = require('path')
const app = express()
const weather = require('./check.js')
var port = process.env.PORT || 5000
const { response } = require('express')
const { maxHeaderSize } = require('http')
const publicdir = path.join(__dirname, '../public')
app.set('view engine','hbs')
app.use(express.static(publicdir))
app.get('/weather', (req, res) => {
    const address = req.query.address
    if (!address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }

    weather(address, (error, {temprature,cityname} = {}) => {
        if (error) {
            return res.send({ error })
        }
        res.send({
            temprature,
            cityname,
           
            
        })
      
    
    })
})

app.get('*',(req,res) => {
    res.send('404 Error')
})
app.listen(port,() => {
    console.log('Server started at http://localhost:5000')
})