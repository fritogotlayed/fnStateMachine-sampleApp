const fdk=require('@fnproject/fdk');

fdk.handle(function(input){
  return Object.assign({}, input, { one: 1 });
})
