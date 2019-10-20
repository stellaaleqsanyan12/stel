var LiveForm = require("./LiveForm");
var random = require("./random");

module.exports = class Jur extends LiveForm {
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
        if (newCell && this.multiply >= 10) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 5; 
            let jur = new Jur(x, y);
            jurArr.push(jur);
            this.multiply = 0;
        }
    }
}