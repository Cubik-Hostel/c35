var hypnoball,database;
var position;

function setup(){
    database = firebase.database();
    console.log(database);
    createCanvas(500,500);
    hypnoball = createSprite(250,250,10,10);
    hypnoball.shapeColor = "red";

    var hypnoballPosition = database.ref("ball/position");
    hypnoballPosition.on("value",readPosition,showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

//function changePosition(x,y){
    //hypnoball.x = hypnoball.x + x;
    //hypnoball.y = hypnoball.y + y;
//}
function readPosition(data){
 position = data.val();
 console.log(position.x); 
 hypnoball.x = position.x; 
 hypnoball.y = position.y;
 } 
 function writePosition(x,y){
 database.ref('ball/position').set({ 
 'x': position.x + x ,
 'y': position.y + y })
 }
 function showError(){ 
 console.log("Error in writing to the database");
 }