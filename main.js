let num1 = parseInt(prompt("Enter first num:"));
let num2 = parseInt(prompt("Enter second num:"));

if(num1 > num2){
    let temp = num1;
    num1=num2;
    num2 = temp;
}

num1++;

for(let i = num1; i < num2; i++){
    if(i % 2 == 0){
        console.log(`${i}`);
    }
}

console.log(`============`);

for(let i = num1; i < num2; i++){
    if(i % 2 == 1){
        console.log(`${i}`);
    }
}

console.log(`============`);

for(let i = num1; i < num2; i++){
    if(i % 7 == 0){
        console.log(`${i}`);
    }
}
