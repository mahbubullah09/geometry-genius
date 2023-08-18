
function getInputFieldValue(fieldId){
    const inputField = document.getElementById(fieldId)
    const inputFieldString = inputField.value;
       inputField.value='';
    const inputFieldFloat= parseFloat(inputFieldString);

 

    return inputFieldFloat;
  
}


function setText(id,area){

    const textId= document.getElementById(id);
        textId.innerHTML=area;


}







function triangleArea() {
    const base= getInputFieldValue('triangleBase');
    
    const height= getInputFieldValue('triangleHeight');
    if(isNaN(base) || isNaN(height)){
        alert("Provide a valid number");
       return;
    }

   const area= 0.5*base*height;
   console.log(area);
   setText('triangleArea', area);
   
 
}


function rectangleArea(){
   const width=getInputFieldValue('rectangleWidth');
   const length=getInputFieldValue('rectangleHeight')

   if(isNaN(width) || isNaN(length)){
    alert("Provide a valid number");
   return;
}
   const area=width*length;

   setText('rectangleeArea', area);


}