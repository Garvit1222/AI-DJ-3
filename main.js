left_Wrist_x = 0;
left_Wrist_y = 0;
right_Wrist_x = 0;
right_Wrist_y = 0;
song = "";

function preload()
{
    song = loadSound("mp3");
}

function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotposes);
}

function modelloaded()
{
    console.log("modelloaded");
}

function draw()
{
    Image(video,0,0,600,500);
}

function play()
{
    song.play();    
}

function gotposes()
{
    if (results.length > 0)
    {
        console.log("results");

        left_Wrist_x = results[0].pose.leftWrist.x;
        left_Wrist_y = results[0].pose.leftWrist.y;
        console.log("leftwristx = " + left_Wrist_x + "leftwristy" + left_Wrist_y);
    }

}