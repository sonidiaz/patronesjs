const comprarBoleto = (function(){

    // Privado
    let evento  = 'Evento de Js';
    const adquirirBoleto = () => {
        const elemento =  document.createElement('p');
        elemento.textContent = `Comprando boletos para el ${evento}`;
        document.querySelector('#app').appendChild(elemento);
    }


    // Publico
    return {
        mostrarBolero: function(){
            adquirirBoleto();
        }
    };
})();


comprarBoleto.mostrarBolero();