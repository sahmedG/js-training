function get(sourceObject, key) {
    return sourceObject[key];
  }

  function set(sourceObject, key, value) {
    sourceObject[key] = value;
    return value;
  }

// const sourceObject = {
//     num: 42,
//     bool: true,
//     str: 'some text',
//     log: console.log,
//   }

//   let ageValue = get(sourceObject, 'num');
//   console.log(ageValue);

//   let updatedAge = set(sourceObject, 'num', 31);
//   console.log(sourceObject);
