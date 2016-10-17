var grid = [
    ['_','_','_','_','_','_','_','_','_','_'],
    ['_','_','_','_','_','_','_','_','_','_'],
    ['_','_','_','_','_','_','_','_','_','_'],
    ['_','_','_','X','_','_','_','_','_','_'],
    ['_','_','_','_','_','_','_','_','_','_'],
    ['_','_','_','_','_','_','_','_','_','_'],
    ['X','_','_','_','X','_','_','_','_','_'],
    ['_','_','_','_','_','_','_','_','_','_'],
    ['_','_','_','_','_','_','_','_','_','_'],
    ['_','_','X','_','_','_','_','_','_','_']
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

function createRover(positionGiven, directionGiven) {
    var obj = {position: [], direction: ''};
    obj.position = positionGiven;
    obj.direction = directionGiven;
    return obj;
}


function displayPosition(rover) {
    grid[rover.position[0]][rover.position[1]] = rover.direction;
    for (i in grid) {
        for (n in grid[i]) {
            gridDisplayed[9-i][n] = grid[i][n];
        }
    }
        
    console.log(gridDisplayed.join('\n') + '\nRover Position: [' + rover.position[0] + ", " + rover.position[1] + ']');
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
}

function goRover(order, rover) {
    switch(order) {
        case 'f':
            goForward(rover);
            break;
        case 'b':
            goBack(rover);
            break;
        case 'l':
            turnLeft(rover);
            break;
        case 'r':
            turnRight(rover);
            break;
    }
}

function moveRover(instructions, rover) {
    displayPosition(rover);
    var orders = instructions.split('');
    for (i in orders) {
        if (pathProfiler(orders[i], rover)) {
            orders = '';
            emergencyProtocol(instructions, rover);
            return;
        }
        goRover(orders[i], rover);
        displayPosition(rover);
    }
}


function pathProfiler(order, rover) {
    var virtualRover = createRover([rover.position[0], rover.position[1]], rover.direction);
    switch (order) {
        case 'f':
            goForward(virtualRover);
            break;
        case 'b':
            goBack(virtualRover);
            break;
    }
    if (grid[virtualRover.position[0]][virtualRover.position[1]] === 'X') {
        alert('Path blocked');
        return true;
    }
}

function emergencyProtocol(instructions, rover) {
    var rescueSignal = prompt('If your rover is lost, send another one to rescue.\n Do yo want to activate rescue signal? (yes - no)');
        if (rescueSignal.toLowerCase() === 'yes') {
            searchRover(instructions, rover);
        }
        else if (rescueSignal.toLowerCase() === 'no') {
            return;
        }
        else {
            alert('Please, your answer must be yes or no.');
            emergencyProtocol(instructions, rover);
        }
}

function searchRover(instructions, lostRover) {
    var rescueRover = createRover([0,0],'N');
    var orders = instructions.split('');
    for (i in orders) {
        if (findRover(orders[i], rescueRover, lostRover)) {
            return;
        }
        goRover(orders[i], rescueRover);
        console.log('Rescue rover position: [' + rescueRover.position + ']');
    }
}

function findRover(order, roverFinder, lostRover) {
    var virtualRover = createRover([roverFinder.position[0], roverFinder.position[1]], roverFinder.direction);
    switch (order) {
        case 'f':
            goForward(virtualRover);
            break;
        case 'b':
            goBack(virtualRover);
            break;
    }
    if ((virtualRover.position[0] === lostRover.position[0]) && (virtualRover.position[1] === lostRover.position[1])) {
        alert('Lost rover find!');
        return true;
    }
}


debugger;
myRover = createRover([0,0], 'N');
moveRover('fffrffff', myRover);