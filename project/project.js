//date now
const datefield = document.querySelector("date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
datefield.innerHTML = `<em>${fulldate}</em>`;

   
    
//IMC CALC

let calc = document.getElementById('calc');//BUTTON
let message = document.getElementById('message');//MESSAGE RESULT

function getImc(x,y){
    return  x / (y**2)
    //Math.pow(14, 3);
}
function calcImc(){
    
    const tall = parseFloat(document.getElementById('tall').value);//TALL
    
    const weight = parseInt(document.getElementById('weight').value);//WEIGHT
    
    const input = document.querySelector('#name');
    const lastName = document.querySelector('#lastname');
    const list = document.getElementById("list");
    const result = getImc(weight,tall).toFixed(1);
    document.getElementById('imc').textContent= result;//IMC 
        
        if(result < 18.5){
            message.innerHTML = "<strong> underweight </strong>"; }
        else if(result >= 18.5 && result <= 24.9){ 
        message.innerHTML = "<strong> Normalweight </strong>"; }
        else if(result >= 25 && result <= 29.9){ 
        message.innerHTML = "<strong> Overweight </strong>"; }
        else if(result > 30){ 
        message.innerHTML = "<strong> Obesity </strong>"; }
    
        else{
        message.innerHTML = "<strong> Invalid </strong>"; }
    
    message.style.fontWeight = "bold";
    
    
    

    let newItem1 = input.value;
    input.value = '';
    let newItem2 = lastName.value;
    lastName.value = '';
   
    
    let listElement = newItem1+ " " +newItem2+" "+weight+" kg "+" -- "+ result +" --"+message.textContent;
   
  
    let listItem = document.createElement('li');
    let listText = document.createElement('span');
    let listBtn = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = listElement;
    
    listItem.appendChild(listBtn);
    listBtn.textContent = '❌';
    list.appendChild(listItem);
    
    listBtn.onclick = function(e) {
        list.removeChild(listItem);
      }

    input.focus();
   

   }  
    

calc.addEventListener('click',calcImc);


let div = document.createElement('div');


