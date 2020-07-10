export default class Food {
    constructor(GRID_SIZE) {

        this.gridSize = GRID_SIZE;

        this.x = Math.floor((Math.random() * 30) + 1)*20;
        this.y = Math.floor((Math.random() * 20) + 1)*20;
    }

    draw(context) {
        context.fillRect(this.x, this.y, this.gridSize, this.gridSize);
        context.rect(this.x, this.y, this.gridSize, this.gridSize);
    }

}