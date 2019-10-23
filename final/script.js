function setup() {
    var socket = io();
    var side = 30;
    var matrix = [];
    let weatherElement = document.getElementById('weather');
    let grassCountElement = document.getElementById('grassCount');
    let grassLiveCountElement = document.getElementById('grassLiveCount');
    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let gishatichCountElement = document.getElementById('gishatichCount');
    let jurCountElement = document.getElementById('jurCount');
    let mardCountElement = document.getElementById('mardCount');
    let krakCountElement = document.getElementById('krakCount');

    socket.on("data", drawCreatures);

    function drawCreatures(data) {
        matrix = data.matrix;
        weatherElement.innerText = data.weather; 
        grassCountElement.innerText = data.grassCounter;
        grassLiveCountElement.innerText = data.grassLiveCounter;
        grassEaterCountElement.innerText = data.grassEaterCounter;
        gishatichCountElement.innerText = data.gishatichCounter;
        jurCountElement.innerText = data.jurCounter;
        mardCountElement.innerText = data.mardCounter;
        krakCountElement.innerText = data.krakCounter;
        
        createCanvas(matrix[0].length * side, matrix.length * side)
       
        background('#acacac');

// let matrix = [];
// let side = 10;
// let grassArr = []; 
// let grassEaterArr = []; 
// let gishatichArr = [];
// let jurArr=[];
// let mardArr = [];
// let krakArr = [];



    background('#acacac');
        
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                if (data.weather == "Summer") {
                    fill("green");
                } else if (data.weather == "Autumn") {
                    fill("#53cc1b");
                }
                else if (data.weather == "Winter") {
                    fill("#b7f59a");
                }
                else if (data.weather == "Spring") {
                    fill("#6eeb34");
                }
            } else if (matrix[i][j] == 2) {
                if (data.weather == "Summer") {
                    fill("#abad15");
                } else if (data.weather == "Autumn") {
                    fill("#9fa12f");
                }
                else if (data.weather == "Winter") {
                    fill("#f3f598");
                }
                else if (data.weather == "Spring") {
                    fill("#fcff26");
                }
            } else if (matrix[i][j] == 0) {
                fill('#acacac');
            } else if (matrix[i][j] == 3) {
                if (data.weather == "Summer") {
                    fill("#fa0000");
                } else if (data.weather == "Autumn") {
                    fill("#700707");
                }
                else if (data.weather == "Winter") {
                    fill("#f59898");
                }
                else if (data.weather == "Spring") {
                    fill("#00ff44");
                }
            } else if (matrix[i][j] == 4) {
                if (data.weather == "Summer") {
                    fill("#0051ff");
                } else if (data.weather == "Autumn") {
                    fill("#427bf5");
                }
                else if (data.weather == "Winter") {
                    fill("#68e2f2");
                }
                else if (data.weather == "Spring") {
                    fill("#68b9f2");
                }
            } else if (matrix[i][j] == 5) {
                if (data.weather == "Summer") {
                    fill("#a600ff");
                } else if (data.weather == "Autumn") {
                    fill("#dd00ff");
                }
                else if (data.weather == "Winter") {
                    fill("#ff00b7");
                }
                else if (data.weather == "Spring") {
                    fill("#00ff44");
                }
            }else if (matrix[i][j] == 6) {
                if (data.weather == "Summer") {
                    fill("#000000");
                } else if (data.weather == "Autumn") {
                    fill("#403c3c");
                }
                else if (data.weather == "Winter") {
                    fill("#212121");
                }
                else if (data.weather == "Spring") {
                    fill("#545454");
                }
            }
            rect(j * side, i * side, side, side);
        }
    }
}

}
//     function matrixGenerator(matrixSize, grass, grassEater,gishatich,jur,mard, krak) {
//         for (let i = 0; i < matrixSize; i++) {
//             matrix[i] = [];
//             for (let o = 0; o < matrixSize; o++) {
//                 matrix[i][o] = 0;
//             }
//         }
//         for (let i = 0; i < grass; i++) {
//             let customX = Math.floor(random(0, matrixSize)); 
//             let customY = Math.floor(random(0, matrixSize));
//             matrix[customY][customX] = 1;
//         }
//         for (let i = 0; i < grassEater; i++) {
//             let customX = Math.floor(random(0, matrixSize));
//             let customY = Math.floor(random(0, matrixSize));
//             matrix[customY][customX] = 2;
//         }
//         for (let i = 0; i < gishatich; i++) {
//             let customX = Math.floor(random(0, matrixSize));
//             let customY = Math.floor(random(0, matrixSize));
//             matrix[customY][customX] = 3;
//         }
//         for (let i = 0; i < jur; i++) {
//             let customX = Math.floor(random(0, matrixSize));
//             let customY = Math.floor(random(0, matrixSize));
//             matrix[customY][customX] = 4;
//         }
//         for (let i = 0; i < mard; i++) {
//             let customX = Math.floor(random(0, matrixSize));
//             let customY = Math.floor(random(0, matrixSize));
//             matrix[customY][customX] = 5;
//         }
//         for (let i = 0; i < krak; i++) {
//             let customX = Math.floor(random(0, matrixSize));
//             let customY = Math.floor(random(0, matrixSize));
//             matrix[customY][customX] = 6;
//         }
//     }


// function draw() {
//     for (var y = 0; y < matrix.length; y++) {
//         for (var x = 0; x < matrix[y].length; x++) {
//             if (matrix[y][x] == 1) {
//                 fill("green");
//             }
//             else if (matrix[y][x] == 0) {
//                 fill("#acacac");
//             }
//             else if (matrix[y][x] == 2) {
//                 fill("orange");
//             }
//             else if (matrix[y][x] == 3) {
//                 fill("red");
//             }
//             else if (matrix[y][x] == 4) {
//                 fill("yellow");
//             }
//             else if (matrix[y][x] == 5) {
//                 fill("blue");
//             }
//             else if (matrix[y][x] == 6) {
//                 fill("grey");
//             }
//             rect(x * side, y * side, side, side);
//         }
        
//     }

//     for (var i in grassArr) {
//         grassArr[i].mul();
//     }

//     for (var i in grassEaterArr) {
//         grassEaterArr[i].eat();
//     }
//     for (var i in gishatichArr) {
//         gishatichArr[i].eat();
//     }
//     for (var i in jurArr ) {
//         jurArr[i].mul();
//     }
//     for (var i in mardArr) {
//         mardArr[i].eat();
//     }
//     for (var i in krakArr) {
//         krakArr[i].eat();
//     }

// }
// }
