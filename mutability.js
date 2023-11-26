function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }

    if (Array.isArray(obj)) {
      return obj.map(deepClone);
    }

    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [key, deepClone(value)])
    );
  }

  const clone1 = { ...person };

  const clone2 = Object.assign({}, person);

  const samePerson = deepClone(person);

  person.age += 1;
  person.country = 'FR';

  console.log('Original person:', person);
  console.log('Clone 1:', clone1);
  console.log('Clone 2:', clone2);
  console.log('Same Person:', person);
  console.log(person===samePerson);
