var LiveForm = require("./LiveForm");
var random = require("./random");

module.exports = class Krak extends LiveForm {
    constructor(x, y) {
        super(x,y);
        this.multiply = 0;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }
    mul() {
        this.multiply++;

        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);

        if (newCell && this.multiply ) {
             grassHashiv++
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 1;
            let grass = new Krak(x, y);
            grassArr.push(grass);
            this.multiply = 0;
        }
    }
eat() {
    let emptyCells = this.chooseCell(1);
    let newCell = random(emptyCells);

    if (newCell) {
        this.life++;
        let x = newCell[0];
        let y = newCell[1];

        matrix[y][x] = 2;
        matrix[this.y][this.x] = 0;

        for (let i in krakArr) {
            if (krakArr[i].x == x && krakArr[i].y == y) {
                krakArr.splice(i, 1)
            }
        }

        this.x = x;
        this.y = y;

        if (this.life >= 26) {
            this.mul();
        }
    }
    else {
        this.move()
    }
}
}