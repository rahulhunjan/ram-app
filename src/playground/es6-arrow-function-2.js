// const add = (a, b, c) => {
//     return a + b + c;
// };

// console.log(add(55, 5, 85));

const user = {
name: 'Ramdeep',
city: ['berlin', 'London', 'Thailand'],
printPlacesLived: function(){

console.log(user.name);
console.log(user.city);

this.city.forEach((cities) => {
console.log(this.name + ' he lives in' + cities)
});
}
};

user.printPlacesLived();