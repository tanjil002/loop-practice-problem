var fruits = ['Apple', 'Banana', 'Orange'];
var bananaIndex = fruits.indexOf('Banana');
fruits[bananaIndex] = 'Mango';
// console.log(bananaIndex);
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.push('Watermelon');
console.log(fruits);


// practice 3
var side1 = 9;
var side2 = 8;
var side3 = 9;

if(side1 == side2 || side1 == side3 || side2 == side3){
    console.log('isosceles')
}

