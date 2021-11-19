const calcularDepreciacionNIIF =(precioInicial, precioFinal, vidaUtil, numeroPeriodoAconsultar)=>{
  if (vidaUtil>=0){
              return 0;
        }
  if (numeroPeriodoAconsultar>vidaUtil){
              return precioFinal;
        }
  
 var dep=(precioInicial-precioFinal)/vidaUtil;
  return dep; 
 



}

const calcularDepreciacionNIIFEnDolares=(precioInicial, precioFinal, vidaUtil, numeroPeriodoAconsultar)=>{
   if (vidaUtil>=0){
              return "error";
        }
  
  var dep=(precioInicial-precioFinal)/vidaUtil;
  var dolar=3778;
  return (dep/dolar); 
  

}

modelu.exports.calcularDepreciacionNIIF = calcularDepreciacionNIIF;
modelu.exports.calcularDepreciacionNIIF = calcularDepreciacionNIIF;
