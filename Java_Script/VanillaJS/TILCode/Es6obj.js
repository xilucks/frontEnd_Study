// not ES6
var x = 0;
var y = 0;
var obj = {x: x, y: y};
var randomKeyString = 'other';
var combined = {};
combined['one' + randomKeyString] = 'some value';
var obj2 = {
    x: x,
    methodA: function() {console.log('method A');},
    methodB: function() {return 0;},
};

// Es6
var x = 0;
var y = 0;
var obj3 = {x,y};
var randomKeyString2 = 'other';
var combined2 = {
    ['one' + randomKeyString2]: 'some value',
};
var obj4 = {
    x,
    methodC() { console.log('method A');},
    methodD() { return 0;},
};

