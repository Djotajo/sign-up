const firstName = document.querySelector("#first_name");

const password = document.querySelector("#password");

const confirmPassword = document.querySelector("#confirm_password");

const submitMe = document.querySelector("#submit_button");

const match = document.querySelector("#match");

document.addEventListener("keyup", () =>
{
    if (password.value.length >= 1){
    if (password.value == confirmPassword.value) {
        password.style.backgroundColor = "green";
        confirmPassword.style.backgroundColor = "green";
        submitMe.removeAttribute("disabled");
        match.innerHTML="";
    }
    else {
        password.style.backgroundColor = "red";
        confirmPassword.style.backgroundColor = "red";
        submitMe.setAttribute("disabled", "true");
        match.innerHTML="Passwords do not match";
    }}
})

function note() {
    alert("Account created!")
}