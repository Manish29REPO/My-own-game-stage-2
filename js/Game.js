class Game {
  constructor() {}

  start() {
    form = new Form();
    form.display();
    player = new Player();
  
    redPlayer = createSprite(width-150, random(100,height-100));
    redPlayer.addImage("redTeam", redPlayerImg);

    bluePlayer = createSprite(100, random(100, height-100) );
    bluePlayer.addImage("blueTeam", bluePlayerImg);
  }

  play() {
    form.hide();  
    this.handlebluePlayerControls();
    
    
    drawSprites();
  }
    
    
  handlebluePlayerControls(){
    if (keyIsDown(UP_ARROW)) {
      bluePlayer.position.y -= 10;       
    }

    if (keyIsDown(DOWN_ARROW)) {
      bluePlayer.position.y += 10;       
    }
    
      if (keyIsDown(LEFT_ARROW)) {
      bluePlayer.position.x -= 5;
    }
    
      if (keyIsDown(RIGHT_ARROW)) {
      bluePlayer.position.x += 5;
    }
    }

}
