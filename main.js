class persona {
    constructor(nombre, apellido, documento) {
        this.nombre = nombre
        this.apellido = apellido
        this.documento = documento
    }
}

class interfaz {
    añadirPersona(persona) {
        const lista = document.getElementById('personas-list')
        const elemento = document.createElement('div')
        elemento.innerHTML = `<div class="card text-center mb-4">
        <div class="card-body">
            <strong>Nombre</strong>: ${persona.nombre}
            <strong>Apellido</strong>: ${persona.apellido}
            <strong>Documento</strong>:${persona.documento}
            <a href="#" class="btn btn-danger" name="eliminar">ELIMINAR</a>
        </div>
    </div>`

        lista.appendChild(elemento)
        this.dejarblanco()
    }

    dejarblanco() {
      document.getElementById('personas-form').reset()
    }

    eliminarPersonas(elemento){
        if(elemento.name==='eliminar'){
            elemento.parentElement.parentElement.remove()
        }
    }

    mostrarmensaje(mensaje,tipo){
        const div=document.createElement('div')
        div.className=`alert alert-${tipo}`
        div.appendChild(document.createTextNode(mensaje))
       const container=document.getElementsByClassName('container')
       const app=document.getElementById('app')
       container[0].insertBefore(div,app)
       setTimeout(function(){
      document.querySelector('.alert').remove()
       },2000)

    }

    mostrarmensaje(mensaje,tipo){
        const div=document.createElement('div')
        div.className=`alert alert-${tipo}`
        div.appendChild(document.createTextNode(mensaje))
       const container=document.getElementsByClassName('container')
       const app=document.getElementById('app')
       container[0].insertBefore(div,app)
       setTimeout(function(){
      document.querySelector('.alert').remove()
       },2000)

    }
}

//EVENTO QUE INTERACTUAN DESDE EL HTML
document.getElementById('personas-form').addEventListener('submit',evento=>{
    evento.preventDefault()
    const nombre=document.getElementById('nombre').value
    const apellido=document.getElementById('apellido').value
    const documento=document.getElementById('documento').value

    const personas=new persona(nombre,apellido,documento)
    const Interfaz=new interfaz 
    if (nombre==='' || apellido==='' || documento===''){
        alert('CAMPOS VACIOS')
    }else {
      Interfaz.añadirPersona(personas)
      Interfaz.mostrarmensaje('Añadido correctamente','primary','border border-secondary')
    }
})


document.getElementById('personas-list').addEventListener('click', evento=>{
    const Interfaz1=new interfaz
    Interfaz1.eliminarPersonas(evento.target)
    Interfaz1.mostrarmensaje('Usuario eliminado', 'danger','border border-danger')

  
})






