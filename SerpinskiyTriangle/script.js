"use strict";

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getDifBetweenDots(dot1, dot2) {
  return {
    x: Math.floor((+dot1.x + +dot2.x) / 2),
    y: Math.floor((+dot1.y + +dot2.y) / 2),
  };
}

class Dot {
  constructor(x, y, height, width) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
  }

  drawDot(context) {
    context.fillRect(this.x, this.y, this.height, this.width);
  }
}

class Canvas {
  constructor(width, height, id) {
    this._width = width;
    this._height = height;
    this._id = id;
  }

  createCanvas() {
    const canvas = document.createElement("canvas");
    canvas.id = this.id;
    canvas.width = this._width;
    canvas.height = this._height;
    canvas.style.border = "1px solid black";
    return canvas;
  }

  get width() {
    return this._width;
  }

  set width(width) {
    this._width = width;
  }

  get height() {
    return this._height;
  }

  set height(height) {
    this._height = height;
  }
}

const triangleForm = document.querySelector("#triangleForm");
const randomGeneration = document.querySelector("#randomGeneration");

const drawingButton = document.querySelector("#drawDots");
drawingButton.style.display = "none";

randomGeneration.addEventListener("click", () => {
  document.querySelector("#canvasWidth").value = 500;
  document.querySelector("#canvasHeight").value = 700;
  const xValues = document.querySelectorAll(".dotX");
  const yValues = document.querySelectorAll(".dotY");
  xValues[0].value = 250;
  yValues[0].value = 30;

  xValues[1].value = 10;
  yValues[1].value = 690;

  xValues[2].value = 490;
  yValues[2].value = 690;

  document.querySelector("#iterationAmount").value = 30000;
});

triangleForm.addEventListener("submit", (e) => {
  const canvasWidth = document.querySelector("#canvasWidth").value;
  const canvasHeight = document.querySelector("#canvasHeight").value;
  const dotsX = document.querySelectorAll(".dotX");
  const dotsY = document.querySelectorAll(".dotY");
  const iterationAmount = +document.querySelector("#iterationAmount").value;

  const canvas = new Canvas(canvasWidth, canvasHeight, "myCanvas");
  const cvs = canvas.createCanvas();

  drawingButton.style.display = "block";
  document.querySelector("#initialPlace").style.display = "none";

  document.body.appendChild(cvs);

  const context = cvs.getContext("2d");

  let dots = [];

  for (let i = 0; i < 3; i++) {
    let x = dotsX[i].value;
    let y = dotsY[i].value;
    dots.push(new Dot(x, y, 5, 5));
  }

  dots.forEach((dot) => {
    dot.drawDot(context);
  });

  drawingButton.addEventListener("click", () => {
    context.fillStyle = "red";

    let generatedDots = [];

    for (let i = 0; i < iterationAmount; i++) {
      let dif;
      let randomManualDot1 = dots[randomIntFromInterval(0, dots.length - 1)];
      if (i === 0) {
        let randomManualDot2 = dots[randomIntFromInterval(0, dots.length - 1)];
        dif = getDifBetweenDots(randomManualDot1, randomManualDot2);
        generatedDots.push(new Dot(dif.x, dif.y, 5, 5));
      } else {
        dif = getDifBetweenDots(randomManualDot1, generatedDots[i - 1]);
        generatedDots.push(new Dot(dif.x, dif.y, 5, 5));
      }
    }

    generatedDots.forEach((dot, index) => {
      //DRAWING ANIMATION
      /*
      setTimeout(() => {
        dot.drawDot(context);
      }, index * 20);
      */

      dot.drawDot(context); //INSTANT DRAWING
    });
  });

  e.preventDefault();
});
