const body = document.body;
body.style.background = '#fff';
const btn = document.querySelector('.btn');
const btnd = document.querySelector('.btnd');
const btnw = document.querySelector('.btnw');
const btnws = document.querySelector('.btnws');
let balance = 20000;
const accNo = 12345;
let updatedBal = 0;
const enter = document.querySelector('.entry');
const mainInput = document.querySelector('.data');
const deposit = document.querySelector('.deposit');
const withdrawl = document.querySelector('.withdrawl');

btn.style.display = 'block';
btnw.style.display = 'none';
btnd.style.display = 'none';

btn.addEventListener('click', () => {
    check();
});

btnws.addEventListener('click', ()=> {
    deposit.value="";
    check();
})

function deposits() {
    mainInput.style.display = "none";
                withdrawl.style.display = "none";
                deposit.style.display = "block";
                btn.style.display = 'none';
                btnw.style.display = 'none';
                btnd.style.display = 'block';
                if (deposit.style.display = "block") {
                    btnd.addEventListener('click', () => {
                        balance += Number(deposit.value);
                        enter.innerHTML = `<h2>Your updated balance is ${balance}</h2><br>`;
                    });
                }
}

function withdrawls() {
    mainInput.style.display = "none";
                deposit.style.display = "none";
                withdrawl.style.display = "block";
                btn.style.display = 'none';
                btnd.style.display = 'none';
                btnw.style.display = 'block';

                if (withdrawl.style.display = "block") {
                    btnw.addEventListener('click', () => {
                        updatedBal = balance - Number(withdrawl.value);
                        enter.innerHTML = `<h2>Your balance after withdrawl is ${updatedBal}</h2><br>`;
                    });
                }
}

function check() {
    if (mainInput.value == accNo) {
        const opt = prompt("Welcome User Select one option \n 1 for Balance \n 2 for Deposit Money \n 3 for Withdrawl money");


        switch (opt) {
            case '1':
                enter.innerHTML = `<h2>Your Balance is ${balance}</h2><br>`;
                break;

            case '2':
                deposits();
                break;

            case '3':
                withdrawls();
                break;
        }
    }


    else {
        alert("Wrong Account Number you only have 3 more chance left");
    }
}