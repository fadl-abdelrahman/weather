
var input = document.querySelector('.inputvalue')
var submit = document.querySelector(".btnsearch")


async function getweather(){
let res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=c2a2dec371074d4f81e210517221510&q=${input.value}&days=3`) 
var  result =  await res.json()
 allresult = result;
 document.querySelector('.test').innerHTML= `<div class="section-head text-center text-light">
 <h6>${allresult.location.localtime}</h6>
 </div>
 <div class="section-body text-center mt-3">
 <h6>${allresult.location.name}</h6>
 <h1>${allresult.current.temp_c}℃</h1>
 <h6>${allresult.current.condition.text}</h6>
 <img src="http:${allresult.current.condition.icon}" alt="">
 <p>20%   18km/h    East</p>
 </div>`

// first day for forcast

 document.querySelector('.firstday').innerHTML= `<div class="section-head text-center  text-light">
 <h6>${allresult.forecast.forecastday[1].date}</h6>
</div>
<div class="section-body mt-4 text-center pt-1">
<img src="http:${allresult.forecast.forecastday[1].day.condition.icon}" alt="">
 <h2>${allresult.forecast.forecastday[1].day.maxtemp_c}℃</h2>
 <h4>${allresult.forecast.forecastday[1].day.mintemp_c}℃</h4>
 <p>${allresult.forecast.forecastday[1].day.condition.text}</p>
</div>`

// second day for forcast

document.querySelector(".secondday").innerHTML= `<div class="section-head text-center  text-light">
<h6>${allresult.forecast.forecastday[2].date}</h6>
</div>
<div class="section-body mt-4 text-center pt-1">
<img src="http:${allresult.forecast.forecastday[1].day.condition.icon}" alt="">
<h2>${allresult.forecast.forecastday[2].day.maxtemp_c}℃</h2>
<h4>${allresult.forecast.forecastday[2].day.mintemp_c}℃</h4>
<p>${allresult.forecast.forecastday[2].day.condition.text}</p>
</div>`
}









