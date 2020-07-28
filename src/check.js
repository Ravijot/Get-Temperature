

const request = require('request')

const weather = (address,callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + address + '&units=metric&appid=e45f368ccd1bacde7e5865479391de71'
    request({ url: url,json:true }, (error, {body}) => {
        if(error)
        {
           callback('Unable To Connect The Web Services',undefined)
        }
        else if(!body.main || !body.main.temp || !body.name) {
            callback("Unable to find the location or data", undefined);
        } 
        
        /*if we use json:true in arguement then there is no need of writing this 
        const data = JSON.parse(response.body)
        console.log(data.main)*/
        else
        {  
         callback(undefined,{
             temprature:body.main.temp,
             cityname:body.name,
            

         })
        }
    })
}
module.exports = weather