function playMusic(){
  const audio = document.querySelector('.audio')
  audio.play()
}
function pauseMusic(){
  const audio = document.querySelector('.audio')
  audio.pause()
}
function volumeInit(){
  const audio = document.querySelector('.audio')
  audio.volume = 0.1
}
function volumeUp(){
  const audio = document.querySelector('.audio')
  audio.volume += 0.1
}
function volumeDown(){
  const audio = document.querySelector('.audio')
  audio.volume -= 0.1
}

module.exports = {
  playMusic, pauseMusic, volumeInit, volumeUp, volumeDown
}