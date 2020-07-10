import Snake from "/src/snake.js";
import Food from "./food.js";
//import InputHandler from "/src/input";

export default class Game {
    constructor(SCREEN_WIDTH, SCREEN_HEIGHT, GRID_SIZE, snake, food) {
        this.screenWidth = SCREEN_WIDTH;
        this.screenHeight = SCREEN_HEIGHT;
        this.gridSize = GRID_SIZE;
        this.snake = snake;
        this.food = food;
    }

    eat() {
        //var a = this.snake.x - this.food.x;
        //var b = this.snake.y - this.food.y;
        var a = this.snake.tail[0][0] - this.food.x;
        var b = this.snake.tail[0][1] - this.food.y;
        var dist = Math.sqrt( a*a + b*b );
        return (dist < 2);
    }

    draw(context) {
        this.snake.draw(context);
        this.food.draw(context);

    }

    update(deltatime) {
        this.snake.update(deltatime);
        if (this.eat()) {
            this.food = new Food(this.gridSize);
            this.snake.grow();
        }
    }

}