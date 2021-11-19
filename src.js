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

}

modelu.exports.calcularDepreciacionNIIF = calcularDepreciacionNIIF;
modelu.exports.calcularDepreciacionNIIF = calcularDepreciacionNIIF;
