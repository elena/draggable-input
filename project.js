$(document).ready(function(){

  var containers = [
    $('#one')[0],
    $('#two')[0],
    $('#tre')[0],
    $('#for')[0] 
  ]
  var matchUp = dragula(containers)

  matchUp.on('drop', function (el) {
    var elContainer = $(el).parent()
    console.log(elContainer);
    containers.pop(elContainer);
    matchUp.containers = containers;
    console.log(matchUp.containers);
    el.className = el.className.replace('ex-moved', '');
  })
});
  
