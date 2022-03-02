const API_KEY = `785dadbe06cdf62138fe3dd8ead29aa0`

const search = () =>{
    const searchCountry = document.getElementById('getInputsearch').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchCountry}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperatre(data))
}
const cityName = (id,temp) =>{
    document.getElementById(id).innerText = temp;
}
const displayTemperatre = temparature =>{
    cityName('city',temparature.name);
    cityName('showTemp',temparature.main.temp);
    cityName('weather',temparature.weather[0].main);
    //set temperatre icon
    const url =`http://openweathermap.org/img/wn/${temparature.weather[0].icon}@2x.png`
    const imgIcon = document.getElementById('setIcon')
    imgIcon.setAttribute('src',url);

    console.log(temparature); 
}