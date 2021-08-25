img="";

function preload()
{
    img = loadImage('bottles.jpeg')
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Bottle", 30, 20);
    noFill();
    stroke("#FF0000");
    rect(20, 5, 130, 400);
    fill("#FF0000");
    text("Bottle", 280, 20);
    noFill();
    stroke("#FF0000");
    rect(270, 5, 130, 400);
    fill("#FF0000");
    text("Bottle", 530, 20);
    noFill();
    stroke("#FF0000");
    rect(520, 5, 110, 400);
}

function back()
{
    window.location = "index.html";
}