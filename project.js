$(document).ready(function(){

  var containers = $('.container').toArray()
  var matchUp = dragula(containers)

  matchUp.on('drop', function(el, target, source){ 
    var target = $(target);
    var source = $(source);

    console.log(source)
    console.log(target)

    target.data('child-id', $(el).data('child-id'));

    // Remove child from source so not duplicated.
    source.data('child-id', '');

    console.log(source.data('parent-id') + " => " + source.data('child-id'))
    console.log(target.data('parent-id') + " => " + target.data('child-id'))
  })
});
  
