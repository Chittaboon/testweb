function getBudgets(budg) {
  arr = budg.map(obj => Object.values(obj)[2]).reduce((obj1, obj2) => obj1 + obj2);
    return arr;
  }
  console.log(getBudgets([{name: 'John',  age: 21, budget: 23000}, {name: 'Steve',  age: 32, budget: 40000}, {name: 'Martin',  age: 16, budget: 2700}]));
  console.log(getBudgets([{name: 'John',  age: 21, budget: 29000}, {name: 'Steve',  age: 32, budget: 32000}, {name: 'Martin',  age: 16, budget: 1600}]));