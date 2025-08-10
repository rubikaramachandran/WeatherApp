 ///    https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=dd5f384d18de1bd303fa110343e0e0fe&units=metric


 let apikey="dd5f384d18de1bd303fa110343e0e0fe";
 let apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

 


  let inp=document.getElementsByTagName("input")[0]
  let btn=document.querySelector("#but")
  let imgicon=document.querySelector('.icons')


async function checkweather(city){


    let response=await fetch(apiurl+city +`&appid=${apikey}`);
    

    if(response.status==404){
      document.querySelector(".error").style.display="block"
      document.querySelector(".weather").style.display="none "
    }
    else{
      var data=await response.json()

 document.querySelector(".city").innerHTML=data.name;
   document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°C" ;
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/hr";

    if(data.weather[0].main=="Clouds"){
      imgicon.src="images/clouds.png"
    }
    else if(data.weather[0].main=="Clear"){
 imgicon.src="images/clear.png"
    }

       else if(data.weather[0].main=="Rain"){
 imgicon.src="images/rain.png"
    }
       else if(data.weather[0].main=="Drizzle"){
 imgicon.src="images/drizzle.png"
    }
       else if(data.weather[0].main=="Mist"){
 imgicon.src="images/mist.png"
    }
       else if(data.weather[0].main=="Snow"){
 imgicon.src="images/snow.png"
    }
    
 document.querySelector(".error").style.display="none"
 document.querySelector(".weather").style.display="block"
    

    }

   
}  

btn.addEventListener("click", ()=>{
  console.log("button clicked")
  checkweather(inp.value)
})

  