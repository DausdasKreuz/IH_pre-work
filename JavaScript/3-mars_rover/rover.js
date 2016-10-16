var myRover = {
    position: [0,0], 
    direction: 'N'
};

var grid = [
    ['_','_','_','_','_','_','_','_','_','_'],
    ['_','_','_','_','_','_','_','_','_','_'],
    ['_','_','_','_','_','_','_','_','_','_'],
    ['_','_','_','_','_','_','_','_','_','_'],
    ['_','_','_','_','_','_','_','_','_','_'],
    ['_','_','_','_','_','_','_','_','_','_'],
    ['_','_','_','_','_','_','_','_','_','_'],
    ['_','_','_','_','_','_','_','_','_','_'],
    ['_','_','_','_','_','_','_','_','_','_'],
    ['_','_','_','_','_','_','_','_','_','_']
];

var gridDisplayed = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
];

function displayPosition(rover) {
    grid[rover.position[0]][rover.position[1]] = rover.direction;
    for (i in grid) {
        for (n in grid[i]) {
            gridDisplayed[9-i][n] = grid[i][n];
        }
    }
        
    console.log(gridDisplayed.join('\n'));
}


function goForward(rover) {
  switch(rover.direction) {
    case 'N':
        rover.position[0]++
        break;
    case 'E':
        rover.position[1]++
         break;
    case 'S':
        rover.position[0]--
         break;
    case 'W':
        rover.position[1]--
         break;
     };

    console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

function goBack(rover) {
  switch(rover.direction) {
    case 'N':
        rover.position[0]--
        break;
    case 'E':
        rover.position[1]--
         break;
    case 'S':
        rover.position[0]++
         break;
    case 'W':
        rover.position[1]++
         break;
     };

    console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

function turnRight(rover) {
  switch(rover.direction) {
    case 'N':
        rover.direction = 'E';
        break;
    case 'E':
        rover.direction = 'S';
         break;
    case 'S':
        rover.direction = 'W';
         break;
    case 'W':
        rover.direction = 'N';
         break;
     };

    console.log("New Rover direction: [" + rover.direction + "]")
}

function turnLeft(rover) {
  switch(rover.direction) {
    case 'N':
        rover.direction = 'W';
        break;
    case 'E':
        rover.direction = 'N';
         break;
    case 'S':
        rover.direction = 'E';
         break;
    case 'W':
        rover.direction = 'S';
         break;
     };

    console.log("New Rover direction: [" + rover.direction + "]")
}


function moveMyRover(instructions) {
    displayPosition(myRover);
    var orders = instructions.split('');
    for (i in orders) {
        switch(orders[i]) {
            case 'f':
                goForward(myRover);
                break;
            case 'b':
                goBack(myRover);
                break;
            case 'l':
                turnLeft(myRover);
                break;
            case 'r':
                turnRight(myRover);
                break;
        }
        displayPosition(myRover);
    }
}

moveMyRover('fffrfflflbb');