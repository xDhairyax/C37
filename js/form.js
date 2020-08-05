class Form{
    constructor(){
    this.input=createInput("Name");
    this.button=createButton("Play");
    this.greeting=createElement('h2');

    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
        var title=createElement('h1');
        title.html("Car Racing Game");
        title.position(displayWidth/2-40,20);
        this.input.position(displayWidth/2-50,displayHeight/2-50);
        this.button.position(displayWidth/2-40,displayHeight/2);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();
        playerCount=playerCount+1;
        player.index=playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Welcome "+player.name);
        this.greeting.position(displayWidth/2-40,displayHeight/2);
        })
    }
}