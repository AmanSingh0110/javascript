 const accountId = 154556
 let accountEmail = 'aman@gmail.com'
 var accountPassword = "12345"
 accountCity = "jaipur"
 let accountState; 

//  accountId = 2 // not allowed
accountEmail = "iuhgi@.com"
accountPassword = "137488"
accountCity = "bangaluru"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functioal scope
*/



console.table([accountId,accountEmail, accountPassword,accountCity,accountState]);