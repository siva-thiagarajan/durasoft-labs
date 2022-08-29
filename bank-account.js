// class named Account that does the following.
// It has an balance that needs to be initialized with a value greater than 10000. If the value is not supplied then default is 10000 
// Methods to deposit, withdraw. _If there isn't sufficient balance don't allow withdraw_.
// You can withdraw only 3 times. After that you will be charged _0.5% of the amount as Fees.
// Method to print the statement. The statement shows the date, type of transaction(Deposit, Withdraw, Fees ...etc) and amount
// Create an object of Account(20000) and call deposit twice and withdraw 5-6 times. Print the statement and Balance finally

class Account {
    constructor(initialAmount) {
        if (initialAmount > 10000) {
            this.balanceAmt = initialAmount;
        } else if (initialAmount < 10000) {
            console.log('Balance needs to be more than 10000');
        } else {
            this.balanceAmt = 10000;
        }
        this.numberOfWithdrawals = 0;
    }
    get balance() {
        return this.balanceAmt;
    }

    static print (action, amount, balance, fees) {
        const date = new Date;
        console.log (`${action}: ${amount}, Balance: ${balance}, Fees: ${fees} Date: ${date}`)
    }

    withdraw (amount) {
        if (amount < this.balanceAmt && this.numberOfWithdrawals <= 2) {
            this.balanceAmt = this.balanceAmt - amount;
            this.numberOfWithdrawals += 1;
            Account.print('Withdrawal', amount, this.balanceAmt, 0);
        } else if (amount < this.balanceAmt && this.numberOfWithdrawals > 2) {
            this.balanceAmt = this.balanceAmt - (1.05 * amount);
            this.numberOfWithdrawals += 1;
            Account.print('Withdrawal', amount, this.balanceAmt, amount * 0.05);
        }
        else {
            console.log('Insufficient Balance');
        }
    }

    deposit (amount) {
        this.balanceAmt = this.balanceAmt + amount;
        Account.print('Deposit', amount, this.balanceAmt, 0);
    }
}

const savingsAcct = new Account();
savingsAcct.deposit(2000);
savingsAcct.deposit(50000);
savingsAcct.withdraw(5000);
savingsAcct.withdraw(7000);
savingsAcct.withdraw(3000);
savingsAcct.withdraw(3000);
savingsAcct.withdraw(5000);
console.log(savingsAcct);