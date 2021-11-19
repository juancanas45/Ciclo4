const calcularDepreciacionNIIF =(precioInicial, precioFinal, vidaUtil, numeroPeriodoAconsultar)=>{
  
  if (vidaUtil === 0){
              return 0;
        }
  
  if (vidaUtil < 0){
              return 0;
        }
  
  
  if (numeroPeriodoAconsultar>vidaUtil){
              return precioFinal;
        }
  
 var dep=(precioInicial-precioFinal)/vidaUtil;
  return dep; 
 



}

const calcularDepreciacionNIIFEnDolares=(precioInicial, precioFinal, vidaUtil, numeroPeriodoAconsultar)=>{
   if (precioInicial<0){
              return "error";
        }
  
  var dep=(precioInicial-precioFinal)/vidaUtil;
  var dolar=3778;
  dep=(dep/dolar); 
  retun dep;
  

}

module.exports.calcularDepreciacionNIIF = calcularDepreciacionNIIF;
module.exports.calcularDepreciacionNIIFEnDolares = calcularDepreciacionNIIFEnDolares;
