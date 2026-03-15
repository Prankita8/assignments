const transaction: number[]=[50000, -2000, 3000, -15000, -200, -300, 4000, -3000];

let creditAmount: number=0;
let debitAmount: number=0;
let totalAmount: number=0;
let remainingAmount: number=0;
let suspiciousAmount: number=0;

for(let i=0;i<transaction.length;i++)
{
    const amount: number=transaction[i];
    if(amount>0)
    {
    creditAmount++
    totalAmount += amount;
    if (amount > 10000) {
      console.log(`Suspicious credit transaction with Amount: ${amount}`);
      suspiciousAmount++;
    }
}
    else  {
        debitAmount++;
    remainingAmount -= amount;  
    if (amount < -10000) {
      console.log(`Suspicious debit transaction with Amount: ${amount}`);
      suspiciousAmount++;
    }
  }
}
const finalBalance: number = totalAmount - remainingAmount;

        
        console.log("----- Transaction Summary -----");
        console.log("Total number of credit transactions:", creditAmount);
        console.log("Total number of debit transactions:", debitAmount);
        console.log("Total amount credited:", totalAmount);
        console.log("Total amount debited:", remainingAmount);
        console.log("Final remaining amount in the account:", finalBalance);
        console.log("Total number of suspicious transactions:", suspiciousAmount);

        export {};
    
    
    
