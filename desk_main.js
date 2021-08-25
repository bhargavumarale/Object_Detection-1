img="";

function preload()
{
    img = loadImage('desk.jpeg')
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
    text("Cell phone", 135, 65);
    noFill();
    stroke("#FF0000");
    rect(130, 50, 100, 150);
    fill("#FF0000");
    text("Laptop", 255, 20)
    noFill();
    stroke("#FF0000");
    rect(250, 5, 300, 365)
}

function back()
{
    window.location = "index.html";
}