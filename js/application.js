// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  var game = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
  //game.move(0);
  // game.grid.eachCell(function(x,y,value){
  // 	console.log(value);

  // });
  var solver = new Solver(4,game);
  var button = document.querySelector(".test-button");
  button.addEventListener("click", function(){
  	solver.start();
  });
});
