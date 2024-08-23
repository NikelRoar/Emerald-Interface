var signUpModal = document.getElementById("signUpForm");
var signInModal = document.getElementById("loginForm");

var signUpBtn = document.getElementById("signUpBtn");
var signInBtn = document.getElementById("signInBtn");

var closeButtons = document.getElementsByClassName("close");

signUpBtn.onclick = function () {
    signUpModal.style.display = "block";
}
signInBtn.onlick = function() {
    signInModal.style.display = "block";
}

for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function() {
        var targetModal = document.getElementById(this.getAttribute("data-target"));
        targetModal.style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target == signUpModal) {
        signUpModal.style.display = "none";
    } else if (event.target == signInModal) {
        signUpModal.style.display = "none";
    }
}