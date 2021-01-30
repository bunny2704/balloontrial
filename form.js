class form{
    constructor(){

    }
    display(){
        var title=createElement('h2')
        title.html("Car  Race")
        title.position(330,0);

        var input=createInput("Name")
        var button=createButton('play')
      
        input.position(130,160)
        button.position(250,200)
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name=input.value();
            PlayerCount+=1
            player1.update(name);
            player1.updateCount(PlayerCount);
            var greeting=createElement('h3')
            greeting.html("Hallo"+name)
            greeting.position(130,160)

        })
        
    }

}