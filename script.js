var birthDate=document.querySelector('#birthdate');
var luckyNumber=document.querySelector('#luckyNumber');
var btn=document.querySelector('#btn');
var result=document.querySelector('#result');

function calculateSum(date){
    console.log(typeof(date));
    date=date.replaceAll("-","");
    var sum=0;
    for (var i=0;i<date.length;i++){
        sum=sum+Number(date.charAt(i));
    }
    console.log(sum);
    return(sum);

}

function clickHandler(){
    var sumofdate=calculateSum(birthDate.value);
    var luckynum=Number(luckyNumber.value);
    console.log(sumofdate,luckynum);
    if ((sumofdate%luckynum)==0){
        result.innerHTML='<h3>Yay you have a lucky birthdate</h3>';
        console.log("yes");
    }
    else{
        result.innerHTML ="<h3>Sorry your birthday and number are not lucky</h3>";
        console.log("no")
    }
    console.log(result);
}

btn.addEventListener("click",clickHandler);