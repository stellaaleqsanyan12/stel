
var LiveForm = require("./LiveForm");
var random = require("./random");

module.exports = class Mard extends LiveForm {
    constructor(x, y) {
       super(x,y);
        this.time = 150;
        
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
        let emptyCells = this.chooseCell(1);
        let emptyCells21 = this.chooseCell(0);
        let emptyCells22 = this.chooseCell(5);
        let newCell = random(emptyCells.concat(emptyCells21.concat(emptyCells22)));
        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];

            // matrixi mej gru mem MEK -> 
            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            for (let i in grassArr) {
                if (grassArr[i].x == x && grassArr[i].y == y) {
                    grassArr.splice(i, 1)
                }
            }
            for (let i in jurArr) {
                if (jurArr[i].x == x && jurArr[i].y == y) {
                    jurArr.splice(i, 1)
                }
            }

            let mard = new Mard(x, y);
            mardArr.push(mard);
            this.time = 150;
        }
    }
    eat() {
        let emptyCells = this.chooseCell(3);
        let emptyCells10 = this.chooseCell(5);
        let newCell = random(emptyCells.concat(emptyCells10));
        if (newCell) {
            this.life++;
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;
            for (let i in gishatichArr) {
                if (gishatichArr[i].x == x && gishatichArr[i].y == y) {
                    gishatichArr.splice(i, 1)
                }
            }
            for (let i in jurArr) {
                if (jurArr[i].x == x && jurArr[i].y == y) {
                    jurArr.splice(i, 1)
                }
            }
            this.x = x;
            this.y = y;

            if (this.time >= 140) {
                this.mul();
            }
        }
        else {
            this.move()
        }
    }
    move() {
        this.time--;
        let emptyCells = this.chooseCell(0);
        let emptyCells1 = this.chooseCell(1);
        let newCell = random((emptyCells.concat(emptyCells1)));
        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;
            for (let i in grassArr) {
                if (grassArr[i].x == x && grassArr[i].y == y) {
                    grassArr.splice(i, 1)
                }
            }
            this.y = y;
            this.x = x;
        }
        if (this.time < 0) {
            this.die();
        }
    }
    die() {
        matrix[this.y][this.x] = 0;

        for (let i in mardArr) {
            if (mardArr[i].x == this.x && mardArr[i].y == this.y) {
                mardArr.splice(i, 1)
            }
        }
    }
}