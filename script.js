//document.getElementById("scenicBeauty").onclick = userClicked;
function userClicked() {
    var x = Math.random()*($(window).width()-460);
    var y = Math.random()*($(document).height()-345);
    var scenicBeauty = document.getElementById("scenicBeauty");
    scenicBeauty.style.display = '';
    scenicBeauty.style.position = 'absolute';
    scenicBeauty.style.left = x + 'px';
    scenicBeauty.style.top = y + 'px';
}

//displayTime(10);

function displayTime(timeleft){
    var downloadTimer = setInterval(function(){
    timeleft--;
    document.getElementById("countdowntimer").textContent = timeleft;

    if(timeleft <= 0){
        console.log("timeleft= 0");
        hideImage();
        showButton();

        clearInterval(downloadTimer);

      }
    },1000);

}

function hideImage(){

      document.getElementById("scenicBeauty").style.display ='none';
}
function showButton(){
  if(document.getElementById('startClock').style.display === "none")
    document.getElementById('startClock').style.display='block';
}
function buttonClicked(){
    document.getElementById('startClock').style.display='none';
    displayTime(4);
 //document.getElementById("startClock").innerHTML = "Button Clicked";

}
