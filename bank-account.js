// class named Account that does the following.
// It has an balance that needs to be initialized with a value greater than 10000. If the value is not supplied then default is 10000 
// Methods to deposit, withdraw. _If there isn't sufficient balance don't allow withdraw_.
// You can withdraw only 3 times. After that you will be charged _0.5% of the amount as Fees.
// Method to print the statement. The statement shows the date, type of transaction(Deposit, Withdraw, Fees ...etc) and amount
// Create an object of Account(20000) and call deposit twice and withdraw 5-6 times. Print the statement and Balance finally

class Account {
    constructor(initialAmount) {
        if (initialAmount > 10000) {
            this._balanceAmt = initialAmount;
        } else {
            this._balanceAmt = 10000;
        }
        this._numberOfWithdrawals = 0;
        this._numberOfDeposits = 0;
    }
    get balance() {
        return this._balanceAmt;
    }
    withdraw (amount) {
        const date = new Date();
        if (amount < this._balanceAmt && this._numberOfWithdrawals <= 2) {
            this._balanceAmt = this._balanceAmt - amount;
            this._numberOfWithdrawals += 1;
            console.log('Withdrawal:', amount, 'Balance: ', this._balanceAmt, 'Date:', date)
        } else if (amount < this._balanceAmt && this._numberOfWithdrawals > 2) {
            this._balanceAmt = this._balanceAmt - (1.05 * amount);
            this._numberOfWithdrawals += 1;
            console.log('Withdrawal1:', amount, 'Balance: ', this._balanceAmt, 'Date:', date)
        }
        else {
            console.log('Insufficient Balance', 'Date:', date);
        }
    }

    deposit (amount) {
        const date = new Date;
        this._balanceAmt = this._balanceAmt + amount;
        this._numberOfDeposits += 1;
        console.log('Deposit:', amount, 'Balance: ', this._balanceAmt, 'Date (ms):', 'Date:', date)
    }
}

const savingsAcct = new Account(20000);
savingsAcct.deposit(2000);
savingsAcct.deposit(50000);
savingsAcct.withdraw(5000);
savingsAcct.withdraw(7000);
savingsAcct.withdraw(3000);
savingsAcct.withdraw(3000);
savingsAcct.withdraw(5000);
console.log(savingsAcct);

