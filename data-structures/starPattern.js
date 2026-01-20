

function printStarPattern(rows) {

    for(let i =0; i < rows; i++) {
        let pattern = '';
        for(let j=0; j < rows; j++) {
            if(i === 0 || i === rows -1 || j === 0 || j === rows -1) {

                pattern += '*';
            } else {
                pattern += ' ';
            }
        }
        console.log(pattern);
    }
    
}

printStarPattern(5);
printStarPattern(8);
