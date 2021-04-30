
import './css/styles.css';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componente';

export const todoList = new TodoList();
todoList.cargarLocalStorage();

// Forma resumida cuando solo enviamos 1 argumento
//todoList.todos.forEach( crearTodoHtml );

todoList.todos.forEach( todo => { crearTodoHtml(todo) });

console.log(todoList.todos);
//const tarea = new Todo('hacer programa ToDo');
//const tarea2 = new Todo('Estudiar Javascript');




