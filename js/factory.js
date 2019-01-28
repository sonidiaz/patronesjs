
function ConstructorSitio(){
    this.crearElemento = function(texto, tipo){
        let html;

        if(tipo === 'input'){
            html = new InputHtml(texto);
        }else if(tipo === 'img'){
            html = new ImageHtml(texto);
        }else if(tipo === 'h1'){
            html = new HeadingHtml(texto);
        }else if( tipo === 'p'){
            html = new ParrafoHtml(texto);
        }
        html.tipo = tipo;

        html.mostrar = function(){
            const elemento = document.createElement(html.tipo);

            if( this.tipo === 'input' ){
                elemento.setAttribute('placeholder', this.texto);
            }else if( this.tipo === 'img'){
                elemento.setAttribute('src', this.texto);
            }else{
                elemento.appendChild(document.createTextNode(this.texto));
            }
            document.querySelector('#app').appendChild(elemento);

        }
        return html;
    }
}

const InputHtml = function(texto){
    this.texto = texto;
}
const ImageHtml = function(texto){
    this.texto = texto;
}
const HeadingHtml = function(texto){
    this.texto = texto;
}
const ParrafoHtml = function(texto){
    this.texto = texto;
}

const sitioWeb =  new ConstructorSitio();

// almacenar los elementos
const elementosWeb = [];

elementosWeb.push(sitioWeb.crearElemento('Bienvenido', 'h1'));
elementosWeb.push(sitioWeb.crearElemento('Bienvenido a mi nuevo sitio web', 'p'));
elementosWeb.push(sitioWeb.crearElemento('logo.svg', 'img'));
elementosWeb.push(sitioWeb.crearElemento('Conoce más sobre nosotros', 'h1'));
elementosWeb.push(sitioWeb.crearElemento('Contacto', 'input'));


elementosWeb.forEach(function(elemento){
    elemento.mostrar();
})

console.log(elementosWeb);

