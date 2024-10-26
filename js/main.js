'use strict'

function onBallClick() {
  let elBall1 = document.querySelector('.ball1')
  let elBall1Size = parseInt(getComputedStyle(elBall1).width)
  elBall1.style.width = elBall1Size + 50 + 'px'
}
