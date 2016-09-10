/**
 * Created by Jordan on 2016-09-09.
 */
// link to the filesystem module
var fs = require('fs');

// load food list asynchronous
var food = fs.readFile('food.txt', 'utf8', function(err, food) {
   if (err) {
       console.log(err);
   }
   else {
       console.log(food);
   }
});

console.log('FOOD');

// load drink list asynchronous
var drinks = fs.readFile('drinks.txt', 'utf8', function(err, drinks) {
   if (err) {
       console.log(err);
   }
   else {
       console.log('\nDRINKS');
       console.log(drinks);
   }
});

