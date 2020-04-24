document.addEventListener('DOMContentLoaded', function () {

    function GameOfLife(boardWidth, boardHeight) {
        this.width = boardWidth;
        this.height = boardHeight;
        this.board = document.getElementById('board');
        this.cells = [];

        this.createBoard= function() {
            this.board.style.width = this.width * 10+"px"; //szerokość sekcji(*szerokość diva, czyli 10px)
            this.board.style.height = this.height * 10+"px"; //wysokość sekcji(*wysokość diva, czyli 10px)
            var allFields = this.width * this.height; //ilość wszystkich pól

            for (var i=1; i<=allFields; i++){
                var newDiv = document.createElement('div'); //pętla po ilości pól, tworząca taką ilość divów
                //event na kliknięcie zmieniający klasę
                newDiv.addEventListener("click", function () {
                    this.classList.toggle('live');
                });
                this.board.appendChild(newDiv); //dodanie nowo stworzonego diva do sekcji
                }

            this.cells = document.querySelectorAll('div');
        };

        //metoda przelicza współrzędne x i y na indeks tablicy:
        this.getIndex = function (x,y) {
            return x + y * this.width;
        };

        //metoda zmienia komórce o określonych współrzędnych stan(przełącza jej klasę)
        this.setCellState = function (x,y,state) { //ustal stan
            if (state === 'live') {  //by stan był live
            this.cells[this.getIndex(x,y)].classList.add('live'); //dodaj klasę live
            }
            else {
                this.cells[this.getIndex(x,y)].classList.remove('live'); //usuń
            }
        };

        //metoda ożywia wybrane 5 komórek
        this.firstGlider = function () {
            this.setCellState(3,4,'live');
            this.setCellState(3,5,'live');
            this.setCellState(5,4,'live');
            this.setCellState(3,3,'live');
            this.setCellState(4,3,'live');
        };

        //wyliczenie przyszłego stanu komórki o współrzędnych x i y na podstawie jej sąsiadów
        this.computeCellNextState = function (x,y) {
            var nextLive = 0;
            for (var i= 0; i<this.cells.length; i++) { //dla każdej komórki sprawdza czy każdy z 8 sąsiadów żyje

            }


                }


            // 1. sąsiad: x-1, y-1
            // 2. sąsiad: x, y-1
            // 3. sąsiad: x+1, y1
            // 4. sąsiad: x-1, y
            // 5. sąsiad: x+1, y
            // 6. sąsiad: x-1, y+1
            // 7. sąsiad: x, y+1
        }


    var game= new GameOfLife(80,60);

game.createBoard();
console.log(game);
game.firstGlider();


});
