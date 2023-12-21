


const weatherApp = function(){
    // const btn = document.getElementById('button'); 
    const input = document.querySelector('.search-bar');

   const Weather={
        apikey:"0649d62977bf34e826abbfbc8c8ea6f2",
        url:"https://api.openweathermap.org/data/2.5/weather?q=",
        getWeather:function(){
             fetch(this.url+input.value+"&appid="+this.apikey)
             .then((result)=>result.json())
             .then((weatherdata)=>this.displayWeather(weatherdata));
        },
        displayWeather:(weatherdata)=>{
            const{description, icon} = weatherdata.weather[0];
            const{temp, humidity} = weatherdata.main;
            const{speed} = weatherdata.wind;
            const{name} = weatherdata;
            const{sunset} = weatherdata.sys;

            document.querySelector('.city').innerHTML = name ;
            document.querySelector('.temp').innerHTML ="Temp "+ (temp - 273).toFixed(2) +"<sup>0</sup>C";
            document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+icon+"@2x.png";
            document.querySelector('.desc').innerHTML = description;
            document.querySelector('.humidity').innerHTML ="Humidity: "+ humidity;
            document.querySelector('.wind').innerHTML ="Wind " +speed+ "km\\h";

            const iftartime = new Date(sunset * 1000);
            const hour = iftartime.getHours()
            const minute ="0"+ iftartime.getMinutes()
            const second ="0"+ iftartime.getSeconds()
            document.querySelector('.iftar').innerHTML = "iftar "+hour+":"+minute+":"+second;
        }
        }
    return Weather.getWeather();
}
// btn.onclick =  addEventListener('click', weatherApp);
document.querySelector('.search-bar').onclick =  addEventListener('keyup', weatherApp);
