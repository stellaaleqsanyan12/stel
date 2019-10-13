// function windowLoad() {
//     console.log("Window is loaded");
//  }
//  window.onload = windowLoad;

//  function preload() {
//     console.log("Window is loaded");
//  }
//  function click(evt) {
//    console.log(evt.pageX, evt.pageY);
// }
// window.onclick = click;

// function mousePressed() {
//     console.log(mouseX, mouseY);
//  }
//  function keydown(evt) {
//     console.log("You printed " + evt.key);
//  }
//  window.onkeydown = keydown;

//  function keyPressed() {
//     console.log(key);
//  }
//   function setup(){};
 
// -----------------Andranikin nestayum copy yral----------
//   var express = require('express');
//   var app = express();
//   var server = require('http').Server(app);
//   var io = require('socket.io')(server);
  
//   var messages = [];
  
//   app.use(express.static("./"));
//   app.get('/', function (req, res) {
//      res.redirect('index.html');
//   });
//   server.listen(3000);
  
//   io.on('connection', function (socket) {
//       for(var i in messages) {
//         socket.emit("display message", messages[i]);
//       }
//       socket.on("send message", function (data) {
//           messages.push(data);
//           socket.emit("display message", data);
//       });
//   });

