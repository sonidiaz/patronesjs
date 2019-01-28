const alumnos = {
    // todos los alumnos
    listaAlumnos:[],

    get: function(id){
        
        return this.listaAlumnos[id]
    },

    crear:function(datos){
        this.listaAlumnos.push(datos);
    },

    listado: function(){
        return this.listaAlumnos
    }
}

const infoAlumno = {
    nombre: 'juan',
    edad:20,
}
const infoAlumno2 = {
    nombre: 'nacho',
    edad:38,
}

alumnos.crear(infoAlumno);
alumnos.crear(infoAlumno2);
const listado = alumnos.listado();


const alumno = alumnos.get(1)
console.log(alumno)