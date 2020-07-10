export default class Snake {
    constructor(GRID_SIZE, colors) {
        this.colors = colors;
        this.xspeed = 1;
        this.yspeed = 0;
        this.gridSize = GRID_SIZE; 
        this.size = 1;
        this.tail = [[0, 0]]; //0 will be head
    }

    rgb(values) {
        return 'rgb(' + values.join(', ') + ')';
      }

    draw(context) {
        for(var i = 0; i < this.size; i++) {
            context.fillStyle = this.colors[i%6];
            context.fillRect(this.tail[i][0], this.tail[i][1], this.gridSize, this.gridSize);
            context.rect(this.tail[i][0], this.tail[i][1], this.gridSize, this.gridSize);
        }
    }

    update(deltatime) {
        for(var i = this.size - 1; i > 0; i--) {
            this.tail[i][0] = this.tail[i-1][0];
            this.tail[i][1] = this.tail[i-1][1];
        }

        var newx = this.tail[0][0] + this.xspeed*this.gridSize;
        var newy = this.tail[0][1] + this.yspeed*this.gridSize;
        if (newx >= 0 && newx <= 600 - this.gridSize) this.tail[0][0] = newx;
        if (newy >= 0 && newy <= 400 - this.gridSize) this.tail[0][1] = newy;
    }

    moveLeft() {
        this.xspeed = -1;
        this.yspeed = 0;
    }

    moveRight() {
        this.xspeed = 1;
        this.yspeed = 0;
    }

    moveUp() {
        this.yspeed = -1;
        this.xspeed = 0;
    }

    moveDown() {
        this.yspeed = 1;
        this.xspeed = 0;
    }

    grow() {
        this.size++;
        this.tail.push([]);
    }

}