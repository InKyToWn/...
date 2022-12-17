noseX=0;
noseY=0;
function preload(){
  moushtache_nose=loadImage('//i.postimg.cc/mr9X3zKj/PNGPIX-COM-Mustache-PNG-Image-8.png')
}
function setup(){
Canvas=createCanvas(300,300);
Canvas.center();
video= createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet= ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("PoseNet is Initialized");
}
function draw(){
    image(video,0,0,300,300); 
    image(moushtache_nose, noseX, noseY, 30, 30);
}
function take_snapshot(){
    save('yourimage.png');
}
function gotPoses(results){
  if (results.length>0){
    console.log(results);
    noseX= results[0].pose.nose.x -15;
    noseY= results[0].pose.nose.y -15;
    console.log("nose x = "+noseX);
    console.log("nose y = "+noseY);
  }
}