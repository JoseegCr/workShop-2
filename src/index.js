/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
const random = () => Math.random()* (maximum - minimum)

const createImageNode = () => {
    const container = document.createElement('div')
    container.className = "p-4";

    const imagen = document.createElement('img')
    imagen.className = "mx-auto";
    imagen.width = '320'
    imagen.src = "https://randomfox.ca/images/2.jpg";

    container.appendChild(imagen);

    return imagen;
};

const nuevaImagen = createImageNode();
const mountNode = document.getElementById("images");

mountNode.append(
    nuevaImagen,
    createImageNode(),
    createImageNode(),
    createImageNode(),
    createImageNode());
