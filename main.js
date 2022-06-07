function setup(){
    canvas = createCanvas(600, 400);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,600,480);
    rect(30,20,55,55,20);
    rect(520,20,55,55,20);
    rect(520,320,55,55,20);
    rect(30,320,55,55,20);
    circle(55,120,50);
    circle(55,195,50);
    circle(55,270,50);
    circle(150,45,50);
    circle(250,45,50);
    circle(350,45,50);
    circle(450,45,50);
    circle(550,120,50);
    circle(550,200,50);
    circle(550,270,50);
    circle(450,350,50);
    circle(350,350,50);
    circle(250,350,50);
    circle(150,350,50);



}
function take_snapshot(){
    save("vidhi.png");
}
