var ballon
var ballonig,bgig
var database,ballonPosition
var position

function preload (){
 ballonig=loadImage("airballon.png")
 bgig=loadImage("cityImage.png")

}
function setup() {
  createCanvas(500,500);
  ballon=createSprite(200, 200,50,50);
  ballon.addImage(ballonig)
  ballon.scale=0.7
  database=firebase.database()
  ballonPosition=database.ref("Ballon/Position")
  ballonPosition.on("value",readPosition)
}

function draw() {
  background(bgig);
  if (keyDown(LEFT_ARROW)){
  updateHeight(-10,0)
  }
  else if (keyDown(RIGHT_ARROW)){
    updateHeight(10,0)
    }

  else if (keyDown(UP_ARROW)){
    updateHeight(0,-10)
      }

  else if (keyDown(DOWN_ARROW)){
    updateHeight(0,10)
       }

  drawSprites();
}

function readPosition(data){
  position=data.val()
  ballon.x=position.x
  ballon.y=position.y
}

function updateHeight(x,y){
  database.ref('Ballon/Position').set({
    'x': ballon.x +x,
    'y': ballon.y+y
  })
}
