var dois
 var gameState = "play"
var um
var score
function preload(){
  naveImg = loadImage ("assets/nave.png")
  alienMImg = loadImage ("assets/alienM.png")
  alienPImg = loadImage ("assets/alienP.png")
  fundoImg = loadImage ("assets/fundo.jpg")
  meteoroImg= loadImage ("assets/meteoro.png")
  chefaoImg = loadImage ("assets/chefao.png")
  tiroImg = loadImage ("assets/shot.png")
  explosãoGif = loadAnimation ("assets/explosão.gif")
  coracaoImg = loadImage ("assets/heart.png")
}


function setup() {
  createCanvas (500,700)
  coracao = createSprite(18,30)
  coracao.addImage(coracaoImg)
  coracao.scale = 0.15 
  coracao2 = createSprite(53,30)
  coracao2.addImage(coracaoImg)
  coracao2.scale = 0.15
  coracao3 = createSprite(88,30)
  coracao3.addImage(coracaoImg)
  coracao3.scale = 0.15
  nave = createSprite (250,600)
  nave.addImage(naveImg)
  nave.scale = 0.25
  edges = createEdgeSprites()
  nave.setCollider('circle',0,0,140)
 // nave.debug = true
  aliens = new Group()
  aliensM = new Group()
  aliensM2 = new Group()
  tiros = new Group()
  meteoros = new Group()
  score = 5
  
}

function draw() {
  image (fundoImg,0,0,500,700)
   if (nave.collide(meteoros) || nave.collide(aliens) && gameState === 'play'){
    coracao3.visible = false
   }
   if (nave.collide(meteoros) || nave.collide(aliens) && gameState === 'um'){
    coracao.visible = false
   }
   if (nave.collide(meteoros) || nave.collide(aliens) && gameState === 'dois'){
    coracao2.visible = false
   }
    spawnaliens()
    spawnaliensM1()
    spawnaliensM2() 

  if (nave.destroy)
  nave.x = World.mouseX
  nave.y = World.mouseY
  if (aliens.collide(tiros)){
    aliens.destroyEach()
    score = score -1
  }
    if (gameState === 'play'){
   if (nave.collide(meteoros)){
   nave.x = 250
   nave.y = 600
  // //   nave.changeAnimation('explosion',explosãoGif)
   coracao3.visible=false
   
    }
    if (nave.collide(aliens)){
      nave.x = 250
      nave.y = 600
      coracao3.visible=false
    }
  }
  if (gameState === dois){
    if (nave.collide(meteoros)){
    nave.x = 250
    nave.y = 600
   // //   nave.changeAnimation('explosion',explosãoGif)
    coracao2.visible=false
    
     }
     if (nave.collide(aliens)){
       nave.x = 250
       nave.y = 600
       coracao2.visible=false
     }
   }
   if (gameState === um){
    if (nave.collide(meteoros)){
    nave.x = 250
    nave.y = 600
   // //   nave.changeAnimation('explosion',explosãoGif)
    coracao.visible=false
    
     }
     if (nave.collide(aliens)){
       nave.x = 250
       nave.y = 600
       coracao.visible=false
     }
   
   if (nave.collide(aliensM)){
    nave.x = 250
    nave.y = 600
    coracao.visible=false
  }
  if (nave.collide(aliensM2)){
    nave.x = 250
    nave.y = 600
    coracao.visible=false
  }
}
  if (keyWentDown('space')){
    tiro = createSprite (250,600,5,10)
    tiro.addImage (tiroImg)
    tiro.scale = 0.15
    tiro.lifetime = 70
    tiro.velocityY = -10
    tiro.x = nave.x + 2
    tiro.y = nave.y
    tiros.add(tiro)

  }
  spawnmeteoro()
  drawSprites();
  // textSize (15)
  // fill ('#39FF14')
  // text('destrua '+score+' aliens',350,30)
}

function spawnaliens(){
  if(frameCount%90 === 0){
    var alienP = createSprite(0,130,20,20)
    alienP.velocityX = -6
    alienP.addImage (alienPImg)
    alienP.scale = 0.095
    alienP.lifetime = 500
    alienP.bounceOff(edges)
    aliens.add(alienP)
  }
}
function spawnaliensM1(){
  if(frameCount%90 === 0){
    var alienM = createSprite(50,0,20,20)
    alienM.velocityY = -6
    alienM.addImage (alienMImg)
    alienM.scale = 0.35
    alienM.lifetime = 500
    alienM.bounceOff(edges)
    aliensM.add(alienM)
  }
}
function spawnaliensM2(){
  if(frameCount%90 === 0){
    var alienM2 = createSprite(470,0,20,20)
    alienM2.velocityY = -6
    alienM2.addImage (alienMImg)
    alienM2.scale = 0.35
    alienM2.lifetime = 500
    alienM2.bounceOff(edges)
    aliensM2.add(alienM2)
  }
}
function spawnmeteoro(){
  if(frameCount%240 === 0){
    var meteoro = createSprite(500,0,20,20)
    meteoro.x=Math.round(random(0,500))
    meteoro.velocityX = -6
    meteoro.velocityY = 13
    meteoro.addImage (meteoroImg)
    meteoro.scale = 0.7
    meteoros.add(meteoro)
    meteoro.lifetime = 100
  }
}


