

class Formulario{
    constructor(){
        this.campos = []
    }
    agregarCampo(type, texto){

        let campos = this.campos;
        let campo;

        switch (type) {
            case 'text':
                campo = new InputText(texto);
                break;
                case 'email':
                    campo = new InputEmail(texto);
                
                break;
                case 'button':
                    campo = new Boton(texto);

                break;
        
            default:
            throw new Error('Tipo no valido' + tipo);
        }

        campos.push(campo);
    }
    getForm(){
        let form = document.createElement('form'),
        campos = this.campos.length,
        campo;

        for (let i = 0; i < campos; i++) {
            campo = this.campos[i];

            form.appendChild(campo.crearElemento());
            let br = document.createElement('br');
            form.appendChild(br);   
            
        }
        return form
    }
}

class Inputs{
    constructor(texto){
        this.texto = texto;
    }
}
class InputText extends Inputs{
    constructor(texto){
        super(texto)
    }
    crearElemento(){
        const inputText = document.createElement('input');
        inputText.setAttribute('type', 'text');
        inputText.setAttribute('placeholder', this.texto);
        return inputText;
    }
}
class InputEmail extends Inputs{
    constructor(texto){
        super(texto)
    }
    crearElemento(){
        const inputEmail = document.createElement('input');
        inputEmail.setAttribute('type', 'email');
        inputEmail.setAttribute('placeholder', this.texto);
        return inputEmail;
    }
}
class Boton extends Inputs{
    constructor(texto){
        super(texto)
    }
    crearElemento(){
        const Button = document.createElement('button');
        Button.setAttribute('type', 'submit');
        Button.textContent = this.texto;
        return Button;
    }
}

const formuario = new Formulario(); 
formuario.agregarCampo('text','añade tu nombre');
formuario.agregarCampo('text','añade tu apellido');
formuario.agregarCampo('email','añade tu email');
formuario.agregarCampo('button','Enviar');

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#app').appendChild(formuario.getForm() );
})

console.log(formuario);

