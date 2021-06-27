console.log("main.js file loaded");

const buttons = document.querySelectorAll(".link")
const switchButton = document.querySelector('.switch-color');
 
if (switchButton) {
    switchButton.addEventListener('click', function() {
       const theBody = document.querySelector('.the_body');
       const theButtons = document.querySelectorAll('.button_light');
       theBody.classList.toggle('the_body_dark');
       //loopt door de arry//
       if (buttons) {
            for(let i = 0; i < buttons.length; i++) {
                console.log(`Found button! ${buttons[i]}`);
            }
       }
    })
}
 
// function calculate()
// {
//     let field1=document.querySelector("num1").value;
//     let field2=document.querySelector("num2").value;

//     let result=parseFloat(field1)+parseFloat(field2);

//     if(!isNaN(Results))
//     {
//         document.getElementById("answer").innerHTML = "the answer is "+results;

//     }

// }

function calc()
{
    let n1 = parseFloat(document.getElementById('n1').value);
    n1= parseFloat(document.querySelector('.n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    
    let oper = document.getElementById('operators').value;
    
    if(oper === '+')
    {
        document.getElementById('result').value = n1+n2;
    }
    
    if(oper === '-')
    {
        document.getElementById('result').value = n1-n2;
    }
    
    if(oper === '/')
    {
        document.getElementById('result').value = n1/n2;
    }
    
    if(oper === 'X')
    {
        document.getElementById('result').value = n1*n2;
    }
}