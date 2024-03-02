const beds = 6;
const reviewScore = 4.78;
const costPerNight = 140;
const pool = true;
const country = "Italy";
const minBeds = 5;
const minReviewScore = 3.5;
const maxCostPerNight = 150;
const needPool = true;
const inCountry = "Italy";
let match = true;
let saving;
let message;
if (beds < minBeds) {
    match = false;
}
if (reviewScore < minReviewScore) {
    match = false;
}
if (needPool && !pool) {
    match = false;
}
if (inCountry !== coutry) {
    match = false;
}
if (costPerNIght > maxCostPerNight) {
    match = false;
} else {
    saving = maxCostPerNight - costPerNight;
}
if (match) {
    message = "Esta propriedade corresponde!";
    if (saving) {
        message = message = +"É $" + saving + "mais barato que o seu máximo."
    }
}
if (match) {
    document.getElementById("message").innerHTML = message;
} else {
    document.getElementById("message").innerHTML = "Desculpe, esta propriedade não é adequada."
}
const listItemArray = document.querySelectorAll("li");
listItemArray[0].innerHTML = "Beds: " + beds;
listItemArray[1].innerHTML = "Review Score: " + reviewScore;
listItemArray[2].innerHTML = "Cost: " + costPerNight;
listItemArray[3].innerHTML = "Pool: " + ((pool) ? "Yes" : "No");
listItemArray[4].innerHTML = "Location: " + country;
listItemArray[5].innerHTML = "Minimum beds: " + minBeds;
listItemArray[6].innerHTML = "Minimum Review Score: " + minReviewScore;
listItemArray[7].innerHTML = "Maximum Cost: " + maxCostPerNight;
listItemArray[8].innerHTML = "Must Have Pool: " + ((needPool) ? "Yes" : "No");
listItemArray[9].innerHTML = "Location: " + inCountry;