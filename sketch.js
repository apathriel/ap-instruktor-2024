/*Interacting with videoCaptured data: Mouse, Keyboard, Audio, Web Camera
check:
1. sound input via microphonerophone: https://p5js.org/examples/sound-microphone-input.html
2. dom objects like button
3. p5.sound library:
https://github.com/processing/p5.js-sound/blob/master/lib/p5.sound.js
4. Face tracking library: https://github.com/auduno/clmtrackr
5. p5js + clmtracker.js: https://gist.github.com/lmccart/2273a047874939ad8ad1
note: the audio doesn't work on Firefox 96, the temp fix is to import older ver.
See: https://aesthetic-programming.gitlab.io/book/ > #4 with older libraries
*/
let videoCapture;
function createVideoCapture() {
  videoCapture = createCapture(VIDEO);
  videoCapture.size(640, 480);
  videoCapture.hide();
}

let microphone;
function createAudioCapture() {
  microphone = new p5.AudioIn();
  microphone.start();
}

let cameraTracker;
function setupFaceTracker() {
  cameraTracker = new clm.tracker();
  cameraTracker.init(pModel);
  cameraTracker.start(videoCapture.elt);
}

let likeButton;
function setupLikeButton() {
  //styling the like button with CSS
  likeButton = createButton('like');
  likeButton.style("display", "inline-block");
  likeButton.style("color", "#fff");
  likeButton.style("padding", "5px 8px");
  likeButton.style("text-decoration", "none");
  likeButton.style("font-size", "0.9em");
  likeButton.style("font-weight", "normal");
  likeButton.style("border-radius", "3px");
  likeButton.style("border", "none");
  likeButton.style("text-shadow", "0 -1px 0 rgba(0, 0, 0, .2)");
  likeButton.style("background", "#4c69ba");
  
  likeButton.mouseOut(revertLikeButtonStyle);
  likeButton.mousePressed(changeBackgroundOfLikeButton);
}

function changeBackgroundOfLikeButton() {
  likeButton.style("background", "#2d3f74");
  userStartAudio();
}

function revertLikeButtonStyle(){
  likeButton.style("background", "#4c69ba");
}

function setup() {
  createCanvas(640, 480);
  createVideoCapture()
  createAudioCapture()
  setupFaceTracker()
  setupLikeButton()
}

function draw() {
  //getting the audio data i.e the overall volume (between 0 and 1.0)
  let vol = microphone.getLevel();
  /*map the microphone vol to the size of button,
  check map function: https://p5js.org/reference/#/p5/map */
  print(vol)
  likeButton.size(floor(map(vol, 0, 1, 40, 450)));

  //draw the videoCaptured video on a screen with the image filter
  image(videoCapture, 0,0, 640, 480);
  filter(INVERT);

  let positions = cameraTracker.getCurrentPosition();
  //check the availability of web cam tracking
  if (positions.length) {

    // *Make the like button follow the mouse cursor instead of the mouth
    let mousePositionX = mouseX // https://p5js.org/reference/#/p5/mouseX
    let mousePositionY = mouseY; // https://p5js.org/reference/#/p5/mouseY 
    likeButton.position(mousePositionX, mousePositionY);

    /*loop through all major points of a face
    (see: https://www.auduno.com/clmtrackr/docs/reference.html)*/
    for (let i = 0; i < positions.length; i++) {
       noStroke();
       //color with alpha value
       fill(map(positions[i][0], 0, width, 100, 255), 0, 0, 120);
       //draw ellipse at each position point
       ellipse(positions[i][0], positions[i][1], 5, 5);
    }
  }
}

// *Make the like button flip only by using the spacebar, not other keys

let number = 0;

//keyboard videoCapture
function keyPressed() {

  number++

  if (keyCode === 32 && number % 2 != 0) {
    likeButton.style("transform", "rotate(180deg)");

  } else if (keyCode === 32 && number % 2 == 0) {   
    likeButton.style("transform", "rotate(0deg)");
  }
}

  


