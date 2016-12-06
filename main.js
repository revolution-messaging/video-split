$('button').mousedown(function(e){
  var btn = $( "button" );
  var position = btn.position();


  var currentMousePos = { x: 0 };


  $(document).mousemove(function(event) {
    // Get Mouse x Coordinates
    currentMousePos.x = event.pageX;


    //Get Container Width
    var containerWidth = $('.vid-container').width()
    // Calculate X position Inverse for clip-path
    var newOffset = (currentMousePos.x - containerWidth) * -1

    // Set new Clip Path coordinates
    var webkitClip = "-webkit-clip-path: inset(0 " + newOffset + "px 0 0)"

    // Clip new path!
    btn.css('left', currentMousePos.x);
    $('.vid--1').attr("style", webkitClip);
  });

  //print coordinates
  //$( "p" ).text( "left: " + position.left );

});

$(document).mouseup(function() {
  $(document).off("mousemove");
});
