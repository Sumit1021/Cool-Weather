

function temp(stop) {
  let city = document.getElementById("input").value;
  const API_KEY = `ad9c2da2078f8ded49209f8b9f399e19`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((x) => x.json())
    .then((obj) => {
      showData(obj);
    }).catch(()=>errorMSG());
}

function errorMSG()
{
 let err=document.getElementById("errorMsg");
 err.innerHTML="City not found"
 err.style.cssText="color:red;margin-top:10px;"
 setTimeout(() => {
   err.innerHTML=""
 }, 1000);
}

function showData(data) {
  console.log(data)
  let img = document.getElementById("img");
  let cityName = document.getElementById("city");
  let countryName = document.getElementById("country");
  // let tempBox=document.getElementById('temp-Box')
  var temp = document.getElementById("temp");
  var realfeel = document.getElementById("feel-temp");
  var cityTemp=data.main.temp;
  var cityrealfeel=data.main.feels_like;


  img.src = `icons/${data.weather[0].icon}.png`;
  // img.src = data.weather[0].icon + ".png";

  cityName.innerHTML = data.name;

  countryName.innerHTML = data.sys.country;

  temp.innerHTML = cityTemp;

  realfeel.innerHTML = cityrealfeel + "&#8451";
  
  // temp.addEventListener('click',changeUnit(cityTemp))

}

// function changeUnit()
// {
//   var temp = document.getElementById("temp");
//   let far=( temp.innerHTML * 9/5) + 32
//   console.log(far)
//   temp.innerHTML=Math.round(far);
// }
