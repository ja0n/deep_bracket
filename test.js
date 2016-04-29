var deepBracket = require('./index');

var obj = { foo: { bar: 3 } };

if (deepBracket(obj, 'foo.bar') == 3) {
  console.log('weee');
}
