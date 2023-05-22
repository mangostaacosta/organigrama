/********************************************
 serialize.js 
 202004
 incopora código publicado en stackoverflow.com
 https://stackoverflow.com/questions/21704318/javascript-nested-typed-object-to-json-and-back

 https://stackoverflow.com/questions/22333101/recursive-json-stringify-implementation con el cual se supone que puedo hacer una serilización iterativa sobre un objeto con la idea de utilizarlo en las estruturas de datos que estoy trabajando


*******************************************/

/* function stringifyJSON2( p ){
    var str = JSON.stringify(p, function replacer (key, value) {
        //warning this change the object. maybe use $.extend or xtend, or a deep clone library
        value.__type = value.constructor.name
        return value;
    });
    return str ;
}





const stringifyJSON = data => {
    if (data === undefined)
      return undefined
    else if (data === null)
      return 'null'
    else if (data.constructor === String)
      return '"' + data.replace(/"/g, '\\"') + '"'
    else if (data.constructor === Number)
      return String(data)
    else if (data.constructor === Boolean)
      return data ? 'true' : 'false'
    else if (data.constructor === Array)
      return '[ ' + data.reduce((acc, v) => {
        if (v === undefined)
          return [...acc, 'null']
        else
          return [...acc, stringifyJSON(v)]
      }, []).join(', ') + ' ]'
    else if (data.constructor === Object)
      return '{ ' + Object.keys(data).reduce((acc, k) => {
        if (data[k] === undefined)
          return acc
        else
          return [...acc, stringifyJSON(k) + ':' + stringifyJSON(data[k])]
      }, []).join(', ') + ' }'
    else
      return '{}'
  }
  
  // round-trip test and log to console
  const test = data => {
    return console.log(JSON.parse(stringifyJSON(data)))
  } */