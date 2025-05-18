function showAccount(Name) {
    console.log(`Name = ${Name}`);

    let balance = 0;
    function showBalance(){
        console.log(`There is $${balance} in ${Name}'s account.`);
    }

    function diposit(money){
        balance += money;
    }

    return {showBalance , diposit};
}

const myAccount = showAccount("Mahmud");
myAccount.diposit(5);
myAccount.diposit(5);
myAccount.diposit(5);
myAccount.diposit(5);

myAccount.showBalance();