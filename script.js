let city_name_heading=document.querySelector(".city-name--heading");
let masseg=document.querySelector(".massege");
let wether_icon=document.querySelector(".wether-icon");
let degree=document.querySelector(".degree");
let min=document.querySelector(".min");
let max=document.querySelector(".max");
let feel_like=document.querySelector(".feel-like");
let Humidity=document.querySelector(".Humidity");
let wind=document.querySelector(".wind");
let pressure=document.querySelector(".pressure");
let para=document.querySelector(".para");
let submit=document.querySelector(".submit-btn")
let cityName=document.querySelector(".city-input");
// this code will be make code reigion in to the english name country
let getcountryName = (code)=>{
  return new Intl.DisplayNames([code],{type:'region'}).of(code); 
}

function getTime(date){
  const options1 = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const dateTimeFormat3 = new Intl.DateTimeFormat('en-US', options1);
 return (dateTimeFormat3.format(date));
}

submit.addEventListener('submit',(e)=>{
  e.preventDefault();
  city=cityName.value;
  getwether();
  cityName.value="";
})

let city="West Bengal";
let getwether= async ()=>{
  const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a0b06669a793506ae54060f7df8a5fb6`;
  try{
    const res = await fetch(apiUrl);
    const data=await res.json()
    console.log(data.coord.dt)
    city_name_heading.textContent=`${data.name},${getcountryName(data.sys.country)}`;
    masseg.textContent=data.weather[0].main;
    wether_icon.innerHTML=`<img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" />`
    degree.innerHTML=`${Math.floor(data.main.temp)}&#176`
    min.innerHTML=`Minimum -${Math.floor(data.main.temp_min)}&#176`
    max.innerHTML=`Maximum - ${Math.floor(data.main.temp_max)}&#176`
    feel_like.innerHTML=`${Math.floor(data.main.feels_like)}&#176`
    Humidity.textContent=`${data.main.humidity}%`
    wind.textContent=data.wind.speed;
    pressure.textContent=`${data.main.pressure} hpa`
    para.innerHTML=getTime(data.coord.dt);
   
  }catch(error){

  }
}

document.addEventListener("load",getwether())