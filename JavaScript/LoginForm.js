function login() {
    console.log("register");

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (localStorage.getItem('register')=="true") {

        if(checkform(username, password)){
        localStorage.setItem('login', "true");
        window.location.reload();
        location.href = "index.html"}
        else{
            alert("Incorrect Username or Password")
        }
    }
    else{
        alert("Need to register first")
    }

}


function checkform(username, password) {

    if (username == localStorage.getItem('username') && password == localStorage.getItem('password')) {
        return true;
    }
    else { return false; }


}