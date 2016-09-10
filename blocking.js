/**
 * Created by Jordan on 2016-09-09.
 */
// link to node's filesystem module to read text files
var fs = require('fs');

// open and read food list
var food = fs.readFileSync('food.txt', 'utf8');

// print a food heading and the list of food
console.log('FOOD');
console.log(food);

// repeat with the drinks
var drinks = fs.readFileSync('drinks.txt', 'utf8');
console.log('\nDRINKS');
console.log(drinks);