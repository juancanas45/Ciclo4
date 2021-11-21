

const calcularDepreciacionNIIF =(precioInicial, precioFinal, vidaUtil, numeroPeriodoAconsultar)=>{
  
  if (vidaUtil === 0){
              return 0;
        }
  
  if (vidaUtil < 0){
              return 0;
        }
  
  
  if (numeroPeriodoAconsultar > vidaUtil){
              return precioFinal;
        }
  
 var dep=((precioInicial-precioFinal)/vidaUtil);   
 var dep1= dep*numeroPeriodoAconsultar;
 var depf = precioInicial-dep1;

  return depf; 
 
}
const calcularDepreciacionNIIFEnDolares=(precioInicial, precioFinal, vidaUtil, numeroPeriodoAconsultar)=>{

  if (precioInicial < 0){
             throw "Error";
        }
  
  
  
 var dep=((precioInicial-precioFinal)/vidaUtil);   
 var dep1= dep*numeroPeriodoAconsultar;
 var depf = precioInicial-dep1;
 var deprd=(depf/3778)

 if (Math.sign(deprd) < 0){
              throw "Error";
        }

  return deprd; 
  
}
module.exports.calcularDepreciacionNIIF = calcularDepreciacionNIIF;
module.exports.calcularDepreciacionNIIFEnDolares = calcularDepreciacionNIIFEnDolares;
