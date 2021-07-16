function signup() {

    let username = document.getElementById('userName');
    let userpass = document.getElementById('userPass');
    let useremail = document.getElementById('userEmail');

    let userdetails = {
        username : username.value,
        userpass : userpass.value,
        useremail : useremail.value
    }
    localStorage.setItem("userdetails", JSON.stringify(userdetails));
    if (useremail === "" && userpass === "" && username === "") {
        alert("please fill all items")

    } else {
        window.location.href = ("login.html");
        alert("Account has been created");
        username.value = "";
        userpass.value = "";
        useremail.value = "";

    }
}



function onLogin() {
    // get input values
    let useremail = document.getElementById("userEmail");
    let userpass = document.getElementById("userPass");

    var user = {
        useremail: useremail,
        userpass: userpass,
    }

    var users = JSON.parse(localStorage.getItem("users")) || [];
    // get indx
    var currentUser = users.find(function (val) {
        return val.useremail.toLowerCase() === user.useremail.toLowerCase() && val.userpass === user.userpass;
    });

    if (currentUser) {
        localStorage.setItem("user", JSON.stringify(currentUser));
        // user login
        location.href = "index.html";
    }
}
//      else {
//         useremail.innerHTML = "Invalid credentials";
//     }
    



// let username = document.getElementById('userName');
// let useremail = document.getElementById('userEmail');
// let userpass = document.getElementById('userPass');

// console.log(username)
// console.log(useremail)
// console.log(userpass)

