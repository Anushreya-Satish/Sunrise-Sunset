const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var bg ;

function preload() {
   getBackgroundImg();
    backgroundImg = loadImage("sunrise1.png","sunrise2.png","sunrise3.png","sunrise4.png","sunrise5.png","sunrise6.png","sunset7.png","sunset8.png","sunset9.png","sunset10.png","sunset11.png","sunset12.png");
}

function setup(){
    var canvas = createCanvas(1515,710);
    engine = Engine.create();
    world = engine.world;
}

function draw(){
    // add condition to check if any background image is there to add
    if(backgroundImg);
    background(backgroundImg);
    fill("black");
    textSize(30);
    
    if(hour>=12){
        text("Time : "+ hour%12 + " PM", 50,100);
    }else if(hour==0){
        text("Time : 12 AM",100,100);
    }else{
        text("Time : "+ hour%12 + " AM", 50,100);
    }
    Engine.update(engine);

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format
    var responseJSON = await response.json(); 
    var datetime = responseJSON.datetime; 

    // write code slice the datetime
    hour = datetime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
    if(hour>=04 && hour<=06){
        bg = "sunrise1.png";
    } else if(hour>=06 && hour<=08){
        bg = "sunrise2.png";
    } else if(hour>=08 && hour<=10){
        bg = "sunrise3.png";
    } else if(hour>=10 && hour<=12){
        bg = "sunrise4.png";
    } else if(hour>=12 && hour<=14){
        bg = "sunrise5.png";
    } else if(hour>=14 && hour<=16){
        bg = "sunrise6.png";
    } else if(hour>=16 && hour<=18){
        bg = "sunset7.png";
    } else if(hour>=18 && hour<=20){
        bg = "sunset8.png";
    } else if(hour>=20 && hour<=22){
        bg = "sunset9.png";
    } else if(hour>=23 && hour==0){
        bg = "sunset10.png";
    } else if(hour===0 && hour<=03){
        bg = "sunset11.png"
    } else{
        bg = "sunset12.png";
    }

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}
