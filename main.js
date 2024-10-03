//output element
const outputYear=document.querySelector('.year-output');
const outputMount=document.querySelector('.mounth-output');
const outputDay=document.querySelector('.day-output');
const submitBtn=document.querySelector('.submit-btn');
//input element
let isValid=false;
const inputMount=document.querySelector('#Month');
const inputYear=document.querySelector('#Year');
const inputDay=document.querySelector('#day');
//error element
const errorMonth=document.querySelector('.error-Month');
const errorYear=document.querySelector('.error-Year');
const errorDay=document.querySelector('.error-day');
submitBtn.addEventListener('click',calc)
inputDay.addEventListener('input',e=>{
    if(+inputDay.value>31){
        isValid=false;
       return errorDay.textContent="Must by a valid date";
        
    }
    else{
        isValid=true;
        errorDay.textContent="";
    }
    if(+inputDay.value==0){
        isValid= false;
       return errorDay.textContent="this field is required";
        
    }else{
        isValid=true;
         return errorDay.textContent='';
    }
})
inputMount.addEventListener('input',e=>{
    if(+inputMount.value>12){
        isValid=false;
       return errorMonth.textContent="Must by a valid date";
        
    }
    else{
        isValid=true;
        errorMonth.textContent="";
    }
    if(+inputMount.value==0){
        isValid= false;
       return errorMonth.textContent="this field is required";
        
    }else{
        isValid=true;
         return errorMonth.textContent='';
    }
})
inputYear.addEventListener('input',e=>{
    if(+inputYear.value>2024){
        isValid=false;
       return errorYear.textContent="Must by a valid date";
        
    }
    else{
        isValid=true;
        errorYear.textContent="";
    }
    if(+inputYear.value==0){
        isValid= false;
       return errorYear.textContent="this field is required";
        
    }else{
        isValid=true;
         return errorYear.textContent='';
    }
});
function calc(){
    if(isValid){
        let birthDay = `${inputMount.value}/${inputDay.value}/${inputYear.value}`;
        let birthDayObj=new Date(birthDay);
        let ageDiffMill=Date.now()-birthDayObj;
        let ageDate=new Date(ageDiffMill);
        let getDate=new Date(ageDiffMill);
        let ageYears=ageDate.getUTCFullYear()-1970;
        let ageMounth=ageDate.getUTCMonth();
        let ageDay=ageDate.getUTCDay();
        outputDay.textContent=ageDay;
        outputMount.textContent=ageMounth;
        outputYear.textContent=ageYears;
    }else{
        alert('error')
    }
}
