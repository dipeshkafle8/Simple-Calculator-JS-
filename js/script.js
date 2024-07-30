let buttons=document.querySelectorAll(".items");
let displaydiv=document.getElementById('display');
let operators=document.querySelectorAll('.operator');
 let operand1=0; 
 let operator="";
 let isNew=false;


 //adding event listeners to digits
function addingEventForNumbers(){
 buttons.forEach((button)=>{
    button.addEventListener('click',eventHandler);
 })

}

//function for handling event
function eventHandler(event){
    
        if(displaydiv.innerText==0){
            displaydiv.innerText="";
        }
        if(isNew==true){
            displaydiv.innerText="";
        }
        displaydiv.innerText+=event.target.innerText;    
        isNew=false;

}



//function for adding events listeners to the operators
function addingEventForOperator(){
operators.forEach((operatorValue)=>{
    operatorValue.addEventListener('click',handleOperations);
})
}


//function for handling operations
function handleOperations(event){    
        //isNew=false;       
        let tempOperator=event.target.innerText;
        if(tempOperator!='='){
            operand1=parseInt(displaydiv.innerText);
            operator=event.target.innerText;
            isNew=true;
        }else{
            let operand2=parseInt(displaydiv.innerHTML);
            switch(operator){
                case '+':
                    displaydiv.innerText=operand1+operand2;
                    break;
                    case '-':
                        displaydiv.innerText=operand1-operand2;
                        break;
                        case '*':
                            displaydiv.innerText=operand1*operand2;
                            break;
                            case '%':
                                displaydiv.innerText=operand1/operand2;
                                break;
                    
            }
            operand1=0;
            isNew=true;
        }       
        
        
    
}

addingEventForNumbers();
addingEventForOperator();

