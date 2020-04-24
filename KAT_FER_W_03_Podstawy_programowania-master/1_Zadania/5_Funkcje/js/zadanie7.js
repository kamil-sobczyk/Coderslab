function rockPaperScissors(player1, player2) {
    if (player1 === 'papier' && player2 === 'nozyce') return 'Gracz 2 wygrał';
    else if (player1 === 'papier' && player2 === 'kamien') return 'Gracz 1 wygrał';
    else if (player1 === 'kamien' && player2 === 'papier') return 'Gracz 2 wygrał';
    else if (player1 === 'kamien' && player2 === 'nozyce') return 'Gracz 1 wygrał';
    else if (player1 === 'nozyce' && player2 === 'kamien') return 'Gracz 2 wygrał';
    else if (player1 === 'nozyce' && player2 === 'papier') return 'Gracz 1 wygrał';
    else if (player1 === player2) return 'Remis';
    else return 'Błędne informacje';
}
console.log(rockPaperScissors('papier', 'nozyce'));
console.log(rockPaperScissors('kamien', 'kamien'));
console.log(rockPaperScissors('nozyce','deska'));