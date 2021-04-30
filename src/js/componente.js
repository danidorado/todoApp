import {Todo} from '../classes';
import {todoList} from '../index';

const divlista = document.querySelector('.todo-list');
const inputTarea = document.querySelector('.new-todo');
const limpiar = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');

export const crearTodoHtml = (todo) => {

const htmlTodo = `
    <li class="${todo.completado ? 'completed' : ''}" data-id="${todo.id}">
    <div class="view">
        <input class="toggle" type="checkbox" ${todo.completado ? 'checked' : ''} />
        <label>${todo.tarea}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const wrapper = document.createElement('div');
    wrapper.innerHTML = htmlTodo;
    divlista.append(wrapper.firstElementChild);
    return wrapper.firstElementChild;
}

inputTarea.addEventListener('keyup',(event) => {

    if (event.keyCode === 13 && event.target.value !== '' ){
        const nuevoTodo = new Todo(event.target.value);  
        todoList.nuevoTodo(nuevoTodo);  
        crearTodoHtml(nuevoTodo);
        event.target.value = '';
        console.log(todoList);
    }     
    
});

divlista.addEventListener('click', (event) => {

    const elementName = event.target.localName;
    const liElement = event.target.parentElement.parentElement;
    const todoId = liElement.getAttribute('data-id');

    if(elementName === 'input'){
        todoList.marcarCompletado(todoId);
        (liElement.classList.contains('completed'))
            ? liElement.classList.remove('completed')
            : liElement.classList.add('completed')

    } else if(elementName === 'button'){
        todoList.borrarTarea(todoId);
        divlista.removeChild(liElement);
    }

});

limpiar.addEventListener('click', (event)=>{
    todoList.borrarCompletados();
});

ulFiltros.addEventListener('click', (event) => {

    const listaTareas = divlista.querySelectorAll('li');
    const listaFiltros = ulFiltros.querySelectorAll('.filtro');

    const filtro = event.target.text;

    listaFiltros.forEach(el => { el.classList.remove('selected') });

    event.target.classList.add('selected');

    if(filtro != undefined){
        for (const todo of todoList.todos ){
            switch (filtro) {
                case 'Completados':
                    listaTareas.forEach(el => {
                        if(!el.classList.contains('completed') && !el.classList.contains('hidden'))
                            el.classList.add('hidden');
                        else if (el.classList.contains('completed') && el.classList.contains('hidden'))
                            el.classList.remove('hidden');
                    });
                    break;
                case 'Pendientes':
                    listaTareas.forEach(el => {
                        if(el.classList.contains('completed') && !el.classList.contains('hidden'))
                            el.classList.add('hidden');
                        else if(!el.classList.contains('completed') && el.classList.contains('hidden'))
                            el.classList.remove('hidden');
                    });
                    break;
                case 'Todos':
                    listaTareas.forEach(el => {
                        if(el.classList.contains('hidden'))
                            el.classList.remove('hidden');
                    });
                    break;           
                default:
                    break;
            }
        }
    }
});