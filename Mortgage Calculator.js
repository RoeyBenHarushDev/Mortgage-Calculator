
    let Fund = document.getElementById('FundAmount')
    let Interest = document.getElementById('Interest')
    let Years = document.getElementById('Years')
    let Payment = document.getElementById('Payment')
    let result = document.getElementById('result')
    let isOk = document.getElementById('isOk')

function calc ()
{

    result.value =  Number(Fund.value) * (1 + (Number(Interest.value / 100))) / (Number(Years.value) * 12)
    result.innerHTML = result.value
    if(Payment.value < result.value)
    {
        isOk.innerHTML = "סכום גבוה, תנסה להקטין את הקרן או להגדיל את התקופה"
    }
    else
    {
        isOk.innerHTML = "הסכום נמוך, הינך יכול לשלם אותו"
    }
}

function checkInput(parameter,errorElement)
{
    let errorParagraph = document.getElementById(errorElement)
    

    if ( isNaN(parameter) )
    {
        errorParagraph.style.display = 'block'
    }
     else {
        errorParagraph.style.display = 'none'
    }    
}
