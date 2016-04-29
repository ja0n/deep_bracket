/**
 * it searches for a nested key
 * if not found it returns the defaultValue (null by default) 
*/
function deepBracket(obj, query, defaultValue) {
  if (typeof obj !== 'object' || typeof query !== 'string')
    throw "deepBracket: bad arguments";

  if (typeof defaultValue === 'undefined')
    defaultValue = null;

  var value = obj, props = query.split('.');
  props.forEach(query => { value = value[query]; });
  return value || defaultValue;
}

module.exports = deepBracket;
