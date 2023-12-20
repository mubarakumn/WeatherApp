var input = document.querySelector('search-bar')

function weatherApp(){

   const Weather ={
        apikey:"0649d62977bf34e826abbfbc8c8ea6f2",
        url:"https://api.openweathermap.org/data/2.5/weather?q=",
        getWeather:function(){
             fetch(this.url+input.value+"&appid="+this.apikey).then((result)=>result.json()).then((weatherdata)=>this.displayWeather(weatherdata));
        },
        displayWeather:(weatherdata)=>{
            const{name,} = weatherdata;
            const{} = weatherdata;
            const{} = weatherdata;

            document.querySelector('.city').innerHTML = weatherdata.name ;
            // document.querySelector('.temp').innerHTML = ;
            // document.querySelector('.desc').innerHTML = ;
            // document.querySelector('.icon').innerHTML = ;
            // document.querySelector('.description').innerHTML = ;
            // document.querySelector('.humidity').innerHTML = ;
            // document.querySelector('.wind').innerHTML = ;
            // document.querySelector('.iftar').innerHTML = ;
        }
        }
    return weatherApp.getWeather;
}