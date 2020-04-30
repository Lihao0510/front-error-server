const lodash = require('lodash');

exports.buildUpdateSql = function (params) {
  function getValue(value) {
    if (lodash.isNumber(value)) {
      return value;
    } else if (lodash.isObject(value)) {
      return JSON.stringify(value);
    }
    return "'" + value + "'";
    // return value;
  }

  if (!params || !lodash.isObject(params)) {
    throw new Error('参数不正确!');
  }
  const paramsArr = [];
  Object.keys(params).forEach(key => {
    paramsArr.push(`${key} = ${getValue(params[key])}`);
  });

  return paramsArr.join(', ');
};
