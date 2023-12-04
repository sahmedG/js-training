function citiesOnly(arr) {
    return arr.map(obj => obj.city.trim());
  }

  function upperCasingStates(arr) {
    return arr.map(state => state.replace(/\b\w/g, char => char.toUpperCase()));
  }

  function fahrenheitToCelsius(arr) {
    const fToC = fahrenheit => `${Math.floor((parseInt(fahrenheit) - 32) * 5 / 9)}°C`;
    return arr.map(temp => fToC(temp.replace(/\D/g, '')));
  }

  function trimTemp(arr) {
    return arr.map((item) => {
        item.temperature = item.temperature.replaceAll(" ", "");
        return item;
    });
}

  function tempForecasts(arr) {
    return arr.map(obj => `${fahrenheitToCelsius([obj.temperature])[0]} in ${obj.city}, ${obj.state}`);
  }