function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
    b="";
}
function draw(){
    image(video,0,0,640,480);
    tint(b);
}
function aplly(){
    b=document.getElementById("a").value;
}
function take_snapshot(){
    save('anything.png');
}