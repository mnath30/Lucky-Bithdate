var birthDate=document.querySelector('#birthdate');
var luckyNumber=document.querySelector('#luckyNumber');
var btn=document.querySelector('#btn');
var result=document.querySelector('#result');

function calculateSum(dob){
    dob=dob.replaceAll("-","");
    var sum=0;
    for (var i=0;i<dob.length;i++){
        sum=sum+Number(dob.charAt(i));
    }
    return(sum);

}

function clickHandler(){
    var dob=birthDate.value;
    var luckynum=Number(luckyNumber.value);
    if (dob && luckynum){
        if(luckynum>0){
            var sumofdate=calculateSum(dob);
            if ((sumofdate%luckynum)==0){
                result.innerText='Yay you have a lucky birthday 🥳';
            }
            else{
                result.innerText ='Sorry your birthday is not lucky 🙁';
            }
        }
        else{
            result.innerText = 'Lucky number cannot be negative😶';
        }

        
    }
    else{
        result.innerText='Please enter both the fields😑';
    }
    
}

btn.addEventListener("click",clickHandler);