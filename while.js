
let x = 1; 

while (x <= 7) {
    console.log("Tick:", x); 
    x++;  
    console.log("Not yet"); 
}

console.log("Osu!"); 



let pyramid = 5;
let i = 1; 

while (i <= pyramid) {
    let line = ""; 
    let j = 1; 

    while (j <= pyramid - i) {
        line += " ";
        j++;
    }

    let k = 1;
    while (k <= 2 * i - 1) {
        line += "*"; 
        k++;
    }

    console.log(line); 
    i++; 
}

