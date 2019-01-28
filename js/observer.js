
let observer = {
    obterOfertas: function(callback){
        if( typeof callback == "function"){
            this.suscribers[this.suscribers.length] = callback;
        }
    },
    cancelarOferta: function(callback){
        for (let i = 0; i < this.suscribers.length; i++) {
            if( this.suscribers[i] == callback ){
                delete this.suscribers[i];
            }
        }
    },
    publicarOferta: function(oferta){
        for (let i = 0; i < this.suscribers.length; i++) {
            if( typeof this.suscribers[i] == "function" ){
                this.suscribers[i](oferta);
            }
        }
    },
    crear: function(objeto) {
        for( let i in this){
            if( this.hasOwnProperty(i) ){
                objeto[i] = this[i];
                objeto.suscribers = [];
            }
        }
    }
}


// Vendedores

const udemy = {
    nuevoCurso: function(){
        const curso = "UN nuevo cuerso de JS";
        this.publicarOferta(curso);
    }
}

const faceBook = {

    nuevoAnuncio: function(){
        const oferta = "COnpra un celular";
        this.publicarOferta(oferta);
    }

}

observer.crear(udemy);
observer.crear(faceBook);


const juan = {
    compartir: function(oferta){
        console.log("Exelente esta oferta " + oferta);
    }
}

const karen = {
    interesa: function(oferta){
        console.log('Me interesa la oferta' + oferta);
    }
}

udemy.obterOfertas( juan.compartir );
udemy.obterOfertas( karen.interesa );
udemy.nuevoCurso();
udemy.cancelarOferta(karen.interesa);
udemy.nuevoCurso();

faceBook.obterOfertas(juan.compartir);
faceBook.obterOfertas(karen.interesa);
faceBook.nuevoAnuncio()