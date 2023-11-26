  const clone1 = { ...person };
  const clone2 = { ...person };
  Object.freeze(clone1);
  Object.freeze(clone2);
  var samePerson = { ...person };

  person.age += 1;
  person.country = 'FR';

  samePerson = person;
