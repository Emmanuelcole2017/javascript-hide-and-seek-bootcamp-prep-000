function getFirstSelector(selector){
  var element = document.querySelector(selector)
  return element
}

function nestedTarget(){
  var element = document.querySelector('.target')
  return element
}

function deepestChild(){
  var element = document.getElementById('grand-node')
                .querySelector('div div div div div')
  return element
}

function increaseRankBy(n){
  var element = document
                .getElementById('app')
                .querySelectorAll('ul.ranked-list li');

  for(var i = 0; i < element.length; i++){
    element[i].innerHTML = (parseInt(element[i].innerHTML, 10) + n).toString()
  }
  return element
}
