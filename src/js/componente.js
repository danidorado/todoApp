
import '../css/componente.css';

export const saludar = (nombre) => {

    const h1 = document.createElement('h2');

    h1.innerHTML = `Hola, ${nombre}`;

    document.body.append(h1);

    const img = document.createElement('img');
    img.src = 'assets/foto.jpg';
    //document.body.append(img);

}

