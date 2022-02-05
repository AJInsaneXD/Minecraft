var canvas = new fabric.Canvas(mycanvas);

block_img_width = 30;
block_img_height = 30;

player_y = 10;
player_x = 10;

var player_objects ="";
var block_objects ="";

function player_update(){
fabric.Image.fromURL("player.png",function (Img){
    player_objects = Img;

    player_objects.scaleToWidth(150);
    player_objects.scaleToHeight(140);
player_objects.set(
    {
        top:player_y,
        left:player_x
    }
)
canvas.add(player_objects)
})
}

function blocks_adding(getimage){
    fabric.Image.fromURL(getimage,function (Img){
        block_objects = Img;
    
        block_objects.scaleToWidth(block_img_width);
        block_objects.scaleToHeight(block_img_height);
    block_objects.set(
        {
            top:player_y,
            left:player_x
        }
    )
    canvas.add(block_objects)
    })
    }

    window.addEventListener("keydown",my_keydown);

    function my_keydown(e){
        keyPressed = e.keyCode;
        console.log(keyPressed);
        if(e.shiftKey == true && keyPressed == "80"){
            console.log("P and Shift are pressed");
            block_img_height = block_img_height + 10;
            block_img_weight = block_img_width + 10;
            document.getElementById("current_width").innerHTML = block_img_width;
            document.getElementById("current_height").innerHTML = block_img_height;
        }
        if(e.shiftKey == true && keyPressed == "77"){
            console.log("M and Shift are pressed");
            block_img_height = block_img_height - 10;
            block_img_weight = block_img_width - 10;
            document.getElementById("current_width").innerHTML = block_img_width;
            document.getElementById("current_height").innerHTML = block_img_height;
        }
        if(keyPressed == "38"){
            up()
            console.log("up key is pressed")
        }

        if(keyPressed == "40"){
            down()
            console.log("down key is pressed")
        }

        if(keyPressed == "37"){
        left()
            console.log("left key is pressed")
        }

        if(keyPressed == "39"){
            right()
            console.log("right key is pressed")
        }

        if(keyPressed == "87"){
            blocks_adding("wall.jpg")
            console.log("you pressed w key")
        }

        if(keyPressed == "71"){
            blocks_adding("ground.png")
            console.log("you pressed g key")
        }

        if(keyPressed == "76"){
            blocks_adding("light_green.png")
            console.log("you pressed l key")
        }

        if(keyPressed == "84"){
            blocks_adding("trunk.jpg")
            console.log("you pressed t key")
        }

        if(keyPressed == "82"){
            blocks_adding("roof.jpg")
            console.log("you pressed r key")
        }

        if(keyPressed == "89"){
            blocks_adding("yellow_wall.png")
            console.log("you pressed y key")
        }

        if(keyPressed == "68"){
            blocks_adding("dark_green.png")
            console.log("you pressed d key")
        }

        if(keyPressed == "85"){
            blocks_adding("unique.png")
            console.log("you pressed u key")
        }

        if(keyPressed == "67"){
            blocks_adding("cloud.jpg")
            console.log("you pressed c key")
        }
    }

    function up(){
        if(player_y >=0){
    player_y = player_y - block_img_height;
    console.log("block image height =" + block_img_height);
    console.log("up arrow is pressed, X = "+ player_x +",Y= "+ player_y);
    canvas.remove(player_objects);
    player_update();
        }
    }

    
    function down(){
        if(player_y <=500){
    player_y = player_y + block_img_height;
    console.log("block image height =" + block_img_height);
    console.log("up arrow is pressed, X = "+ player_x +",Y= "+ player_y);
    canvas.remove(player_objects);
    player_update();
        }
    }

    function left(){
        if(player_x >0){
    player_x = player_x - block_img_width;
    console.log("block image width =" + block_img_width);
    console.log("up arrow is pressed, X = "+ player_x +",Y= "+ player_y);
    canvas.remove(player_objects);
    player_update();
        }
    }

    
    function right(){
        if(player_x <=850){
    player_x = player_x + block_img_width;
    console.log("block image width =" + block_img_width);
    console.log("up arrow is pressed, X = "+ player_x +",Y= "+ player_y);
    canvas.remove(player_objects);
    player_update();
        }
    }