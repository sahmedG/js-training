function dogYears(planet, ageInSeconds) {
    const earthYearInSeconds = 31557600; 

    const orbitalPeriods = {
      earth: 1.0,
      mercury: 0.2408467,
      venus: 0.61519726,
      mars: 1.8808158,
      jupiter: 11.862615,
      saturn: 29.447498,
      uranus: 84.016846,
      neptune: 164.79132,
    };

    const dogYearsOnPlanet = ageInSeconds / (orbitalPeriods[planet] * earthYearInSeconds);
    const dogYearsOnPlanet2 = dogYearsOnPlanet *7;
    const roundedDogYears = Math.round(dogYearsOnPlanet2 * 100) /100;

    return roundedDogYears;
  }
