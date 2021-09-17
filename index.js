/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
// ctx.fillStyle = "blue";

// ctx.fillRect(10, 50, 100, 100); // for creating a rect

// ctx.lineWidth = 10;
// ctx.strokeStyle = "red";
// ctx.strokeRect(300, 50, 50, 50);

// ctx.clearRect(50, 0, 90, 90); // for clearning a part of canvas

// ctx.font = "30px Arial";
// ctx.fillStyle = "red"
// ctx.fillText("the word", 10, 50, 400);

// paths

// ctx.beginPath();

// ctx.moveTo(50, 50);

// ctx.lineTo(150, 50);
// ctx.lineTo(100, 200);
// ctx.lineTo(50, 50);

// ctx.fillStyle = "red";
// ctx.fill();

// ctx.fillStyle = "gray";
// ctx.fillRect(300, 100, 100, 50);

const mouse = {
  x: undefined,
  y: undefined,
};
var snd = new Audio("relaxM.mp3"); // buffers automatically when created

canvas.addEventListener("mousemove", (e) => {
  snd.play();
  mouse.x = e.x;
  mouse.y = e.y;
  cool();
});

canvas.addEventListener("mouseleave", () => {
  snd.pause();
  snd.currentTime = 0;
});

function cool() {
  ctx.beginPath();
  ctx.fillStyle = "blue";
  ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
  ctx.stroke();
  console.log("i am moving");
}
