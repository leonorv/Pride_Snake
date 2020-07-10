
import Snake from "./snake.js";
import InputHandler from "./input.js";
import Game from "./game.js";
import Food from "./food.js";
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  GRID_SIZE,
  pride_colors
} from "./constants.js";

var canvas = document.getElementById("gameScreen");
var context = canvas.getContext("2d");

var fps = 20;
function animate(gameLoop) {
    setTimeout(function() {
      requestAnimationFrame(gameLoop);
    }, 1000 / fps);
}


var s = new Snake(GRID_SIZE, pride_colors);
var f = new Food(GRID_SIZE);
var inputHandler = new InputHandler(s);
var game = new Game(SCREEN_WIDTH, SCREEN_HEIGHT, GRID_SIZE, s, f);

var lastTime = 0;
function gameLoop(timestamp) {
  var deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  context.clearRect(0, 0, 600, 400);

  game.update(deltaTime);
  game.draw(context);

  
  animate(gameLoop);

}
animate(gameLoop);
