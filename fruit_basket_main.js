img="";

function preload()
{
    img = loadImage('fruit_basket.jpeg')
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#00ff00");
    text("Banana", 205, 115);
    noFill();
    stroke("#00ff00");
    rect(200, 100, 290, 150);

    fill("#00ff00");
    text("Bowl", 105, 300);
    noFill();
    stroke("#00ff00");
    rect(100, 280, 450, 130);
}

function back()
{
    window.location = "index.html";
}