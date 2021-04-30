
export class Todo{

    static fromJson ({tarea, id, completado}){
       const tempTodo = new Todo(tarea); 

       tempTodo.tarea = tarea;
       tempTodo.id = id;
       tempTodo.completado = completado;

       return tempTodo;

    }

    constructor (tarea) {
        this.tarea = tarea;
        this.completado = false;
        this.id    = new Date().getTime();
        this.creado = new Date(); 
    }

    imprimirTodo (){
        console.log(`${this.tarea} - ${this.id}`)
    }

}