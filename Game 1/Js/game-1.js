const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

/*
//load image
var img = new Image();
img.src = "./character.png";
//images.onerror = myImgErrorHandler; */
const images = document.getElementById('img');
//const characterActions = ['up', 'top right', 'right', 'down right', 'down', 'jump'];
const characterActions = ['up', 'right', 'jump', 'down right'];
const characters = [];
const numberOfCharacters = 30;
class Character {
    constructor(){
        this.width = 103.0625;
        this.height = 113.125;
        this.frameX = 3;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speed = (Math.random() * 3.5) + 5.5;
        this.action = characterActions[Math.floor(Math.random() * characterActions.length)];
        if (this.action === 'up') {
            this.frameY = 0;
            this.maxFrame = 15;
            this.minFrame = 4;
        } else if (this.action === 'right'){
            this.frameY = 3;
            this.maxFrame = 13;
            this.minFrame = 3;
        } else if (this.action === 'jump') {
            this.frameY = 7;
            this.maxFrame = 9;
           this.minFrame = 0;
        } else if (this.action === 'down right'){
            this.frameY = 4;
            this.maxFrame = 15;
            this.minFrame = 4;
        }
        
    }
    draw(){
          drawSprite(images, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, this.width, this.height);
    //animate Sprite or character
    if (this.frameX < this.maxFrame) this.frameX++;
    else this.frameX = this.minFrame;

    }
    update(){
        if(this.action === 'right'){
        if (this.x < canvas.width + this.width) { 
            this.x = 0 - this.width;
            this.y = Math.random() * canvas.height - this.height;
        }  else {
        this.x += this.speed;
          }
      } else if(this.action === 'up'){
          if(this.y < (0 - this.height)){
              this.y = canvas.height + this.height;
              this.x = Math.random() * canvas.width;
          } else {
              this.y -= this.speed;
          }
      } else if(this.action === 'down right'){
          if(this.y > canvas.height + this.height && this.x > this.width + canvas.width){
              this.y = 0 - this.height;
              this.x = Math.random() * canvas.width / 2;
          } else {
              this.y += this.speed;
              this.x += this.speed;
            }
        }
    }
}

for (i = 0; i < numberOfCharacters; i++){
    characters.push(new Character());
}

/*
const playerWidth = 103.0625;
const playerHeight = 113.125;
let playerFrameX = 3;
let playerFrameY = 3;

let playerX = 0;
let playerY = 0;
const playerSpeed = 6;
*/

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    // body...
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);

}



function animate(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    for(i = 0; i < characters.length; i++){
        characters[i].draw();
        characters[i].update();
    }
    
   /* drawSprite(images, playerWidth * playerFrameX, playerHeight * playerFrameY, playerWidth, playerHeight, playerX, playerY, playerWidth, playerHeight);
    //animate Sprite or character
    if (playerFrameX < 13) playerFrameX++;
    else playerFrameX = 3;
    */
    /*
    //move player or character  
    if (playerX < canvas.width + playerWidth) playerX+= playerSpeed;
    else playerX = 0 - playerWidth;
    */
}
window.onload = setInterval(animate, 1000/20);

window.addEventListener('resize', function(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
}); 