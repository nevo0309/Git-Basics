'use strict'

function onBallClick() {
  let elBall1 = document.querySelector('.ball1')
  let elBall1Size = parseInt(getComputedStyle(elBall1).width)
  let newWidth = elBall1Size + 50
  elBall1.style.width = newWidth + 'px'
  elBall1.innerHTML = newWidth

  if (newWidth > 400) {
    elBall1.style.width = '100px'
    elBall1.style.transition = '1s'
    elBall1.innerHTML = '100'
  }
}
