const Vendedor = function(nombre){
    this.nombre = nombre;
    this.sala = null;
}
const Comprado = function(nombre){
    this.nombre = nombre;
    this.sala = null;
}


Vendedor.prototype = {
    
    oferta: function(item, precio){
        console.log(`Tenemos el siguiente articulo en oferta ${item} con el siguiente precio ${precio}`);
    },

    vendido: function(comprador){
        console.log(`Vendido a ${comprador}`);
    }
}

Comprador.prototype = {
    oferta: function(mensaje, comprador){
        console.log(`${comprador.nombre}: ${mensaje}`);
    }
}


const subasta = function(){
    let compradores = {};
    return {
        registrar: function(usuario){
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }
}


// Instanciar los objetos