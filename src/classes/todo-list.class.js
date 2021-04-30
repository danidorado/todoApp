import {Todo} from './todo.class';

export class TodoList{

    constructor(){
        this.todos = [];
    }

    nuevoTodo(todo){
         this.todos.push(todo);
         this.guardarLocalStorage();
    }

    borrarTarea(id){
        this.todos = this.todos.filter( todo => todo.id != id );
        this.guardarLocalStorage();
    }

    marcarCompletado(id){
        for (const todo of this.todos){
            if(todo.id == id){
                todo.completado = !todo.completado;
                break;
            }
        }
        this.guardarLocalStorage();
    }

    borrarCompletados(){
        for (const todo of this.todos){
            if(todo.completado){
                this.borrarTarea(todo.id);
                const completados = document.querySelectorAll('.completed');
                completados.forEach(el => el.remove(el));
            }
        }
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    cargarLocalStorage(){
        this.todos = (localStorage.getItem('todo')) 
            ? JSON.parse(localStorage.getItem('todo'))
            : [];

        this.todos = this.todos.map( obj => Todo.fromJson(obj) );
    }

}