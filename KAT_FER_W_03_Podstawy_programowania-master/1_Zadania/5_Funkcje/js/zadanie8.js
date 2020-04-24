function calculateTip(amount, raiting) {
    if (raiting == 'Bardzo dobra obsługa') return (0.25*amount);
    else if (raiting == 'Dobra obsługa') return (0.2*amount);
    else if (raiting == 'Średnia obsługa') return (0.15*amount);
    else if (raiting == 'Zła obsługa') return amount;
    else return 'Opis nieczytelny';
}
console.log(calculateTip(100, 'Bardzo dobra obsługa'));
console.log(calculateTip(200, 'Dobra obsługa'));