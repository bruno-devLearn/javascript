// 5! = 1*2*3*4*5 = 120

let n = 10;
let fat = 1;

while (n >= 1) {
    fat *= n;
    n--;
}

console.log(fat);
