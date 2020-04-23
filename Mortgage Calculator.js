let Fund = document.getElementById('FundAmount')
let Interest = document.getElementById('Interest')
let Years = document.getElementById('Years')
let Payment = document.getElementById('Payment')
let result = document.getElementById('result')
let FundAmountError = document.getElementById('FundAmountError')
let InterestError = document.getElementById('InterestError')
let YearsError = document.getElementById('YearsError')
let PaymentError = document.getElementById('PaymentError')
let isOk = document.getElementById('isOk')

    let arrayInput =
    [
        Fund,
        Interest,
        Years,
        Payment
    ]
    
    let errorArray =
    [
        document.getElementById('FundAmountError') ,
        document.getElementById('InterestError') ,
        document.getElementById('YearsError') ,
        document.getElementById('PaymentError') 
    ]

    function calc() {

        result.value = Number(Fund.value) * (1 + (Number(Interest.value / 100))) / (Number(Years.value) * 12);
    
        if (isNaN(result.value) || result.value == Infinity) {
            isOk.innerHTML = "";
            result.innerHTML = ""
    
        } 
        else {
            
            if (Payment.value < result.value) {
                result.innerHTML = result.value
                isOk.innerHTML = "סכום גבוה, תנסה להקטין את הקרן או תגדיל את התקופה";
    
            } 
            else {
                result.innerHTML = result.value
                isOk.innerHTML = "הסכום נמוך, הינך יכול לשלם אותו";
            }
        }
    }

for(let i = 0; i < arrayInput.length; i++)
{
    arrayInput[i].addEventListener(
        'keyup',
        checkInput
    )

function checkInput(event)
{
    let value = Number( event.target.value )
    let error = errorArray[i]

    
    if ( isNaN(value) )
    {
        arrayInput[i].style.border = '2px solid red'
        error.innerHTML = '***נא להזין רק מספרים***'
    }
     else {
        arrayInput[i].style.border = '2px solid green'
        error.innerHTML = ''
    } 
    }   
    
}



