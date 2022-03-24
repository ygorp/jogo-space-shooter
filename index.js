const yourShip = document.querySelector('.player-shooter');
const playArea = document.querySelector('#main-play-area');

//função movimento e tiro da nave
function flyAhip(event) {
  if(event.key === 'ArrowUp') {
    event.preventDefault();
    moveUp();
  }else if(event.key === 'ArrowDown') {
    event.preventDefault();
    moveDown();
  }else if(event.key === " ") {
    event.preventDefault();
    fireLaser();
  }
}

//função subir nave
function moveUp() {
  let topPosition = getComputedStyle(yourShip).getPropertyValue('top');
  if(topPosition === "0px") {
    return
  }else {
    let position = parseInt(topPosition);
    position -= 50;
    yourShip.style.top = `${position}px`;
  }
}

//função desce nave
function moveDown() {
  let topPosition = getComputedStyle(yourShip).getPropertyValue('top');
  if(topPosition === "510px") {
    return
  }else {
    let position = parseInt(topPosition);
    position += 50;
    yourShip.style.top = `${position}px`;
  }
}

//função de tiro

 

window.addEventListener('keydown', flyAhip);