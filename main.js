canvas = document.getElementById("myCanvas");
ctx = canvas.getcontext("2d");
rover_width = "100";
rover_height= "90";
background = "mars.jpg";
rover_img = "rover.png";
rover_x = "10";
rover_y = "10";
function add() {
    background_ImgTag = new Image();
    background_ImgTag.onload = uploadBackground;
    background_ImgTag.src = background_image;
    
    rover_ImgTag = new Image();
    rover_ImgTag.onload = uploadRover;
    rover_ImgTag.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(background_ImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(rover_ImgTag, rover_x, rover_y, rover_width, rover_height);
}