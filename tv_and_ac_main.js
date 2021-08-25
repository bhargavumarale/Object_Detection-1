img="";

function preload()
{
    img = loadImage('tvandac.jpeg')
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
    text("TV", 250, 200);
    noFill();
    stroke("#FF0000");
    rect(240, 185, 290, 200);
}

function back()
{
    window.location = "index.html";
}