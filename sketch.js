var wall, thickness;
var bullet, speed, wieght;

function setup() {
    createCanvas(1600, 400);
    
    speed = random(55, 90);
    wieght = random(400, 1500);
    thickness = random(22, 83);
    
    bullet = createSprite(50, 200, 50, 5);
    bullet.shapeColor = "white";
    bullet.velocityX = speed;
    
    wall = createSprite(1200, 200, thickness, height/2);
}

function draw() {
    background(0);
    
    if(collideMe(bullet, wall)) {
        bullet.velocityX = 0;
        
        var damage = 0.5 * wieght * speed * speed / (thickness * thickness * thickness);
        
        if(damage > 10) {
            wall.shapeColor = "red";
        }
        
        if(damage < 10) {
            wall.shapeColor = "chartreuse"
        }
    }
    
    drawSprites();
}