async function traerPeliculasEnCartel() {
    return await fetch('../json/peliculas.json');
}

async function cargarPeliculasEnCartel() {
    const response = await traerPeliculasEnCartel();
    if (response.ok) {
        const peliculas = await response.json(); ///convierto los objetos de json a objetos javascript
        dibujarGrillaPeliculas(peliculas);
        seteoEventosEnBotonesComprar();
    } else {
        //pendiente msje con libreria tostify informando error de fetch
    }
}

function dibujarGrillaPeliculas(peliculas) {
    let cards = "";
    let tagCards;
    let index = 0;

    peliculas.forEach(({ nombre, genero, sinopsis, imagen }) => {
        index++;
        cards += `
                <div>
                    <div class="card border-0">
                        <article class="film film${index}">
                            <img id="imgPelicula1" class="imgfilm" src="../recursos/cartelera/` + imagen + `" alt="` + nombre + `">
                            <div class="info-pelicula" id="pelicula1">
                                <p class="nombre-pelicula titulo-importante4 hoverTituloImportante">` + nombre + `</p>
                                <p class="genero-pelicula">` + genero + `</p>
                                <p class="resumen-pelicula">`+ sinopsis + `</p>
                            </div>

                            <div class="card-body border border-info bg-info-subtle">
                                        <label class="card-title" for="cantidadEntradas">Ingrese cantidad de Entradas</label>
                                        <input type="text" id="cantidadEntradas${index}" size="5">                                    
                                        <button id="comprarEntradas${index}" class="btn btn-primary">Comprar Entradas</button>                                        
                            </div>                                
                        </article>
                    </div>
                </div>
                `
    });

    tagCards = document.getElementById("peliculasEnCartel");
    tagCards.innerHTML = cards;
}

function seteoEventosEnBotonesComprar() {
    let tag1 = document.getElementById("comprarEntradas1");
    let tagInput1 = document.getElementById("cantidadEntradas1");
    tag1.addEventListener('click', (e) => agregarAlCarrito(e, 1, +tagInput1.value));

    let tag2 = document.getElementById('comprarEntradas2');
    let tagInput2 = document.getElementById('cantidadEntradas2');
    tag2.addEventListener('click', (e) => agregarAlCarrito(e, 2, +tagInput2.value));

    let tag3 = document.getElementById('comprarEntradas3');
    let tagInput3 = document.getElementById('cantidadEntradas3');
    tag3.addEventListener('click', (e) => agregarAlCarrito(e, 3, +tagInput3.value));

    let tag4 = document.getElementById('comprarEntradas4');
    let tagInput4 = document.getElementById('cantidadEntradas4');
    tag4.addEventListener('click', (e) => agregarAlCarrito(e, 4, +tagInput4.value));

    let tag5 = document.getElementById('comprarEntradas5');
    let tagInput5 = document.getElementById('cantidadEntradas5');
    tag5.addEventListener('click', (e) => agregarAlCarrito(e, 5, +tagInput5.value));

    let tag6 = document.getElementById('comprarEntradas6');
    let tagInput6 = document.getElementById('cantidadEntradas6');
    tag6.addEventListener('click', (e) => agregarAlCarrito(e, 6, +tagInput6.value));

    let tag7 = document.getElementById('comprarEntradas7');
    let tagInput7 = document.getElementById('cantidadEntradas7');
    tag7.addEventListener('click', (e) => agregarAlCarrito(e, 7, +tagInput7.value));

    let tag8 = document.getElementById('comprarEntradas8');
    let tagInput8 = document.getElementById('cantidadEntradas8');
    tag8.addEventListener('click', (e) => agregarAlCarrito(e, 8, +tagInput8.value));

    let tag9 = document.getElementById('comprarEntradas9');
    let tagInput9 = document.getElementById('cantidadEntradas9');
    tag9.addEventListener('click', (e) => agregarAlCarrito(e, 9, +tagInput9.value));
}

cargarPeliculasEnCartel();

mostrarBotonCarrito();

