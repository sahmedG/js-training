  const clone1 = { ...person };
  const clone2 = Object.assign({}, person);

  var samePerson = structuredClone(person);

  person.age += 1;
  person.country = 'FR';

  console.log('Original person:', person);
  console.log('Clone 1:', clone1);
  console.log('Clone 2:', clone2);
  console.log('Same Person:', person);
  console.log(person===samePerson);
