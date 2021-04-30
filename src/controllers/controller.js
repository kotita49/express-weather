const axios = require("axios")
const API_KEY = "da2dbfe066bcaf3d9beda6d60e733701";
const Weather = require('../model/Weather')


exports.renderHomePage = (req, res) =>{
    res.render("index")
}
exports.getWeather=(req, res)=>{
    
    const city = req.body.city
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    const weather = new Weather(req.body.city)
    weather.validateUserInput();
    if(weather.errors.length){
        res.render("index", {
            error: weather.errors.toString()
        })
    } else{
     axios.get(url).then((response)=>{
        // console.log(response)
        //  if(!response){
        //     res.render("index", {
        //         weather: 'Location not found'
        //     })
        //  }
         const temp  = response.data.main.temp
         const location = response.data.name
        res.render("index", {
            weather: `It is currently ${temp} degrees C in ${location}`
        })
       //console.log(`It is currently ${response.data.main.temp} in ${response.data.name}`)
    }).catch((error) => {
console.log(error)
res.render("index", {
 weather: 'Location not found'
     })
    })
}

}
exports.renderAboutPage = (req, res)=>{
    res.render("about")
}