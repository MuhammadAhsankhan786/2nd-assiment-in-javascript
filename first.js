function displayMessage() {
    let gender = document.querySelector(".input").value.toLowerCase();
    let message = document.querySelector(".message");

    if (gender === "male") {
        message.innerHTML = "GOOD MORNING SIR.";
    } else if (gender === "female") {
        message.innerHTML = "GOOD MORNING MAMM";
    } else { message.innerHTML = "Please enter a valid gender (Male or Female)." ;}
}


