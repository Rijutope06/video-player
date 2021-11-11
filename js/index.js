const $video = document.querySelector("#video");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");
const $forward = document.querySelector("#forward");
const $backward = document.querySelector("#backward");

$play.addEventListener("click", handlePlay);
$pause.addEventListener("click", handlePause);
$forward.addEventListener("click", handleForward);
$backward.addEventListener("click", handleBackward);

function handlePlay() {
  $video.play();
  $play.hidden = true;
  $pause.hidden = false;
  console.log("Click play");
}

function handlePause() {
  $video.pause();
  $pause.hidden = true;
  $play.hidden = false;
  console.log("Click pause");
}

function handleBackward(){
  $video.currentTime -= 10;
  console.log('Retorceder 10 segundos', $video.currentTime);
}

function handleForward(){
  $video.currentTime += 10;  
  console.log('Avanzar 10 segundos', $video.currentTime);
}

const $progress = document.querySelector('#progress');
$video.addEventListener('loadedmetadata', handleLoanded);
$video.addEventListener('timeupdate', handleTimeUpdate);

function handleLoanded() {
  $progress.max = $video.duration;
  console.log('Ha cargado mi videlo', $video.duration);
}

function handleTimeUpdate(){
  $progress.value = $video.currentTime;
  // console.log('Tiempo actual', $video.currentTime);
}

$progress.addEventListener('input', handleInput);

function handleInput() {
  $video.currentTime = $progress.value;
  console.log($progress.value);
}