
let input= document.getElementById("input");
let buttons=document.querySelectorAll("button");
let inputValue="";

for(item of buttons){
    item.addEventListener("click",(e)=>{
        buttonText=e.target.innerText;
        console.log("Button text is",buttonText);

        if(buttonText=="x")
        {
            buttonText="*";
            inputValue += buttonText;
            input.value=inputValue;
        }
        else if(buttonText=="CUT")
        {
            inputValue=" ";
            input.value=inputValue;
        }
        else if(buttonText =="=")
        {   
            if(inputValue==" "){
               alert("INPUT PLEASE");
                
                
            }
            else{
                input.value=eval(inputValue);
            }
           
        }

        else if(buttonText=="CE")
        {
            input.value=inputValue.slice(0,-1);
            inputValue=input.value;
            
        }

              
        else{
            inputValue += buttonText;
            input.value=inputValue;
        }
        
        
    });
}