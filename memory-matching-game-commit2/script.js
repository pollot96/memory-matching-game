//Game INITATION
//---------------------------------------------------------------------------------
//------------------------------VARIABLES DECLARATION------------------------------
//---------------------------------------------------------------------------------
const urls = ["./images/front1.png","./images/front2.png","./images/front3.png","./images/front4.png","./images/front5.png","./images/front6.png","./images/front7.png","./images/front8.png"];
let counter =[0,0,0,0,0,0,0,0];
let x;
let y=0;
let z=0;
let savedindexs =[];
const audiozed=[document.getElementById("audio-flip"),document.getElementById("audio-notflip"),document.getElementById("audio-success"),document.getElementById("audio-congrats"),document.getElementById("audio-retry"),document.getElementById("audio-bounce"),document.getElementById("audio-start")];
const videozed=[document.getElementById("video-nice")];
let turned=20;
$("#untouched").css("z-index","1019");//----to not click and flip card while the game didn't start
//---------------------------------------------------------------------------------
//---------------------RANDOM PICTURES IN EACH CARD FRONT SIDE---------------------
//---------------------------------------------------------------------------------

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
//---------------------------------------------------------------------------------
//-------------------A FUNCTION TO GET THE CARD TO ITS BACKSIDE--------------------
//---------------------------------------------------------------------------------
}
function staticed(){
  console.log("just do it");
}


//---------------------------------------------------------------------------------
//-------------------------------AUDIO AND VIDEO AREA------------------------------
//---------------------------------------------------------------------------------

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
function videonice(){
  videozed[0].play();
}


// GAME DEVELOPPEMENt


//---------------------------------------------------------------------------------
//-----------------------------------GAME CORE-------------------------------------
//---------------------------------------------------------------------------------


function flip(i){
  
   document.getElementsByClassName("card")[i].classList.toggle("flip");//---the toggle add flip to the className, it will change some style to "rotate" the card 
    audioplayflip();//this fuction gives us the sound of a card flipping


    // for(let k=0;k<document.getElementsByClassName("inside-card").length;k++){
    //   document.getElementsByClassName("inside-card")[k].onclick=function() {staticed()};
    // }
//---- this condition is called when ONLY ONE CARD is flipped to its front side
    if((y==0)){
      document.getElementsByClassName("front-card")[i].onclick=function() {staticed()};
      z=i;
      y=1;
    }else{
      //--- when the second card is flipped we go to this else.
      //---- this condition runs when the both images are the same it will remove the flip capacity so those matching card cannot go to their backside 
      if(document.getElementsByClassName("front-card")[i].src==document.getElementsByClassName("front-card")[z].src){
        audioplaysuccess();
        document.getElementsByClassName("front-card")[i].onclick=function() {staticed()};
  document.getElementsByClassName("front-card")[z].onclick=function() {staticed()};
 //-- this counter bellow will be used as main counter of each matched card (the total are 16, so this array's max lenght won't be above 15)
  savedindexs.push(z);
  savedindexs.push(i);
  
}else{
  //----- while the first condition doesn't met, the method bellow will put back the unmached card to their backside
  setTimeout( () => {
    document.getElementsByClassName("front-card")[i].onclick=function() {flip(i)};
    document.getElementsByClassName("front-card")[z].onclick=function() {flip(z)};
    document.getElementsByClassName("card")[i].className="card";
    document.getElementsByClassName("card")[z].className="card";
    audioplaynotflip();
  } 
  ,300);


}
//---- our turn counter will decrease by one after each time the second card is flipped. we call this : a turn. the variable's max value depend on the difficulty. it will be displayed inside a timer.
turned--;
document.getElementsByClassName("numb")[0].innerHTML=turned;
y=0;
//---- so when the turn counter reaches 0 and there is still unmached cards, the condition bellow will trigger a section called retry displaying a message of retrying because user runs out of attempts
if((turned==0)&&(savedindexs.length!=16)){
  audioplayretry()
  $("#untouched").css("z-index","1019");
  $("#retry").css("z-index","1020");
  $("#retry").fadeOut(0);
   $("#retry").fadeIn(1500, "swing");
  
}
    }
    //--- we've explained before that our main counter increase each time there's any matched card. when it reaches 16 means all cards are matched. so user won the game :). this condition will display a congrating message to the user.
if(savedindexs.length==16){
 $("#won").css("z-index","1020");
 $("#won").fadeOut(0);
 audioplaycongrats();
 $("#untouched").css("z-index","1019");
  $("#won").fadeIn(2900, "swing",function(){
    $("#nice").fadeOut(0);
    $("#nice").css("z-index","1021");
    $("#nice").fadeIn(1000, "swing");
    videonice();
  });
}
    // for(let k=0;k<document.getElementsByClassName("inside-card").length;k++){
    //   document.getElementsByClassName("inside-card")[k].onclick=function() {flip(k)};
    // }
   
  };

//---- this onclick event toggle the difficulty's overlay menu
  $(".button").click(function () {
    audioplaybounce();
    $(".overlay").slideToggle("3000", "easeOutBounce");
  });


  //--- those function bellow will restart the game to its initial state.
  $(".easy").click(function () {
    turned=30;
    audioplaystart();
    $(".overlay").slideUp("500", "easeOutBounce");
    document.getElementsByClassName("numb")[0].innerHTML=turned;
    initiationed();
    $("#untouched").css("z-index","-1");
    $(".digit h2,h5").css("color","green");
  });

  $(".medium").click(function () {
    turned=20;
    audioplaystart();
    $(".overlay").slideUp("500", "easeOutBounce");
    document.getElementsByClassName("numb")[0].innerHTML=turned;
    initiationed();
    $("#untouched").css("z-index","-1");
    $(".digit h2,h5").css("color","yellow");
  });

  $(".hard").click(function () {
    turned=15;
    audioplaystart();
    $(".overlay").slideUp("500", "easeOutBounce");
    document.getElementsByClassName("numb")[0].innerHTML=turned;
    initiationed();
    $("#untouched").css("z-index","-1");
    $(".digit h2,h5").css("color","blue");
  });







    
  

