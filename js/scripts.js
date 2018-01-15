var a=prompt("Number a", "What is your a?");
var b=prompt("Number b", "What is your b?");
var sum = (a * a) - (2 * a * b) + (b * b);

if ( sum < 0 ) {
    // Lower than 0
     console.log('Result is lower than 0');
}

if ( sum > 0 ) {
    // Higer than 0
     console.log('Result is higher than 0');
}

if ( sum == 0 ) {
    // Equal than 0
     console.log('Result is equal 0');
}

console.log('Result for a equal' + a + ' and b equal' + b + ' is' + sum);
