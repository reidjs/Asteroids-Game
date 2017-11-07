const Game = require('./game.js');

// const view = function start() {
//   const canvas = document.getElementById("canvas");
//   canvas.width = Game.dim_x;
//   canvas.height = Game.dim_y;
//
//   const ctx = canvas.getContext("2d");
//   ctx.fillStyle = "purple";
//   ctx.fillRect(0, 0, 500, 500);
//
//   // const mov = new mo([30, 30],[10, 10], 5, "#00FF00");
//   // const ast1 = new Asteroid({ pos: [30, 30], vel: [5,5]});
//
//   // ast1.vel
//
//   return function update() {
//     // mov.draw(ctx);
//     // // mov.move();
//     // // debugger;
//     // ast1.draw(ctx);
//     // ast1.move();
//     return ctx;
//   };
// };

const canvas = document.getElementById("canvas");
canvas.width = Game.dim_x;
canvas.height = Game.dim_y;

const ctx = canvas.getContext("2d");
ctx.fillStyle = "purple";
ctx.fillRect(0, 0, 500, 500);
Game.draw(ctx);

setInterval(function() {
  Game.draw(ctx);
  Game.moveObjects();
}, 1000);
// module.exports = view;
