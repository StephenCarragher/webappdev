
// $(document).ready(function () {

if (localStorage.getItem('register') == "true") {

    document.getElementById("registerbutton").style.display = "none";
    document.getElementById("registerbutton1").style.display = "none";
}

if (localStorage.getItem('login') == "true") {

    document.getElementById("loginbutton").style.display = 'none';
    document.getElementById("loginbutton1").style.display = 'none';
    var x = document.getElementById("registerbutton")
    var y = document.getElementById("registerbutton1")
    x.style.display = "inline-block";
    y.style.display = "block";
    x.innerHTML = localStorage.getItem('username');
    y.innerHTML = localStorage.getItem('username');
    x.href = 'highscore.html';
    y.href = 'highscore.html';
}



document.getElementById('MenuList').style.display = 'none';
function showmenu() {
    // console.log("btn press")
    var menu = document.getElementById('menubarbtn');
    var x = document.getElementById('MenuList');
    console.log(x.style.display)
    if (x.style.display == 'none') {
        // x.style.display = 'block';
        $(x).fadeIn();
        menu.style.width = '100%';
    } else {
        // x.style.display = 'none';
        $(x).fadeOut();
        menu.style.width = '45px';
    }
}



var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}
// });