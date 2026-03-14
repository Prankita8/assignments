
function evaluateloan(
    
    customerName: string,
    creditScore: number,
    income: number,
    isEmployed: boolean,
    debtToIncomeRatio: number
):void {

    console.log("Loan Evaluation Result: " + customerName);

if(creditScore>750)
{
     console.log("loan is approved"); 
}     
    else if(creditScore>650)
    {
       if(income >= 50000) 
        {
           if(isEmployed)
        {
            if(debtToIncomeRatio<40)
            {
             console.log("loan is approved");
            }   
            else
            {
            console.log("loan is denied dti is 40% or greater");
            } 
        }
        else
            {
            console.log("loan is denied as customer is unemployed");
            }
        }
        else
            {
            console.log("loan is denied as income is less than 50000");
            }  
               
    }      
else
{
   console.log("loan is not approved as credit score less than 650");
}
}
evaluateloan(
    "John Doe",   // customerName
    655,          // creditScore
    830000.0,      // income
    true,         // isEmployed
    30.0          // debtToIncomeRatio
);

export {};
    
