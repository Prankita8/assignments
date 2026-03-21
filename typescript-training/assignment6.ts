const input: number=19;

let primeNumber : boolean = true;

if(input<=1)
{
    console.log("Number is not a prime" +input);
}
for(let i:number=2 ; i<input; i++)
{
if (input % i === 0) {
        primeNumber = false;
        break; 
}
}
if (primeNumber) {
    console.log(input+ " is a prime number");
} else {
    console.log(input+ " is not a prime number");
}

export {};