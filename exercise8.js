function initGrid() {
    // collect colors in an array
    var colors = [];
    var range = ["00", "33", "66", "99", "cc", "ff"];

    // Generate all color combinations
    for (var r = 0; r < range.length; r++) {
        for (var g = 0; g < range.length; g++) {
            for (var b = 0; b < range.length; b++) {
                colors.push("#" + range[r] + range[g] + range[b]);
            }
        }
    }

    // Get the "colors" div and populate it with colored tiles
    var colorsDiv = document.getElementById("colors");
    colorsDiv.innerHTML = "";  // Clear any existing content

    colors.forEach(function(color) {
        // Create a new div for each color
        var colorTile = document.createElement("div");
        colorTile.className = "choice";  // Assign class for styling
        colorTile.style.backgroundColor = color;  // Set background color

        // Add an event listener to handle clicks
        colorTile.onclick = function() {
            var selectedDiv = document.getElementById("selected");
            selectedDiv.style.backgroundColor = color;  // Set background to clicked color
            selectedDiv.innerHTML = color;  // Display color code
        };

        // Append the color tile to the "colors" div
        colorsDiv.appendChild(colorTile);
    });
}

// Initialize the grid when the page loads
window.onload = function () {
    initGrid();
};