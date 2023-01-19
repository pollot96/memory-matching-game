//Game INITATION


const urls = ["./images/front1.png","./images/front2.png","./images/front3.png","./images/front4.png","./images/front5.png","./images/front6.png","./images/front7.png","./images/front8.png"];


let counter =[0,0,0,0,0,0,0,0];
let x;
function initiationed(){
  $("#won").fadeOut(0);
  $("#nice").fadeOut(0);
  $("#retry").fadeOut(0);
 document.getElementById("retry").style.zIndex="-1";
 document.getElementById("nice").style.zIndex="-1";
 document.getElementById("won").style.zIndex="-1";
  savedindexs =[];
counter =[0,0,0,0,0,0,0,0];
for(let i=0;i<document.getElementsByClassName("front-card").length;i++){
  x=Math.floor(Math.random()*8);
  document.getElementsByClassName("front-card")[i].src=urls[x];
  counter[x]=counter[x]+1;
  while(counter[x]>2){
  counter[x]=counter[x]-1;
  x=Math.floor(Math.random()*8);
  document.getElementsByClassName("front-card")[i].src=urls[x];
  counter[x]=counter[x]+1;
  }
}
for(let i=0;i<document.getElementsByClassName("card").length;i++){
  document.getElementsByClassName("card")[i].className="card";
}
}
function staticed(){
  console.log("just do it");
}
let y=0;
let z=0;
let savedindexs =[];
// GAME DEVELOPPEMENt
initiationed();

let audiozed=[document.getElementById("audio-flip"),document.getElementById("audio-notflip"),document.getElementById("audio-success"),document.getElementById("audio-congrats"),document.getElementById("audio-retry"),document.getElementById("audio-bounce"),document.getElementById("audio-start")];

function audioplayflip(){
  audiozed[0].play();
}
function audioplaynotflip(){
  audiozed[1].play();
}
function audioplaysuccess(){
  audiozed[2].play();
}
function audioplaycongrats(){
  audiozed[3].play();
}
function audioplayretry(){
  audiozed[4].play();
}
function audioplaybounce(){
  audiozed[5].play();
}
function audioplaystart(){
  audiozed[6].play();
}
let turned=20;
function flip(i){
  
    document.getElementsByClassName("card")[i].classList.toggle("flip");
    audioplayflip();
    // for(let k=0;k<document.getElementsByClassName("inside-card").length;k++){
    //   document.getElementsByClassName("inside-card")[k].onclick=function() {staticed()};
    // }
    if((y==0)){
      document.getElementsByClassName("front-card")[i].onclick=function() {staticed()};
      z=i;
      y=1;
    }else{
      if(document.getElementsByClassName("front-card")[i].src==document.getElementsByClassName("front-card")[z].src){
        audioplaysuccess();
        document.getElementsByClassName("front-card")[i].onclick=function() {staticed()};
  document.getElementsByClassName("front-card")[z].onclick=function() {staticed()};
  savedindexs.push(z);
  savedindexs.push(i);
  
}else{
  setTimeout( () => {
    document.getElementsByClassName("front-card")[i].onclick=function() {flip(i)};
    document.getElementsByClassName("front-card")[z].onclick=function() {flip(z)};
    document.getElementsByClassName("card")[i].className="card";
    document.getElementsByClassName("card")[z].className="card";
    audioplaynotflip();
  } 
  ,300);


}
turned--;
document.getElementsByClassName("numb")[0].innerHTML=turned;
y=0;
if((turned==0)&&(savedindexs.length!=16)){
  audioplayretry()
  $("#untouched").css("z-index","1019");
  $("#retry").css("z-index","1020");
  $("#retry").fadeOut(0);
   $("#retry").fadeIn(1500, "swing");
   
}
    }
if(savedindexs.length==16){
//  document.getElementById("won").style.zIndex = "1020px";
 $("#won").css("z-index","1020");
 $("#won").fadeOut(0);
 audioplaycongrats()
  $("#won").fadeIn(2900, "swing",function(){
    $("#nice").fadeOut(0);
    $("#nice").css("z-index","1021");
    $("#nice").fadeIn(1000, "swing");
  });

}
    // for(let k=0;k<document.getElementsByClassName("inside-card").length;k++){
    //   document.getElementsByClassName("inside-card")[k].onclick=function() {flip(k)};
    // }
   
  };


  function newgame(){

  }
  
  $(".button").click(function () {
    audioplaybounce();
    $(".overlay").slideToggle("3000", "easeOutBounce");
  });

  $(".easy").click(function () {
    turned=30;
    audioplaystart();
    $(".overlay").slideUp("500", "easeOutBounce");
    document.getElementsByClassName("numb")[0].innerHTML=turned;
    initiationed()
  });

  $(".medium").click(function () {
    turned=20;
    audioplaystart();
    $(".overlay").slideUp("500", "easeOutBounce");
    document.getElementsByClassName("numb")[0].innerHTML=turned;
    initiationed()
  });
  $(".hard").click(function () {
    turned=15;
    audioplaystart();
    $(".overlay").slideUp("500", "easeOutBounce");
    document.getElementsByClassName("numb")[0].innerHTML=turned;
    initiationed()
  });







    
  

