class player{
    constructor(){

    }
    getCount(){
      var count1=database.ref('PlayerCount');
      count1.on("value",function(data){
          PlayerCount=data.val();
          
      })}
    updateCount(Count){
        database.ref('/').update({ PlayerCount:Count })
    }
      
    update(name){
        var playerIn="player1"+PlayerCount;
        database.ref(playerIn).set({name:name})
    }
}