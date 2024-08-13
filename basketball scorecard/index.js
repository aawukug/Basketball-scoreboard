// INITIALIZATION
let homeScore = 0;

let guestScore = 0;

let homeEl = document.getElementById("home-el");

let guestEl = document.getElementById("guest-el")


// HOME FUNCTIONS
function homeScoreByOne() {
    homeScore += 1;
    homeEl.textContent = homeScore;
}

function homeScoreByTwo() {
    homeScore += 2;
    homeEl.textContent = homeScore;
}

function homeScoreByThree() {
    homeScore += 3;
    homeEl.textContent = homeScore;
}



// GUEST FUNCTIONS
function guestScoreByOne() {
    guestScore += 1;
    guestEl.textContent = guestScore;
}

function guestScoreByTwo() {
    guestScore += 2;
    guestEl.textContent = guestScore;
}

function guestScoreByThree() {
    guestScore += 3;
    guestEl.textContent = guestScore;
}

// NEW GAME FUNCTION

function newGame () {
    homeScore = 0;
    guestScore = 0;
    homeEl.textContent = homeScore;
    guestEl.textContent = guestScore;
}

