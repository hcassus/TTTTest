describe('TicTacToe Tests', function () {
    beforeEach(function () {
        setFixtures('<html><body><table><tr><td class="cell" id="c11"></td><td class="cell" id="c12"></td><td class="cell" id="c13"></td></tr><tr><td class="cell" id="c21"></td><td class="cell" id="c22"></td><td class="cell" id="c23"></td></tr><tr><td class="cell" id="c31"></td><td class="cell" id="c32"></td><td class="cell" id="c33"></td></tr></table></body></html>')
    });

    afterEach(function(){
        playAgain()
    });
    it('should allow move in empty cell', function () {
        move('c11')
        expect(document.getElementById('c11').innerText).toBe("X")
        expect(moviment).toBe("O")
    });
    it('should not allow move in full cell', function () {
        document.getElementById('c11').innerText = "X"
        spyOn(window,'alert')
        move('c11')
        expect(window.alert).toHaveBeenCalledWith("Oops, this box has been selected!")
        expect(moviment).toBe("X")
    });
    it('should show winner if game has winner', function () {
        document.getElementById('c11').innerText = "X"
        document.getElementById('c21').innerText = "X"
        document.getElementById('c31').innerText = "X"
        spyOn(window,'alert')
        getWinner()
        expect(window.alert).toHaveBeenCalledWith("The winner is 'X'")
    });
    it('should show no winner if game is tied', function () {
        document.getElementById('c11').innerText = "X"
        document.getElementById('c21').innerText = "X"
        document.getElementById('c31').innerText = "O"
        document.getElementById('c12').innerText = "O"
        document.getElementById('c22').innerText = "O"
        document.getElementById('c32').innerText = "X"
        document.getElementById('c13').innerText = "X"
        document.getElementById('c23').innerText = "O"
        document.getElementById('c33').innerText = "X"
        spyOn(window,'alert')
        getWinner()
        expect(window.alert).toHaveBeenCalledWith("There wasn't winner")
    });
    it('should clear cells if new game', function () {
        document.getElementById('c11').innerText = "X"
        document.getElementById('c21').innerText = "X"
        document.getElementById('c31').innerText = "O"
        document.getElementById('c12').innerText = "O"
        document.getElementById('c22').innerText = "O"
        document.getElementById('c32').innerText = "X"
        document.getElementById('c13').innerText = "X"
        document.getElementById('c23').innerText = "O"
        document.getElementById('c33').innerText = "X"
        playAgain()
        expect(document.getElementById('c11').innerText).toBe("")
        expect(document.getElementById('c21').innerText).toBe("")
        expect(document.getElementById('c31').innerText).toBe("")
        expect(document.getElementById('c12').innerText).toBe("")
        expect(document.getElementById('c22').innerText).toBe("")
        expect(document.getElementById('c32').innerText).toBe("")
        expect(document.getElementById('c13').innerText).toBe("")
        expect(document.getElementById('c23').innerText).toBe("")
        expect(document.getElementById('c33').innerText).toBe("")
    });
    it('should change players turn', function () {
        moviment = "X"
        changePlayer()
        expect(moviment).toBe("O")
    });
});