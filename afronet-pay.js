//SCRIPT FOR AFRONET-PAY PAGE

window.onload = function () {
    console.log('i dey work o');
    const heroPay = document.getElementById('hero-pay');
    const fieldset1 = document.getElementById('fieldset1');
    const fieldset2 = document.getElementById('fieldset2');
    const formPay = document.getElementById('form-payment');

    //get ID for all #fieldset1 elements
    const payMethod = document.getElementById('payment-method');
    const mymethod = document.getElementById('mymethod');
    const cardNumber = document.getElementById('cardNumber');
    const expiryDate = document.getElementById('expiryDate');
    const expiry = document.getElementById('expiry');
    const cvv = document.getElementById('cvv');
    const userCvv = document.getElementById('userCvv');
    const appleID = document.getElementById('apple-id');
    const applePay = document.getElementById('apple-pay');

    //get ID for all #fieldset2 elements
    const userBank = document.getElementById('user-bank');
    const recipientNumber = document.getElementById('recipient-number');
    const accountNumber = document.getElementById('account-number');
    const deliveryMethod = document.getElementById('deliverMethod');
    const deliverySelect = document.getElementById('delivery-select');


    payMethod.onchange = function () {
        if (payMethod.selectedIndex === 1 || payMethod.selectedIndex === 2 || payMethod.selectedIndex === 4) {
            mymethod.style.display = 'block';
            cardNumber.style.display = 'block';
            expiry.style.display = 'block'
            expiryDate.style.display = 'block';
            cvv.style.display = 'block';
            userCvv.style.display = 'block';
            fieldset1.style.height = '480px'
            heroPay.style.height = '1300px';
            formPay.style.height = '1300px';

            //apple pay method cannot display here
            appleID.style.display = 'none';
            applePay.style.display = 'none';

        } else if (payMethod.selectedIndex === 3) {
            //apple pay method displayed
            appleID.style.display = 'block';
            applePay.style.display = 'block';

            //apple pay method cannot display credit card method
            mymethod.style.display = 'none';
            cardNumber.style.display = 'none';
            expiryDate.style.display = 'none';
            expiry.style.display = 'none';
            cvv.style.display = 'none';
            userCvv.style.display = 'none';
            fieldset1.style.height = '320px';
            heroPay.style.height = '1200px';
        } else if(payMethod.selectedIndex === 0){
            mymethod.style.display = 'none';
            cardNumber.style.display = 'none';
            expiry.style.display = 'none'
            expiryDate.style.display = 'none';
            cvv.style.display = 'none';
            userCvv.style.display = 'none';
            fieldset1.style.height = '250px'
            heroPay.style.height = '950px';
            formPay.style.height = '950px';

            //apple pay method cannot display here
            appleID.style.display = 'none';
            applePay.style.display = 'none';
        }
    }


    userBank.onchange = function () {

        if (userBank.selectedIndex === 1 || userBank.selectedIndex === 2 || userBank.selectedIndex === 3 || userBank.selectedIndex === 4 || userBank.selectedIndex === 5 || userBank.selectedIndex === 6) {
            recipientNumber.style.display = 'block';
            accountNumber.style.display = 'block';
            deliveryMethod.style.display = 'block';
            deliverySelect.style.display = 'block';
            fieldset2.style.height = '400px';
            heroPay.style.height = '1300px';
            formPay.style.height = '1300px';
        } else if(userBank.selectedIndex === 0){
            recipientNumber.style.display = 'none';
            accountNumber.style.display = 'none';
            deliveryMethod.style.display = 'none';
            deliverySelect.style.display = 'none';
            fieldset2.style.height = '250px';
            heroPay.style.height = '1200px';
            formPay.style.height = '1200px';
        }
    }
}
