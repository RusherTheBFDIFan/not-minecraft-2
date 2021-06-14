var canvas = new fabric.Canvas("myCanvas");

player_images_array = ["player 1.png", "player 2.png", "player 3.png", "player 4.png"];
random_number = Math.floor(Math.random() * 4);
console.log(random_number);

block_width = 30;
block_height = 30;

player_x = 10;
player_y = 10;

var player_object = "";

function player_update(){
    fabric.Image.fromURL(player_images_array[random_number],function(Img){
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        blockimage_object = Img;

        blockimage_object.scaleToWidth(block_width);
        blockimage_object.scaleToHeight(block_height);
        blockimage_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(blockimage_object);
    });
}

window.addEventListener("keydown",mykeydown);

function mykeydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '80'){
        console.log("The p key and the shift key are pressed together");
        block_height = block_height + 10;
        block_width = block_width + 10;
        document.getElementById("currentwidth").innerHTML=block_width;
        document.getElementById("currentheight").innerHTML=block_height;
    }
    if (e.shiftKey == true && keyPressed == '77'){
        console.log("The m key and the shift key are pressed together");
        block_height = block_height - 10;
        block_width = block_width - 10;
        document.getElementById("currentwidth").innerHTML=block_width;
        document.getElementById("currentheight").innerHTML=block_height;
    }

    if (keyPressed == '38'){
        up();
        console.log("up");
    }

    if (keyPressed == '40'){
        down();
        console.log("down");
    }

    if (keyPressed == '37'){
        left();
        console.log("left");
    }

    if (keyPressed == '39'){
        right();
        console.log("right");
    }

    if (keyPressed == '87'){
        new_image("wall.jpg");
        console.log("w");
    }

    if (keyPressed == '71'){
        new_image("ground.png");
        console.log("g");
    }

    if (keyPressed == '76'){
        new_image("light_green.png");
        console.log("l");
    }

    if (keyPressed == '68'){
        new_image("dark_green.png");
        console.log("d");
    }

    if (keyPressed == '84'){
        new_image("trunk.jpg");
        console.log("t");
    }

    if (keyPressed == '67'){
        new_image("cloud.jpg");
        console.log("c");
    }

    if (keyPressed == '89'){
        new_image("yellow_wall.png");
        console.log("y");
    }

    if (keyPressed == '85'){
        new_image("unique.png");
        console.log("u");
    }

    if (keyPressed == '82'){
        new_image("roof.jpg");
        console.log("r");
    }

    function up() {
        if (player_y >= 0){
            player_y = player_y - block_height;
            console.log("Block height = " + block_height);
            console.log("When up arrow is pressed, x = " + player_x + " and y = " + player_y);
            canvas.remove(player_object);
            player_update();
        }
    }

    function down() {
        if (player_y <= 460){
            player_y = player_y + block_height;
            console.log("Block height = " + block_height);
            console.log("When down arrow is pressed, x = " + player_x + " and y = " + player_y);
            canvas.remove(player_object);
            player_update();
        }
    }

    function left() {
        if (player_x >= 0){
            player_x = player_x - block_height;
            console.log("Block height = " + block_height);
            console.log("When left arrow is pressed, x = " + player_x + " and y = " + player_y);
            canvas.remove(player_object);
            player_update();
        }
    }

    function right() {
        if (player_x <= 850){
            player_x = player_x + block_height;
            console.log("Block height = " + block_height);
            console.log("When right arrow is pressed, x = " + player_x + " and y = " + player_y);
            canvas.remove(player_object);
            player_update();
        }
    }
}