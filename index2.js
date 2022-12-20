//Transactions
var balance= 290.00; //initial balance userOne

function getBalance(){
    alert(`Hello Gera! Your current balance is: ${balance}`)
}



var balance = 290.00; //initial balance userOne
deposit = parseInt(deposit);
function getDeposit() {
    var deposit = Number(prompt(" Hello Mali! please enter amount to deposit"));
    if (deposit <= 700) {
        alert(`Your current balance is: ${balance += deposit}`);
    } else {
        alert(`Please enter a valid amount`)
    }
}

var withdrawal = 0.00; //initial withdrawal userOne
withdrawal = parseInt(withdrawal);
function getWithdrawal(){
    var withdrawal = Number(prompt("Hello Mali, please enter  amount to withdraw"));
    if(withdrawal <=280) {
        alert(` Your current balance is: ${balance -= withdrawal}`);
    }else {
        alert(`Please enter a valid amount`)
    }
}
