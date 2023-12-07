export const getArchitects = () => {
    const allPeople = document.querySelectorAll('.person');
    const architects = [];
    const nonArchitects = [];
  
    for (const person of allPeople) {
      if (person.querySelector('.architect-badge')) {
        architects.push(person);
      } else {
        nonArchitects.push(person);
      }
    }
  
    return [architects, nonArchitects];
  };
  
  export const getClassical = () => {
    const allPeople = document.querySelectorAll('.person');
    const classicalArchitects = [];
    const nonClassicalArchitects = [];
  
    for (const person of allPeople) {
      if (person.classList.contains('classical')) {
        classicalArchitects.push(person);
      } else if (person.querySelector('.architect-badge')) {
        nonClassicalArchitects.push(person);
      }
    }
  
    return [classicalArchitects, nonClassicalArchitects];
  };
  
  export const getActive = () => {
    const allPeople = document.querySelectorAll('.person.classical');
    const activeArchitects = [];
    const nonActiveArchitects = [];
  
    for (const person of allPeople) {
      if (person.classList.contains('active')) {
        activeArchitects.push(person);
      } else {
        nonActiveArchitects.push(person);
      }
    }
  
    return [activeArchitects, nonActiveArchitects];
  };
  
  export const getBonannoPisano = () => {
    const bonannoPisano = document.getElementById('BonannoPisano');
    const remainingActiveArchitects = [];
  
    const allActiveClassicalArchitects = document.querySelectorAll('.person.classical.active');
    for (const architect of allActiveClassicalArchitects) {
      if (architect !== bonannoPisano) {
        remainingActiveArchitects.push(architect);
      }
    }
  
    return [bonannoPisano, remainingActiveArchitects];
  };