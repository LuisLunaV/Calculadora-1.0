window.onload=()=>{
let operandoA,
    operandoB,
    operacion;

const numUno=document.querySelector('#Uno');
const numDos=document.querySelector('#Dos');
const numTres=document.querySelector('#Tres');
const numCuatro=document.querySelector('#Cuatro');
const numCinco=document.querySelector('#Cinco');
const numSeis=document.querySelector('#Seis');
const numSiete=document.querySelector('#Siete');
const numOcho=document.querySelector('#Ocho');
const numNueve=document.querySelector('#Nueve');
const numCero=document.querySelector('#Cero');

const reset=document.querySelector('#Reset');
const suma=document.querySelector('#Suma');
const resta=document.querySelector('#Resta');
const multi=document.querySelector('#Mult');
const division=document.querySelector('#Division');
const igual=document.querySelector('#Igual');
const resultado=document.querySelector('#mostrar');

numUno.addEventListener('click',()=>{
resultado.innerText =resultado.innerText + '1';

})

numDos.addEventListener('click',()=>{
resultado.innerText =resultado.innerText + '2';

})

numTres.addEventListener('click',()=>{
resultado.innerText= resultado.innerText + '3';
})

numCuatro.addEventListener('click',()=>{
    resultado.innerText =resultado.innerText + '4';
    
})

numCinco.addEventListener('click',()=>{
resultado.innerText=resultado.innerText + '5';

})

numSeis.addEventListener('click',()=>{
    resultado.innerText=resultado.innerText + '6';

})

numSiete.addEventListener('click',()=>{
resultado.innerText=resultado.innerText + '7';

})

numOcho.addEventListener('click',()=>{
resultado.innerText=resultado.innerText +'8';

})

numNueve.addEventListener('click',()=>{
resultado.innerText=resultado.innerText + '9';

})

numCero.addEventListener('click',()=>{
resultado.innerText=resultado.innerText + '0';
    
})

 reset.addEventListener('click',()=>{
    operandoA=0;
    operandoB=0;
    operacion='';
    resultado.innerText='';
 })

suma.addEventListener('click',()=>{
      operandoA=resultado.innerText;
      operacion='+';
      limpiar();
    // console.log(operandoA);
})

resta.addEventListener('click',()=>{
    operandoA=resultado.innerText;
    operacion='-';
    limpiar();
})

multi.addEventListener('click',()=>{
operandoA=resultado.innerText;
operacion='X';
limpiar();
})

division.addEventListener('click',()=>{
    operandoA=resultado.innerText;
    operacion='/';
    limpiar();
})
igual.addEventListener('click',()=>{
    operandoB = resultado.innerText;
    resolver();
})


//Funciones
const limpiar=()=>{
    resultado.innerText='';
}

const resolver=()=>{
    let res=0;
    switch(operacion){
        
        case '+':
            res=operandoA*1 + operandoB*1;
            break;

        case '-':
            res=operandoA*1 - operandoB*1;
            break;

        case 'X':
            res=operandoA*1 * operandoB*1;
            break;

        case '/':
            res=(operandoB*1!=0)?operandoA*1 / operandoB*1:'0';
        break;      
    }
    resultado.innerText=res;
}
}

