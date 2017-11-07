/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Game = __webpack_require__(1);

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


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const DIM_X = 500;
const DIM_Y = 500;
const NUM_ASTEROIDS = 20;
const Asteroid = __webpack_require__(2);

// setInterval(game_view(), 1000);


const Game = function Game(){
  this.asteroids = [];
  this.dim_x = DIM_X;
  this.dim_y = DIM_Y;
};

Game.prototype.addAsteroids = function addAsteroids() {
  let a = new Asteroid({pos: [110, 320], vel: [10,10]});
  this.asteroids.push(a);
};

Game.prototype.moveObjects = function moveObjects() {
  this.asteroids.forEach(function(asteroid) {
    asteroid.move();
  });
};

Game.prototype.draw = function draw(ctx) {
  ctx.clearRect(0, 0, DIM_X, DIM_Y);
  ctx.fillStyle = "purple";
  ctx.fillRect(0, 0, 500, 500);
  this.asteroids.forEach(function(asteroid) {
    asteroid.draw(ctx);
  });


};

const game = new Game;
game.addAsteroids();


module.exports = game;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const utils = __webpack_require__ (3);
const MovingObject = __webpack_require__ (4);
const COLOR = 'blue';
const RADIUS = 10;
const Asteroid = function Asteroid(options) {
  MovingObject.call(this, options);
  this.radius = RADIUS;
  this.color = COLOR;
};

utils.inherits(Asteroid, MovingObject);

module.exports = Asteroid;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

const Util = {
  inherits (childClass, parentClass) {
    function Surrogate() {}
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
    childClass.prototype.constructor = childClass;
  }
};

module.exports = Util;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

const MovingObject = function MovingObject(options) {
  this.pos = options["pos"];
  this.vel = options["vel"];
  this.radius = options["radius"];
  this.color = options["color"];
};

MovingObject.prototype.draw = function draw(ctx) {
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true);
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.fillStyle = "blue";
  ctx.fill();
};

MovingObject.prototype.move = function move() {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
};
// console.log(MovingObject);
// debugger
module.exports = MovingObject;


/***/ })
/******/ ]);