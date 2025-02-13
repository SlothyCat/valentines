const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

const gifs = [
    "images/please_01.gif",
    "images/please_02.gif",
    "images/please_03.gif",
    "images/please_04.gif",
    "images/please_05.gif",
    "images/please_06.gif",
    "images/please_07.gif"
];

let messageIndex = 0;
let gifIndex = 1;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const gifElement = document.getElementById("gif");

    // Change text
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Change GIF
    gifElement.src = gifs[gifIndex];
    gifIndex = (gifIndex + 1) % gifs.length; // Loop back when reaching the end

    // Grow "Yes" button
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
