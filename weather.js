const API_key = "c3181a680223a71820271afa09373431";
const base_url = "http://api.openweathermap.org/data/2.5/weather?";
const city_id = "5143966";
const final_url = base_url + "appid=" + API_key + "&id=" + city_id;
fetch(final_url)
  .then(response => response.json())
  .then(data => {
    const temp = data.main.temp;
    let uodMT = "As For Class ";
    let uodWTF = "Army Combat Uniform ";
    if (temp < 15) {
      uodMT += "Parka with scarf, with knit hat, wearing black gloves";
      uodWTF += "Gortex and Fleece with black fleece cap, wearing black gloves";
    } else if (temp < 25) {
      uodMT += "Parka with knit hat, wearing black gloves";
      uodWTF += "Fleece with black fleece cap, wearing black gloves";
    } else if (temp < 45) {
      uodMT += "Black jacket, wearing black gloves";
      uodWTF += "Fleece, wearing black gloves";
    } else if (temp < 50) {
      uodMT += "Black Jacket";
    }
    const uod = uodMT + "\n" + uodWTF;
  });

