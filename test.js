const prompt = require('prompt-sync')({sigint: true});

const userinput = Number(prompt("Input grid size: "));
let grid = "";
let hash = true;
for (let i=0; i<userinput; i++) {
    let line = "";
    for (let j=0; j<userinput; j++) {
        hash ? line+='#' : line+=' ';
        hash = !hash;
    }
    grid+=line;
    grid+='\n'
    if (userinput%2 == 0) hash = !hash;
}
console.log(grid);
console.log('end of program');

