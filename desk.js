status ="";

function preload()
{
    img = loadImage("desk.jpg");
}

function setup()
{
canvas = createCanvas(380, 380);
canvas.center();
ObjectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status: Detecting Object";
}

function modelLoaded()
{
    console.log("Model is Loaded");
    status= true;
    ObjectDetector.detect(video, gotResult);


}

function gotResult(error, results)
{
    if(error)
    {
        console.log(error);
    }else
    {
        console.log(results);
        objects = results;
    }
}