img="";

function preload()
{
    img = loadImage('bedroom.jpeg')
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
    text("Bed", 200, 230);
    noFill();
    stroke("#FF0000");
    rect(190, 200, 300, 200);
    fill("#FF0000");
    text("Chair", 515, 250)
    noFill();
    stroke("#FF0000");
    rect(510, 230, 100, 100);
}

function back()
{
    window.location = "index.html";
}