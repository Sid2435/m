var canvas= new fabric.Canvas('mycanvas')

player_x = 10;player_y = 10;
block_image_width = 30;
block_image_height = 30;
var player_objects="";
var block_image_objects="";

function player_updates()
{
    fabric.image.fromURL("player.png",function(img){
player_objects=img;

player_objects.scaleToWidth(150);
player_objects.scaleToHeight(140);
player_objects.set({
    top:player_y,
    left:player_x
});
canvas.add(player_objects)
    });
}


function new_image(get_image)
{
    fabric.image.fromURL(get_image,function(img){
block_image_objects=img;

block_image_objects.scaleToWidth(block_image_width);
block_image_objects.scaleToHeight(block_image_height);
block_image_objects.set({
    top:player_y,
    left:player_x
});
canvas.add(block_image_objects)
    });
}

window.addEventListener('keydown', my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

if (e.shiftKey == true &&keyPressed == '80')
{
    console.log("p and shift pressed together");
    block_image_width = block_image_width + 10;
    block_image_height = block_image_height + 10;
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;
}

if (e.shiftKey == true &&keyPressed == '77')
{
    console.log("m and shift pressed together");
    block_image_width = block_image_width - 10;
    block_image_height = block_image_height - 10;
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;
}

if (keypressed == '38'){
    Up()
    console.log("up");

}

if (keypressed == '40'){
    down()
    console.log("down");
    
}

if (keypressed == '37'){
    left()
    console.log("left");
    
}

if (keypressed == '39'){
    right()
    console.log("right");
    
}

if (keyPressed == '87'){
    new_image('wall.jpg')
    console.log('w')
}

if (keyPressed == '71'){
    new_image('groung.png')
    console.log('g')
}

if (keyPressed == '76'){
    new_image('light_green.png')
    console.log('l')
}

if (keyPressed == '84'){
    new_image('trunk.jpg')
    console.log('t')
}

if (keyPressed == '82'){
    new_image('roof.jpg')
    console.log('r')
}

if (keyPressed == '89'){
    new_image('yellow_wall.png')
    console.log('y')
}

if (keyPressed == '68'){
    new_image('dark_green.png')
    console.log('d')
}

if (keyPressed == '85'){
    new_image('unique.png')
    console.log('u')
}

if (keyPressed == '67'){
    new_image('cloud.jpg')
    console.log('c')
}
}

function down()
{
    if (player_y<=500)
    player_y = player_y + block_image_height;
    console.log("block image height = "+ block_image_height);
    console.log("when down arrow key is pressed, x=" + player_x+ "y="+player_y);
    canvas.remove(player_objects);
    player_updates();
}

function left()
{
    if (player_x>0)
    player_x = player_x - block_image_width;
    console.log("block image width = "+ block_image_width);
    console.log("when left arrow key is pressed, x=" + player_x+ "y="+player_y);
    canvas.remove(player_objects);
    player_updates();
}

function Up()
{
    if (player_y>=0)
    player_y = player_y - block_image_height;
    console.log("block image height = "+ block_image_height);
    console.log("when up arrow key is pressed, x=" + player_x+ "y="+player_y);
    canvas.remove(player_objects);
    player_updates();
}

function right()
{
    if (player_x<=850)
    player_x = player_x + block_image_width;
    console.log("block image width = "+ block_image_width);
    console.log("when right arrow key is pressed, x=" + player_x+ "y="+player_y);
    canvas.remove(player_objects);
    player_updates();
}