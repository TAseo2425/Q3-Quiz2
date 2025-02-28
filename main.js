function submit() {
    const name = document.getElementById("name").value;
    alert("Thank you, " + name + ", for choosing us!");
}

function price() {
    const seat = document.getElementById("seat").value;
    const extra = document.getElementById("extra").value;
    let price = 0;

    if (seat === "Standing") {
        price = extra === "Soundcheck" ? 53 : 40;
    } else if (seat === "Box") {
        price = extra === "Soundcheck" ? 43 : 30;
    }

    alert("Your ticket is " + price + " dollars.");
    }

function print() {
    alert("A copy of the ticket has been sent to your email.");
}