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

function buttonClicked(){
			console.log("Button Clicked");
			var c = 0;
			var t;
			var timer_is_on = 0;
	
	     if (!timer_is_on) {
				timer_is_on = 1;
				timedCount();
		 }
			function timedCount() {
			document.getElementById("demo").value = c;
			c = c + 1;
			t = setTimeout(timedCount, 1000);
			}
		
}


