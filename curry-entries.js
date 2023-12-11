const defaultCurry = (obj1) => (obj2) => ({ ...obj1, ...obj2 });

const mapCurry = (fn) => (obj) => {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    const [newKey, newValue] = fn([key, value]);
    result[newKey] = newValue;
  }
  return result;
};

const reduceCurry = (fn) => (obj, initialValue) => {
  let accumulator = initialValue === undefined ? {} : initialValue;
  for (const [key, value] of Object.entries(obj)) {
    accumulator = fn(accumulator, [key, value]);
  }
  return accumulator;
};

const filterCurry = (fn) => (obj) => {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    if (fn([key, value])) {
      result[key] = value;
    }
  }
  return result;
};

const calculateAverage = (arr) => arr.reduce((sum, value) => sum + value, 0) / arr.length;

const reduceScore = (personnel, additionalParam = 0) => {
  const forceUsers = filterCurry(([_, person]) => person.isForceUser)(personnel);
  return reduceCurry((acc, [_, person]) => acc + person.shootingScore + additionalParam)(
    forceUsers
  );
};

const filterForce = (personnel) =>
  filterCurry(([_, person]) => person.isForceUser && person.shootingScore >= 80)(personnel);

const mapAverage = (personnel) =>
  mapCurry(([_, person]) => [_, { ...person, averageScore: calculateAverage(Object.values(person))}])(personnel);