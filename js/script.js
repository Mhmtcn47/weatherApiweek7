
const ClientId='e4b9533a362315da69e6d3c6b20fc14d'
var cityName=`cityName`

const form = document.querySelector('form')
form.addEventListener('submit',getToken)

 async function getToken(event){
    event.preventDefault()
    const city =event.target[0].value
    // const res =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=e4b9533a362315da69e6d3c6b20fc14d`)
    console.log(city)
 }
 






// funcTo Grap cityName
// then Make 
// Api call Then
// JSONevent.preventDefault
/* When the input field receives input, convert the value from fahrenheit to celsius */
function temperatureConverter(valNum) {
   valNum = parseFloat(valNum);
   document.getElementById("outputCelsius").innerHTML = (valNum-32) / 1.8;
 }