const cube = document.querySelector('.cube');
let angle = 0;

function rotateCube() {
  angle += 0.1;
  cube.style.transform = `rotateY(${angle}deg)`;
  requestAnimationFrame(rotateCube);
}

rotateCube();