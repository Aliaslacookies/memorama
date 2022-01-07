const cards = document.querySelectorAll(".memory-card")

let hasFlippedCard = false
let lockBoard = false
letfirtCard, secondCard;

function flipCard(){
    if (lockBoard) return;
    if (this === firtCard) return;

    this.classList.add("flip");
}