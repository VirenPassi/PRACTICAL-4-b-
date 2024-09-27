window.onload = function () {
    var labyrinth = new Labyrinth();
    labyrinth.printConsole(); // Print to console for debugging
    labyrinth.printDisplay('map'); // Draw labyrinth in the map div

    document.addEventListener('keydown', function (event) {
        switch (event.key) {
            case 'ArrowUp':
                labyrinth.movePlayer(0, -1);
                break;
            case 'ArrowDown':
                labyrinth.movePlayer(0, 1);
                break;
            case 'ArrowLeft':
                labyrinth.movePlayer(-1, 0);
                break;
            case 'ArrowRight':
                labyrinth.movePlayer(1, 0);
                break;
        }
        labyrinth.printDisplay('map'); // Refresh display after move
    });
};
