var depositBtn = document.querySelector('.deposit');
var withdrawBtn = document.querySelector('.withdraw');
var depositInput = document.querySelector('.amount');
var withdrawInput = document.querySelector('.amount');
var balanceSpan = document.querySelector('.balance'); 


function withdraw() {
   if(Number(withdrawInput.value) > Number(balanceSpan.textContent)) {
    alert('insufitient fund, please check your account balance')
    
    } else {

    balanceSpan.textContent = Number(balanceSpan.textContent) - Number(withdrawInput.value)
    
    }
    checkBalance()
}    

withdrawBtn.addEventListener('click', withdraw);


function deposit() {
    balanceSpan.textContent = Number(balanceSpan.textContent) + Number(depositInput.value);


    checkBalance();
}

depositBtn.addEventListener('click', deposit);


function checkBalance() {
    if(Number(balanceSpan.textContent) == 0) {
    document.querySelector('.account').style.backgroundColor = 'rgba(255, 2, 2, 0.7)';
    } else if(Number(balanceSpan.textContent) != 0) {
    document.querySelector('.account').style.backgroundColor = 'rgba(215, 217, 226, 0.7)';
    
    }
    
}