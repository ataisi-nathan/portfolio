// To tell the user to enter fullscreen

function requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}

var elem = document.body; // Make the body go full screen.
requestFullScreen(elem);


//To display time and date
function updateTime(){
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    if (minutes < 10){
        minutes = "0" + minutes
    }
    var t_str = hours + ":" + minutes + " ";
    if(hours > 11){
        t_str += "PM";
    } else {
        t_str += "AM";
    }
    document.getElementById('time').innerHTML = t_str;
}
// To toggle the menu panel
function menuToggle(){
    document.querySelector('.menuPanel').classList.toggle("hide")
    // document.querySelector('.menuPanel').classList.toggle("show")
}

window.onclick = (event)=> {
    if (event.target.matches('.windows' || '.menuPanel')) {
  
      const menuPanels = document.getElementsByClassName("menuPanel");
      let i;
      for (i = 0; i < menuPanels.length; i++) {
        let openMenuPanel = menuPanels[i];
        document.querySelector('menuPanel').classList.toggle("hide")
        // if (openMenuPanel.classList.contains('show')) {
        //   openMenuPanel.classList.remove('show');
        // }
      }
    }
  }