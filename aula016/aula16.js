const objs = document.getElementsByTagName("div");

let num = [10, 20, 30, 40, 50];

for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}

for (n of objs) {
    console.log((n.innerHTML = "curso"));
}

for (i in objs) {
    console.log(objs[i]);
}
