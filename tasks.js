import users from './users.js';

//task-01

const getUserNames = users => {
  return users.map(user => user.name);
};
console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]


//task-02

const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color);
};
console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]


//task-03

const getUsersWithGender = (users, gender) => {
  return users.filter(user => user.gender === gender);
};
console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]


//task-04
const getInactiveUsers = users => {
 return users.filter(user => !user.isActive)
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

//task-05
const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email)
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

//task-06
const getUsersWithAge = (users, min, max) => {
 return users.filter(user => user.age > min && user.age < max );
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//task-07
// const calculateTotalBalance = users => {
//    const a = users.reduce((totalBalance, balance) => totalBalance + balance, 0);
//    return a;
//    console.log(a);

// };

// console.log(calculateTotalBalance(users)); // 20916

const calculateTotalBalance = users.reduce((totalBalance, balance) => totalBalance + balance, 0)
  

console.log(calculateTotalBalance); // 20916