
let buttonSound = new Audio("audio/ringTone.wav");
let privateSound = new Audio("audio/private.mp3");
let beautySound = new Audio("audio/beautySound.mp3");
let image = document.createElement("img");
 image.setAttribute("src","images/spark1.PNG");

function accessDenied(){
  let warning = new Audio("audio/warningSound.mp3");
  let omg = new Audio("audio/girlNo.mp3");
  let access = new Audio("audio/iDon'tLike.mp3");
  omg.play();
  setTimeout(function(){
  warning.play();
},800)
  setTimeout(function(){
    access.play();
  },1000)

  document.querySelector(".container1").style.backgroundImage = "url('images/model4.PNG')";
  document.querySelector(".container1").style.backgroundColor = "#C7D36F";
  document.querySelector(".container1").style.animation= "blinker 3s";
 setTimeout(function(){
   goBack();
   location.reload();
 },4000)
}

function goBack(){
  document.querySelector(".container1").style.backgroundImage = "url('images/model.PNG')";
  document.querySelector(".container1").style.backgroundColor = " ";
}

function amIPretty(){
  document.querySelector(".container1").style.animation = "run 1s";
  let pretty = new Audio("audio/amIPretty.mp3");
  pretty.play();
  setTimeout(function(){
    location.reload();
  },2000)
}

function hairStyle(){
  document.querySelector(".container1").style.backgroundImage = "url('images/model1.PNG')";
  let hair = new Audio("audio/hairStyle.mp3");
  hair.play();
  setTimeout(function(){
    goBack();
  },3500);
}

function workOut(){
    document.querySelector(".container1").style.backgroundImage = "url('images/model2.PNG')";
  let workOut = new Audio("audio/workOut.mp3");
  workOut.play();
  setTimeout(function(){
    goBack();
  },6500)
}
function dancingVideo(){
  let player = document.createElement("div");
  player.innerHTML = "<video id = 'dancePar' src = 'video/dancing.MP4'></video>";
  document.querySelector(".logo-container").appendChild(player);
  let myVideo = document.querySelector("#dancePar");
  myVideo.play();
  setTimeout(function(){
  location.reload();
},75000)
}

function thaeThae(){
  document.querySelector(".container1").style.backgroundColor = "#F5F0BB";
  let name = new Audio("audio/thae.mp3");
  name.play();
 setTimeout(function(){
     document.querySelector(".container1").style.backgroundColor ="#181818";
 },3800)
}
function twentyOne(){
  document.querySelector(".container1").style.backgroundColor = "#F5F0BB";
  let age = new Audio("audio/twentyOne.mp3");
  age.play();
  setTimeout(function(){
      document.querySelector(".container1").style.backgroundColor ="#181818";
  },3500)
}

function parentsName(){
  document.querySelector(".container1").style.backgroundColor = "#F5F0BB";
  let parents = new Audio("audio/aungCreation.mp3");
  parents.play();
  setTimeout(function(){
      document.querySelector(".container1").style.backgroundColor ="#181818";
  },3500)
}

function sweetHeart(){
  document.querySelector(".container1").style.backgroundColor = "#F5F0BB";
  let partner = new Audio("audio/noSweetHeart.mp3");
  partner.play();
  setTimeout(function(){
      document.querySelector(".container1").style.backgroundColor ="#181818";
  },2900)
}

function partnerOption(){
  document.querySelector(".container1").style.backgroundColor = "#F5F0BB";
  let option = new Audio("audio/kindOfPartner.mp3");
  option.play();
  setTimeout(function(){
      document.querySelector(".container1").style.backgroundColor ="#181818";
  },3800)
}

function permission(){
  document.querySelector(".container1").style.backgroundColor = "#F5F0BB";
  let askPermit = new Audio("audio/aungInstruction.mp3");
  askPermit.play();
  setTimeout(function(){
      document.querySelector(".container1").style.backgroundColor ="#181818";
  },4600)
}

function askingLike(){
  document.querySelector(".container1").style.animation = "blinker 1s";
  let like = new Audio("audio/requestLike.mp3");
  like.play();
setTimeout(function(){
  dancingVideo()
},5000)
}
