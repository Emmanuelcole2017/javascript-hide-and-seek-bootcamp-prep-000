function getFirstSelector(selector){
  var element = document.querySelector(selector)
  return element
}

function nestedTarget(){
  var element = document.querySelector('.target')
  return element
}

function deepestChild(){
  var element = document.getElementById('grand-node').innerHTML
  return element[2]
}
