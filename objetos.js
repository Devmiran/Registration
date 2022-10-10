/* const persona={
    nombre:'pepito',
    apellido:'perez',
    edad:12
}

alert (persona.nombre "<br>"
       persona.apellido
    edad:12persona.genero='masculino') */

/* const usuario={
    nombre:'Ilva',
    apellido:'Perez',
    

    saludar:function(){
        return `Hola  ${this.nombre} ${this.apellido}`
    }
    
   
}
console.log(usuario.saludar()) */

/* const cuenta={
    numero:12345,
    saldo:100000,

    depositar:function(valor){
        this.saldo=this.saldo+valor
    },

    retirar:function (valor){
        this.saldo=this.saldo-valor
    }


}

 */


/* 
function Persona(nombre,apellido,edad){
    this.nombre=nombre,
    this.apellido=apellido,
    this.edad=edad

    this.mostrar= function mostrar(){
        return this.nombre + '' + this.apellido
    }
    this.mostraredad=function mostrar(){
        return 'Esta persona tiene'  +  this.edad 
    }
}

const persona1=new Persona('pepito','perez', 30);
const persona2=new Persona('maria','perez', 20);
const persona3=new Persona('jorge','guitierres', 57) */

/*  class persona{
   constructor(name,lastname){
        this.name=name
        this.lastname=lastname
   
    }

} */


/* const pepe= new persona('pepe', 'mojito');
const guillermo= new persona ('guillermo', 'perez')
   

    
function compania(name){
    let empleados=[]
    this.name=name

    this.getElemento=function(){
        return empleados
    }
}

const compañia1=new compania('CocaCOla')
const compañia2=new compania('Pepsi'); */

function persona(name,lastname){
    this.name=name,
    this.lastname=lastname
}


class programador extends persona{
    constructor (lenguaje,name,lastname){   
    super(name,lastname)
    this.lenguaje=lenguaje
}
}



