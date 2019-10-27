
var Grass = require("./modules/Grass.js");
var GrassEater = require("./modules/GrassEater.js");
var Jur = require("./modules/Jur.js");
var Gishatich = require("./modules/Gishatich.js");
var Mard = require("./modules/Mard.js");
var Krak = require("./modules/Krak.js");
let random = require('./modules/random');

grassArr = [];
grassEaterArr = [];
gishatichArr = [];
jurArr = [];
mardArr = [];
krakArr = [];
matrix = [];

grassHashiv = 0;
grassEaterHashiv = 0;
gishatichHashiv = 0;
jurHashiv = 0;
mardHashiv = 0;
krakHashiv = 0;

function matrixGenerator(matrixSize, grass, grassEater, gishatich, jur, mard, krak) {

    for (let i = 0; i < matrixSize; i++) {
        matrix[i] = [];
        for (let o = 0; o < matrixSize; o++) {
            matrix[i][o] = 0;
        }
    }
    for (let i = 0; i < grass; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 1;

    }
    for (let i = 0; i < grassEater; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 2;
    }
    for (let i = 0; i < gishatich; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 3;
    }
    for (let i = 0; i < jur; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 4;
    }
    for (let i = 0; i < mard; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 5;
    }
    for (let i = 0; i < krak; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 6;
    }
}
matrixGenerator(20, 25, 20, 15, 10, 2, 10);

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3001);

function creatingObjects() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                var grassEater = new GrassEater(x, y);
                grassEaterArr.push(grassEater);
                grassEaterHashiv++;
            } else if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                grassArr.push(grass);
                grassHashiv++;
            }
            else if (matrix[y][x] == 3) {
                var gishatich = new Gishatich(x, y);
                gishatichArr.push(gishatich);
                gishatichHashiv++;
            }
            else if (matrix[y][x] == 4) {
                var jur = new Jur(x, y);
                jurArr.push(jur);
                jurHashiv++;
            }
            else if (matrix[y][x] == 5) {
                var mard = new Mard(x, y);
                mardArr.push(mard);
                mardHashiv++;
            }
            else if (matrix[y][x] == 6) {
                var krak = new Krak(x, y);
                krakArr.push(krak);
                krakHashiv++;
            }
        }
    }
}

creatingObjects();

let exanak = 0;
let weather = "winter"

function game() {

    exanak++;
    if (exanak <= 10) {
        weather = "summer"
    } else if (exanak <= 20) {
        weather = "autumn"
    } else if (exanak > 20) {
        exanak = 0;
    }


    if (grassArr[0] !== undefined) {
        for (var i in grassArr) {
            grassArr[i].mul();
        }
    }
    if (grassEaterArr[0] !== undefined) {
        for (var i in grassEaterArr) {
            grassEaterArr[i].eat();
        }
    }
    if (gishatichArr[0] !== undefined) {
        for (var i in gishatichArr) {
            gishatichArr[i].eat();
        }
    }
    if (jurArr[0] !== undefined) {
        for (var i in jurArr) {
            jurArr[i].mul();
        }
    }
    if (mardArr[0] !== undefined) {
        for (var i in mardArr) {
            mardArr[i].eat();
        }
        if (krakArr[0] !== undefined) {
            for (var i in krakArr) {
                krakArr[i].eat();
            }
        }
        let sendData = {
            matrix: matrix,
            grassCounter: grassHashiv,
            grassLiveCounter: grassArr.length,
            grassEaterCounter: grassEaterHashiv,
           grassEaterLiveCounter: grassEaterArr.length,
            gishatichCounter: gishatichHashiv,
            gishatichLiveCounter: gishatichArr.length,
            jurCounter: jurHashiv,
             jurLiveCounter: jurArr.length,
            mardCounter: mardHashiv,
            mardLiveCounter: mardArr.length,
            krakCounter: krakHashiv,
            krakLiveCounter: krakArr.length,
            weather: weather,
        }
        io.sockets.emit("data", sendData);
    }

}
setInterval(game, 300)