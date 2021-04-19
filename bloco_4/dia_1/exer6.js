let chessPiece;

switch (chessPiece.toLowerCase()) {
    case 'king':
        console.log('one square in any direction');
        break;
    case 'queen':
        console.log('diagonally, horizontally, or vertically any number of squares');
        break;
    case 'bishop':
        console.log('diagonally any number of squares');
        break;
    case 'knight':
        console.log('in an ‘L’ shape; can jump over others pieces');
        break;
    case 'rook':
        console.log('horizontally or vertically any number of squares');
        break;
    case 'pawn':
        console.log('vertically forward one square, with the option to move two squares if they have not yet moved');
        break;
    default:
        console.log("Invalid name's piece");
        break;
}