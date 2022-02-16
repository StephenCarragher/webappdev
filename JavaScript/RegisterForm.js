function register() {
    console.log("register");
    var input = new Array;
    input.push(document.getElementById("username").value);
    input.push(document.getElementById("snum").value);
    input.push(document.getElementById("fname").value);
    input.push(document.getElementById("sname").value);
    input.push(document.getElementById("email").value);
    input.push(document.getElementById("Dob").value);
    input.push(document.getElementById("password").value);
    input.push(document.getElementById("password1").value);
    
    if (checkform(input)) {
        localStorage.setItem('username',input[0]);
        localStorage.setItem('snum',input[1]);
        localStorage.setItem('fname',input[2]);
        localStorage.setItem('sname',input[3]);
        localStorage.setItem('email',input[4]);
        localStorage.setItem('Dob',input[5]);
        localStorage.setItem('password',input[6]);
        localStorage.setItem('password1',input[7]);
        localStorage.setItem('register',"true");
        window.location.reload();
        location.href="login.html"
    }

}

function checkSpecialChar(a,b,c) {
    var checks = [a,b,c];
    // checks[0] = document.getElementById("username").value;
    // checks[1] = document.getElementById("fname").value;
    // checks[2] = document.getElementById("sname").value;
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    for (const x of checks) {
        console.log(x);
        console.log(format.test(x));
        if (format.test(x)) { return false; }
    }
    return true;
}
function checkEmail(a) {
    
    var format = "@mail.dcu.ie";
    console.log(a);
        console.log(a.includes(format));

    return a.includes(format);
}
function checkPwd(a,b) {
    console.log(a);
    console.log(b);
    if(a==b){return true;}
    return false;
}
function checkSNum(a) {
    console.log(a);
   
    if(a>17000000 && a<18999999){
        return true;
    }
    return false;
}

function checkform(input) {
    
    console.log(checkSpecialChar(input[0],input[2],input[3]));
    console.log(checkEmail(input[4]));
    console.log(checkPwd(input[6],input[7]));
    console.log(checkSNum(input[1]));
    if(checkSpecialChar(input[0],input[2],input[3])==false){
        console.log("Cannot contain special characters");
        document.getElementById("username").style.borderWidth = "thick";
        document.getElementById("username").style.borderColor = "red";
        document.getElementById("fname").style.borderWidth = "thick";
        document.getElementById("fname").style.borderColor = "red";
        document.getElementById("sname").style.borderWidth = "thick";
        document.getElementById("sname").style.borderColor = "red";
        var x = document.getElementById("warning");
        x.innerHTML = "Names cannot contain special characters";
        x.style.display = 'block';
        return false;
    }
    if(checkEmail(input[4])==false){
        console.log("not dcu email");
        document.getElementById("email").style.borderWidth = "thick";
        document.getElementById("email").style.borderColor = "red";
        var x = document.getElementById("warning");
        x.innerHTML = "Not a DCU email ";
        x.style.display = 'block';
        return false;
    }
    if(checkSNum(input[1])==false){
        console.log("Not valid student number");
        document.getElementById("snum").style.borderWidth = "thick";
        document.getElementById("snum").style.borderColor = "red";
        var x = document.getElementById("warning");
        x.innerHTML = "Not a valid student number ";
        x.style.display = 'block';
        return false;
    }
    if(checkPwd(input[6],input[7])==false){
        console.log("Not valid student number");
        document.getElementById("password").style.borderWidth = "thick";
        document.getElementById("password").style.borderColor = "red";
        document.getElementById("password1").style.borderWidth = "thick";
        document.getElementById("password1").style.borderColor = "red";
        var x = document.getElementById("warning");
        x.innerHTML = "Passwords need to match";
        x.style.display = 'block';
        return false;
    }

    return true;
   
    // if(checkSpecialChar(input[0],input[2],input[3]) && checkEmail(input[4]) && checkPwd(input[6],input[7]) && checkSNum(input[1])){
        
    //     console.log("Correct input")
    //     // saveData(input);
    //     return true;
    // }
    // else{
    //     // console.log(localStorage.getItem('username'));
    //     console.log("Wrong input")
    //     return false;
    // }
}