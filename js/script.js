function num_zero(){
    
    
    document.getElementById('risultato').value +='0';
}



function num_uno(){
    
    
    document.getElementById('risultato').value +='1';
}
function num_due(){
    
    document.getElementById('risultato').value +='2';
}
function num_tre(){
    
    document.getElementById('risultato').value +='3';
}
function num_quattro(){
    
    document.getElementById('risultato').value +='4';
}
function num_cinque(){
    
    document.getElementById('risultato').value +='5';
}
function num_sei(){
    
    document.getElementById('risultato').value +='6';
}
function num_sette(){
    
    document.getElementById('risultato').value +='7';
}
function num_otto(){
    
    document.getElementById('risultato').value +='8';
}
function num_nove(){
    
    document.getElementById('risultato').value +='9';
}
function canc(){
    
    document.getElementById('risultato').value = ' ';
}
function virgola(){
    document.getElementById('risultato').value += '.';
}
let numeropiu;

function somma(){
     numeropiu = +(document.getElementById('risultato').value)  
   
    document.getElementById('risultato').value = ' '
    console.log(numeropiu)
    

    
    

    

}
let numeromeno;
function sottrazione(){
    numeromeno = +(document.getElementById('risultato').value)  
  
   document.getElementById('risultato').value = ' '
   console.log(numeromeno)
   

   
   

   

}
let numeroper;
function moltiplicazione(){
    numeroper = +(document.getElementById('risultato').value)  
  
   document.getElementById('risultato').value = ' '
   console.log(numeroper)
   
   

   
   

   

}
let numerodiviso;
function divisione(){
    numerodiviso = +(document.getElementById('risultato').value)  
  
   document.getElementById('risultato').value = ' '
   console.log(numerodiviso)
   

   
   

   

}
/* var risultato = document.getElementById('risultato').value */
function uguale(){
   if(numeropiu) {

    let numero2 = +document.getElementById('risultato').value
    let risultato = +numeropiu + +numero2
    console.log(numeropiu )
    console.log(typeof +numeropiu)
    console.log(numero2)
    
    console.log(risultato)
    document.getElementById('risultato').value = risultato
    numeropiu = 0
   }
   else if(numeromeno){
    let numero2 = +document.getElementById('risultato').value
    let risultato = +numeromeno - +numero2
    console.log(numeromeno )
    console.log(typeof +numeromeno)
    console.log(numero2)
    
    console.log(risultato)
    document.getElementById('risultato').value = risultato
    numeromeno = 0
   }
   else if(numeroper){
    let numero2 = +document.getElementById('risultato').value
    let risultato = +numeroper * +numero2
    console.log(numeroper )
    console.log(typeof +numeroper)
    console.log(numero2)
    
    console.log(risultato)
    document.getElementById('risultato').value = risultato
    numeroper = 0
   }
   else if(numerodiviso){
    let numero2 = +document.getElementById('risultato').value
    let risultato = +numerodiviso / +numero2
    console.log(numerodiviso )
    console.log(typeof +numerodiviso)
    console.log(numero2)
    
    console.log(risultato)
    document.getElementById('risultato').value = risultato
    numerodiviso = 0
   }
   else {
       
    console.log(document.getElementById('risultato').value )
}

}

function peace(){
    document.body.style = 'background:url(../img/pace.png)';

}
