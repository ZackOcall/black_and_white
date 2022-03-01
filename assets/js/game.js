document.addEventListener("DOMContentLoaded", (e) => {
    console.log(e);
    cardGenerator();
    board();
  });

const cardGenerator = () => {
let computerCard = [
    { div: "0", id: 0, name: "computer 0" },
    { div: "1", id: 1, name: "computer 1" },
    { div: "2", id: 2, name: "computer 2" },
    { div: "3", id: 3, name: "computer 3" },
    { div: "4", id: 4, name: "computer 4" },
    { div: "5", id: 5, name: "computer 5" },
    { div: "6", id: 6, name: "computer 6" },
    { div: "7", id: 7, name: "computer 7" },
    { div: "8", id: 8, name: "computer 8" },
  ];
let playerCard = [
    { div: "0", id: 9, name: "player 0" },
    { div: "1", id: 10, name: "player 1" },
    { div: "2", id: 11, name: "player 2" },
    { div: "3", id: 12, name: "player 3" },
    { div: "4", id: 13, name: "player 4" },
    { div: "5", id: 14, name: "player 5" },
    { div: "6", id: 15, name: "player 6" },
    { div: "7", id: 16, name: "player 7" },
    { div: "8", id: 17, name: "player 8" },
  ];
}
const board