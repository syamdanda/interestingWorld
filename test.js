var InterestingWorld = require('./index.js');

var obj =  new InterestingWorld(2018);
var resp = obj.getLangResponse('God');
console.log(JSON.stringify(obj));
console.log(JSON.stringify(resp));