const pieceValues = [
    "blue",
    "green",
    "purple",
    "red"
];

var gameGrid = []

function gameGridExporter () {
    var randomVal = Math.floor(Math.random() * 4);
    var pieceClass = pieceValues[ randomVal ];

    return pieceClass
}

for (var i = 0; i < 25; i++) {
    gameGrid.push(gameGridExporter())
}

console.log(gameGrid)