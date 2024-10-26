'use strict'

function onBallClick1(maxDiameter) {
  let elBall1 = document.querySelector('.ball1')
  let elBall1Width = parseInt(getComputedStyle(elBall1).width)
  let elBall1Height = parseInt(getComputedStyle(elBall1).height)
  let newWidth = elBall1Width + getRandomInt(20, 60)
  let newHeight = elBall1Height + getRandomInt(20, 60)
  let randomColor = getRandomColor()

  elBall1.style.height = newHeight + 'px'
  elBall1.style.width = newWidth + 'px'
  elBall1.innerHTML = newWidth
  elBall1.style.backgroundColor = randomColor

  if (newWidth > maxDiameter) {
    elBall1.style.width = '100px'
    elBall1.style.height = '100px'
    elBall1.style.transition = '1s'
    elBall1.innerHTML = '100'
  }
}
function onBallClick2(maxDiameter) {
  let elBall2 = document.querySelector('.ball2')
  let elBall2Width = parseInt(getComputedStyle(elBall2).width)
  let elBall2Height = parseInt(getComputedStyle(elBall2).height)
  let newWidth = elBall2Width + getRandomInt(20, 60)
  let newHeight = elBall2Height + getRandomInt(20, 60)
  let randomColor = getRandomColor()

  elBall2.style.height = newHeight + 'px'
  elBall2.style.width = newWidth + 'px'
  elBall2.innerHTML = newWidth
  elBall2.style.backgroundColor = randomColor

  if (newWidth > maxDiameter) {
    elBall2.style.width = '100px'
    elBall2.style.height = '100px'
    elBall2.style.transition = '1s'
    elBall2.innerHTML = '100'
  }
}
