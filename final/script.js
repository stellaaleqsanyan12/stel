function setup() {
    var socket = io();
    var side = 30;
    var matrix = [];
    let weatherElement = document.getElementById('weather');
    let grassCountElement = document.getElementById('grassCount');
    let grassLiveCountElement = document.getElementById('grassLiveCount');
    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let huntCountElement = document.getElementById('huntCount');
    let terminatorCountElement = document.getElementById('termCount');
    let titanCountElement = document.getElementById('titanCount');

    socket.on("data", drawCreatures);

    function drawCreatures(data) {
        matrix = data.matrix;
        weatherElement.innerText = data.weather; "summer"
        grassCountElement.innerText = data.grassCounter;
        grassLiveCountElement.innerText = data.grassLiveCounter;
        grassEaterCountElement.innerText = data.eatCounter;
        huntCountElement.innerText = data.huntCounter;
        terminatorCountElement.innerText = data.termCounter;
        titanCountElement.innerText = data.titanCounter;
        
        createCanvas(matrix[0].length * side, matrix.length * side)
       
        background('#acacac');
        //! Draw grassCount and grassEaterCount to HTML (use DOM objects to update information, yes, and use .innerText <- function)

let matrix = [];
let side = 10;
let grassArr = []; 
let grassEaterArr = []; 
let gishatichArr = [];
let mardArr = [];
let jurArr=[];

function setup() {
    matrixGenerator(40, 80, 30,15 , 10, 2);
    frameRate(10);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let grass = new Grass(x, y);
                grassArr.push(grass);
            }
            if (matrix[y][x] == 2) {
                let grassEater = new GrassEater(x, y);
                grassEaterArr.push(grassEater);
            }
            if (matrix[y][x] == 3) {
                let gishatich = new Gishatich(x, y);
                gishatichArr.push(gishatich);
            }
            if (matrix[y][x] == 4) {
                let mard = new Mard(x, y);
                mardArr.push(mard);
            }
            if (matrix[y][x] == 5) {
                let jur = new Jur(x, y);
                jurArr.push(jur);
            }
        }
    }
    function matrixGenerator(matrixSize, grass, grassEater,gishatich,mard,jur) {
        for (let i = 0; i < matrixSize; i++) {
            matrix[i] = [];
            for (let o = 0; o < matrixSize; o++) {
                matrix[i][o] = 0;
            }
        }
        for (let i = 0; i < grass; i++) {
            let customX = Math.floor(random(0, matrixSize)); // 0 - 29
            let customY = Math.floor(random(0, matrixSize));
            matrix[customY][customX] = 1;
        }
        for (let i = 0; i < grassEater; i++) {
            let customX = Math.floor(random(0, matrixSize));
            let customY = Math.floor(random(0, matrixSize));
            matrix[customY][customX] = 2;
        }
        for (let i = 0; i < gishatich; i++) {
            let customX = Math.floor(random(0, matrixSize));
            let customY = Math.floor(random(0, matrixSize));
            matrix[customY][customX] = 3;
        }
        for (let i = 0; i < mard; i++) {
            let customX = Math.floor(random(0, matrixSize));
            let customY = Math.floor(random(0, matrixSize));
            matrix[customY][customX] = 4;
        }
        for (let i = 0; i < jur; i++) {
            let customX = Math.floor(random(0, matrixSize));
            let customY = Math.floor(random(0, matrixSize));
            matrix[customY][customX] = 5;
        }
    }
}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("orange");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("yellow");
            }
            else if (matrix[y][x] == 5) {
                fill("blue");
            }
            rect(x * side, y * side, side, side);
        }
    }

    for (var i in grassArr) {
        grassArr[i].mul();
    }

    for (var i in grassEaterArr) {
        grassEaterArr[i].eat();
    }
    for (var i in gishatichArr) {
        gishatichArr[i].eat();
    }
    for (var i in mardArr) {
        mardArr[i].eat();
    }
    for (var i in jurArr) {
        jurArr[i].mul();
    }


}
