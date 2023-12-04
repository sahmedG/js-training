function citiesOnly(arr) {
    return arr.map(obj => obj.city.trim());
  }

  function upperCasingStates(arr) {
    return arr.map(state => state.replace(/\b\w/g, char => char.toUpperCase()));
  }

  function fahrenheitToCelsius(arr) {
    return arr.map(
        (item) =>
            Math.floor((Number(item.slice(0, -2)) - 32) * (5 / 9)).toString() +
            "°C"
    );
}

  function trimTemp(arr) {
    return arr.map((obj)=>{
        obj.temperature = obj.temperature.trim();
        return obj;
    });
  }

  function tempForecasts(arr) {
    return arr.map(obj => `${fahrenheitToCelsius([obj.temperature])[0]} in ${obj.city}, ${obj.state}`);
  }