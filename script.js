//Game INITATION
//---------------------------------------------------------------------------------
//------------------------------VARIABLES DECLARATION------------------------------
//---------------------------------------------------------------------------------

let urls = ["./images/front1.png","./images/front2.png","./images/front3.png","./images/front4.png","./images/front5.png","./images/front6.png","./images/front7.png","./images/front8.png"];

let counter,savedindexs =[];

let points=0,highscore,usernames, x, y=0, z=0,tempohs,tempoun,intervalID,timer =0,counnttable=0 ;

const audiozed=[document.getElementById("audio-flip"),document.getElementById("audio-notflip"),document.getElementById("audio-success"),document.getElementById("audio-congrats"),document.getElementById("audio-retry"),document.getElementById("audio-bounce"),document.getElementById("audio-start")];

const videozed=[document.getElementById("video-nice")];

$("#untouched").css("z-index","1019");//----to not click and flip card while the game didn't start

//---------------------------------------------------------------------------------
//---------------------RANDOM PICTURES IN EACH CARD FRONT SIDE---------------------
//---------------------------------------------------------------------------------

function score(){

  if(document.getElementsByClassName("row").length==2){

    points=700/(3*timer);

  }else if(document.getElementsByClassName("row").length==4){

    points=700/(0.6*timer);
  
  }else if(document.getElementsByClassName("row").length==6){

    points=700/(0.2*timer);

  }
  points=Math.round(points);
}


function changeleaderboard(){

  $(".user-score").css("display","block");

}


function hideoverlayscore(){

  $(".user-score").css("display","none");

}

    if(highscore==null){ 

      highscore=[100,70,50,30,10];

    }

    if(usernames==null){

      usernames=["veteran","advanced", "lazy", "beginner","nooby"];

    }


 function getstartedleaderboard(){

  for(let i=0;i<5;i++){

    document.getElementsByClassName("player")[i].innerHTML=usernames[i];

    document.getElementsByClassName("player-score")[i].innerHTML=highscore[i];

  }

}
getstartedleaderboard();


function addleaderboard(){

  let inthetop = document.getElementsByClassName("username")[0].value;
  
  let indexscore=4;

  while((points>highscore[indexscore])){

    indexscore--;

  }

  indexscore++;

  usernames.splice(indexscore, 0, inthetop);

  highscore.splice(indexscore, 0, points);

  while((usernames.length>5)&&(highscore.length>5)){

    highscore.pop();

    usernames.pop() ;
  }

  document.cookie=usernames +","+ highscore +";expires=Tue, 24 Jan 2023 12:00:00 UTC";
 
  for(let i=0;i<5;i++){

    document.getElementsByClassName("player")[i].innerHTML=usernames[i];
    
    document.getElementsByClassName("player-score")[i].innerHTML=highscore[i];
  
  } 

  document.cookie=usernames +","+ highscore;

}


function initiationed(index){

  $("#won").fadeOut(0);

  $("#nice").fadeOut(0);

  $("#retry").fadeOut(0);

  document.getElementById("retry").style.zIndex="-1";
  
  document.getElementById("nice").style.zIndex="-1";
  
  document.getElementById("won").style.zIndex="-1";
  
  savedindexs =[];

  counter =[];

  if((index==0)&&(document.getElementsByClassName("row").length==4)){

    urls = ["./images/front1.png","./images/front2.png","./images/front3.png","./images/front4.png"];
  
    for(let i=0;i<2;i++){

      document.getElementsByClassName("row")[document.getElementsByClassName("row").length-1].className="hidden-row";
    
    }
  
  }

  if((index==0)&&(document.getElementsByClassName("row").length==6)){

  urls = ["./images/front1.png","./images/front2.png","./images/front3.png","./images/front4.png"];
  
    for(let i=0;i<4;i++){

      document.getElementsByClassName("row")[document.getElementsByClassName("row").length-1].className="hidden-row";
    
    }
  
  }

  if((index==1)&&(document.getElementsByClassName("row").length==2)){

    document.getElementsByClassName("hidden-row")[0].className="row";
  
    document.getElementsByClassName("hidden-row")[0].className="row";
    
    urls = ["./images/front1.png","./images/front2.png","./images/front3.png","./images/front4.png","./images/front5.png","./images/front6.png","./images/front7.png","./images/front8.png"];

  }else if((index==1)&&(document.getElementsByClassName("row").length==6)){
  
    urls = ["./images/front1.png","./images/front2.png","./images/front3.png","./images/front4.png","./images/front5.png","./images/front6.png","./images/front7.png","./images/front8.png"];
  
    document.getElementsByClassName("row")[document.getElementsByClassName("row").length-1].className="hidden-row";

    document.getElementsByClassName("row")[document.getElementsByClassName("row").length-1].className="hidden-row";
  
  }else if((index==1)&&(document.getElementsByClassName("row").length==4)){
  
    urls = ["./images/front1.png","./images/front2.png","./images/front3.png","./images/front4.png","./images/front5.png","./images/front6.png","./images/front7.png","./images/front8.png"];
  }

  if((index==2)&&(document.getElementsByClassName("row").length==2)){
    
    urls = ["./images/front1.png","./images/front2.png","./images/front3.png","./images/front4.png","./images/front5.png","./images/front6.png","./images/front7.png","./images/front8.png","./images/front9.png","./images/front10.png","./images/front11.png","./images/front12.png"];

    for(let i=0;i<4;i++){

      document.getElementsByClassName("hidden-row")[0].className="row";

    }

  }else if((index==2)&&(document.getElementsByClassName("row").length==4)){

    urls = ["./images/front1.png","./images/front2.png","./images/front3.png","./images/front4.png","./images/front5.png","./images/front6.png","./images/front7.png","./images/front8.png","./images/front9.png","./images/front10.png","./images/front11.png","./images/front12.png"];

    for(let i=0;i<2;i++){

      document.getElementsByClassName("hidden-row")[0].className="row";

    }

  }

  for(let i=0;i<document.getElementsByClassName("row").length*2;i++){

    counter.push(0);

  }


  for(let i=0;i<document.getElementsByClassName("row").length*4;i++){

    x=Math.floor(Math.random()*urls.length);

    document.getElementsByClassName("front-card")[i].src=urls[x];

    counter[x]=counter[x]+1;

    while(counter[x]>2){

      counter[x]=counter[x]-1;

      x=Math.floor(Math.random()*urls.length);

      document.getElementsByClassName("front-card")[i].src=urls[x];

      counter[x]=counter[x]+1;

    }

  }

  for(let i=0;i<document.getElementsByClassName("card").length;i++){

    document.getElementsByClassName("card")[i].className="card";

  }

}
//---------------------------------------------------------------------------------
//-------------------A FUNCTION TO GET THE CARD TO ITS BACKSIDE--------------------
//---------------------------------------------------------------------------------

function staticed(){

  console.log("just do it");

}
  
 

function timed(){

  timer++;


  document.getElementsByClassName("numb")[0].innerHTML=timer;

}


function settimer(){
  
  if(counnttable==0){
  
    points=timer;
  
    timer =0;
  
    intervalID=setInterval(timed,1000);
  
    counnttable++;
  
  }else{

    clearInterval(intervalID);
    
    counnttable=0;
    
    timer =0;
    
    document.getElementsByClassName("numb")[0].innerHTML=timer;
    
    intervalID=setInterval(timed,1000);
  
  }
  
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

//---- this condition is called when ONLY ONE CARD is flipped to its front side
  if((y==0)){
    
    document.getElementsByClassName("front-card")[i].onclick=function() {staticed()};
    
    z=i;
    
    y=1;
    
  }else{
  
    y=0;
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
  
  }
    
  
  //--- we've explained before that our main counter increase each time there's any matched card. when it reaches 16 means all cards are matched. so user won the game :). this condition will display a congrating message to the user.
  
  
  if(savedindexs.length==urls.length*2){
  
 
    $("#won").css("z-index","1020");
 
    $("#won").fadeOut(0);
 
    audioplaycongrats();
 
    score();
 
    clearInterval(intervalID);
 
    $("#untouched").css("z-index","1019");
 
    $("#won").fadeIn(2900, "swing",function(){
 
      $("#nice").fadeOut(0);
 
      $("#nice").css("z-index","1021");
 
      $("#nice").fadeIn(1000, "swing");
 
      videonice();
 
    });
 
    if(points>=highscore[4]){
   
      setTimeout(changeleaderboard,5000);
  
    }
  
  }
     
};

//---- this onclick event toggle the difficulty's overlay menu

  $(".button").click(function () {
  
    audioplaybounce();
  
    $(".overlay").slideToggle("3000", "easeOutBounce");
  
  });


  //--- those function bellow will restart the game to its initial state.
  
  $(".easy").click(function () {
  
    audioplaystart();
  
    $(".overlay").slideUp("500", "easeOutBounce");
  
    initiationed(0);
  
    settimer();
  
    $("#untouched").css("z-index","-1");
  
    $(".digit h2,h5").css("color","green");
  
  });

  
  $(".medium").click(function () {
  
    audioplaystart();
  
    $(".overlay").slideUp("500", "easeOutBounce");
  
    initiationed(1);
  
    settimer();
  
    $("#untouched").css("z-index","-1");
  
    $(".digit h2,h5").css("color","yellow");
  
  });

  
  $(".hard").click(function () {
  
    audioplaystart();
  
    $(".overlay").slideUp("500", "easeOutBounce");
  
    initiationed(2);
  
    settimer();
  
    $("#untouched").css("z-index","-1");
  
    $(".digit h2,h5").css("color","blue");
  
  });


  const starimgs = document.getElementsByClassName("username")[0];
  
  starimgs.addEventListener("keypress", function (event) {
  
    if (event.key === "Enter") {
  
      addleaderboard();
  
      hideoverlayscore();
  
    }
  
  });






    
  

