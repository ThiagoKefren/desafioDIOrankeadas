let winGame = 100 
let lostGame = 26
let finalRank = ""

function calculatePoints() {
    let finalPoints = winGame * 10 - lostGame * 5;
    return finalPoints > 0 ? finalPoints : 0; 
}
let finalPoints = calcPoints();

if (winGame > 0 && finalPoints === calcPoints()) {
    if (finalPoints <= 10) {
        finalRank = "FERRO";
    } else if (finalPoints <= 20) {
        finalRank = "BRONZE";
    } else if (finalPoints <= 50) {
        finalRank = "PRATA";
    } else if (finalPoints <= 80) {
        finalRank = "OURO";
    } else if (finalPoints <= 90) {
        finalRank = "PLATINA";
    } else if (finalPoints <= 100) {
        finalRank = "ASCENDENTE";
    } else if (finalPoints <= 250) {
        finalRank = "RADIANTE";
    } else {
        finalRank = "IMORTAL";
    }
} else {
    finalRank = "Sem rank"; 
}

console.log("O Herói tem de saldo de: " + finalPoints +
"vitórias e está no rank: " + finalRank)
