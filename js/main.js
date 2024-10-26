'use strict'

function onBallClick() {
  let elBall1 = document.querySelector('.ball1')
  let elBall1Width = parseInt(getComputedStyle(elBall1).width)
  let elBall1Height = parseInt(getComputedStyle(elBall1).height)
  let newWidth = elBall1Width + getRandomInt(20, 60)
  let newHeight = elBall1Height + getRandomInt(20, 60)

  elBall1.style.height = newHeight + 'px'
  elBall1.style.width = newWidth + 'px'
  elBall1.innerHTML = newWidth

  if (newWidth > 400) {
    elBall1.style.width = '100px'
    elBall1.style.height = '100px'
    elBall1.style.transition = '1s'
    elBall1.innerHTML = '100'
  }
}
