var CELL_SIZE = 40;

function Labyrinth() {
    this.map = [
        [0, 0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1, 0],
        [1, 0, 1, 0, 0, 0],
        [1, 0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1, 0]
    ];
    this.start = { x: 0, y: 0 };  // Starting point
    this.end = { x: 5, y: 4 };    // Destination point
    this.playerPosition = { x: this.start.x, y: this.start.y }; // Initial player position

    this.printConsole = function () {
        for (var i = 0; i < this.map.length; i++) {
            console.log(this.map[i].map(cell => (cell === 1 ? '*' : ' ')).join(''));
        }
    };

    this.printDisplay = function (id) {
        const mapElement = document.getElementById(id);
        mapElement.innerHTML = ''; // Clear previous content
        for (var row = 0; row < this.map.length; row++) {
            for (var col = 0; col < this.map[row].length; col++) {
                var cellDiv = document.createElement('div');
                cellDiv.className = this.map[row][col] === 1 ? 'cell wall' : 'cell space';
                cellDiv.style.left = col * CELL_SIZE + 'px';
                cellDiv.style.top = row * CELL_SIZE + 'px';
                mapElement.appendChild(cellDiv);
            }
        }
        // Display player and destination
        this.updatePlayerDisplay(mapElement);
        this.updateDestinationDisplay(mapElement);
    };

    this.updatePlayerDisplay = function (mapElement) {
        var playerDiv = document.createElement('div');
        playerDiv.className = 'cell player';
        playerDiv.style.left = this.playerPosition.x * CELL_SIZE + 'px';
        playerDiv.style.top = this.playerPosition.y * CELL_SIZE + 'px';
        mapElement.appendChild(playerDiv);
    };

    this.updateDestinationDisplay = function (mapElement) {
        var destDiv = document.createElement('div');
        destDiv.className = 'cell destination';
        destDiv.style.left = this.end.x * CELL_SIZE + 'px';
        destDiv.style.top = this.end.y * CELL_SIZE + 'px';
        mapElement.appendChild(destDiv);
    };

    this.movePlayer = function (dx, dy) {
        var newX = this.playerPosition.x + dx;
        var newY = this.playerPosition.y + dy;

        if (this.isInBounds(newX, newY) && this.map[newY][newX] === 0) {
            this.playerPosition.x = newX;
            this.playerPosition.y = newY;
        }

        // Check for win condition
        if (this.playerPosition.x === this.end.x && this.playerPosition.y === this.end.y) {
            alert("Congratulations!");
        }
    };

    this.isInBounds = function (x, y) {
        return x >= 0 && x < this.map[0].length && y >= 0 && y < this.map.length;
    };
}
