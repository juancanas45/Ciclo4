async function mostrarProductos() { 
      let response= await fetch("https://misiontic2022upb.vercel.app/api/logistics/products");
      let productosAPI= await response.json();
      let productosConDepreciacion = new Array();
      let pd=0;
      productosConDepreciacion = productosAPI;
      productosConDepreciacion.forEach(element => {
            pd=calcularDepreciacionNIIF(element.precioInicial, element.precioFinal, element.vidaUtil,  element.periodo_consultado);
            element.precioDepreciado = pd;
  });
return productosConDepreciacion
}
 
async function mostrarProductosPrecioDolares() { 
      let response= await fetch("https://misiontic2022upb.vercel.app/api/logistics/products");
      let productosAPI= await response.json();
      let productosConDepreciacion = new Array();
      let pd=0;
      let pdd=0;
      productosConDepreciacion = productosAPI;
      productosConDepreciacion.forEach(element => {
            pd = calcularDepreciacionNIIF(element.precioInicial, element.precioFinal, element.vidaUtil,element.periodo_consultado);
            element.precioDepreciado=pdd; 
            pdd= calcularDepreciacionNIIFEnDolares(element.precioInicial, element.precioFinal, element.vidaUtil,element.periodo_consultado);
                
            element.precioDepreciadoEnDolares=pdd;
                  
  });
  return productosConDepreciacion

}

module.exports.mostrarProductos = mostrarProductos;
module.exports.mostrarProductosPrecioDolares = mostrarProductosPrecioDolares;





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

