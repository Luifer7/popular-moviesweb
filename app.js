


// Constantes para desarrollo
const c = console;
const d = document;

//Paginacion
let pagina = 1;
const btnUno = d.querySelector('.uno');
const btnDos = d.querySelector('.dos');
//const btnTres = d.querySelector('.tres');
//const btnCuatro = d.querySelector('.cuatro');
let paginaUno = document.querySelector('.pagina-uno');
let paginaDos = document.querySelector('.pagina-dos');
//let paginaDos = document.querySelector('.pagina-dos');

// Boton adelante
btnDos.addEventListener('click', () => {
    if (pagina < 1000) {
        pagina += 1;
        paginaUno.innerHTML = "";
        paginaDos.innerHTML = "";
        paginaUno.innerHTML = pagina;
        paginaDos.innerHTML = pagina;
        cargarPeliculas();
    } 
    
})

// Boton atras Arriba
btnUno.addEventListener('click', () => {

    if (pagina > 1) {
        pagina -= 1;
        paginaUno.innerHTML = pagina;
        paginaDos.innerHTML = pagina;
        cargarPeliculas();
    } 
   
})


 
//funcion traer pelicula

const  cargarPeliculas = async () => {

    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=9f7031622a3c84ce82bbf384f262391a&language=es-MX&page=${pagina}`);
        
        if (res.status === 200) {
            const datos = await res.json();

           /*
            const g = {

                a : "Accion",
                c : "Comedia",
                t : "Terror",
                c : "Ciencia Ficcion",
                d : "Drama"
             }

            
             
            c.log(datos)
            c.log(g) */
            
            let peliculas = "";
            datos.results.forEach(pelicula => {
                const gd  = pelicula.genre_ids[1]
                    peliculas += `
                    <div class="col-sm-4">
                    
                    <div class="card bg-warning">
                     <div class="card-header text-center">
                       <img class="img-fluid rounded"   width="300" height="90"  src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" alt="">
                     </div>
                     
                    
                     <ul class="list-group list-group-flush">
                       <li class="list-group-item bg-warning">${pelicula.title}</li>
                       <li class="list-group-item text-muted bg-warning">${pelicula.genre_ids}</li>
                    </ul>
                    
                     <div class="card-footer text-center">
                      <a class="btn btn-success ver" href="#${pelicula.title.slice(0,2)}" role="button" data-bs-toggle="collapse">Ver mas..
                      </a>
                      </div>
                      <div class="collapse card-header" id="${pelicula.title.slice(0,2)}"><p>${pelicula.overview}</p> </div>
                    </div>
                    </br>
                  </div>
                    `
            });

            d.querySelector('.row').innerHTML = peliculas; 
         
            
        } else if (res.status === 401) {
            c.log("tu llave de la api  esta mal")
        } else if (res.status === 404) {
            c.log("La pelicula que buscas no existe");
        }else {
            c.log("No se reconoce el error revisa tu codigo fuente")
        }
       
    } catch (error) {
        console.log(error)
    }
    

    let jk = d.querySelectorAll('.text-muted');
    jk.forEach(cadaTagg => {

      let texto = cadaTagg.textContent;
       let textoNuevo =  texto.slice(0,2);
        cadaTagg.textContent = "";

       if (textoNuevo === "28") {
            cadaTagg.textContent = "Accion"
       }
       if (textoNuevo === "12") {
        cadaTagg.textContent = "Aventura"
       }  
       if (textoNuevo === "16") {
        cadaTagg.textContent = "Animacion"
       }
       if (textoNuevo === "35") {
        cadaTagg.textContent = "Comedia"
       }
       if (textoNuevo === "80") {
        cadaTagg.textContent = "Crimen"
        }
        if (textoNuevo === "99") {
        cadaTagg.textContent = "Documental"
        }  
        if (textoNuevo === "18") {
        cadaTagg.textContent = "Drama"
         }
        if (textoNuevo === "10") {
        cadaTagg.textContent = "Familiar"
        }
        if (textoNuevo === "14") {
            cadaTagg.textContent = "Fantasia"
            }
            if (textoNuevo === "36") {
            cadaTagg.textContent = "Historia"
            }  
            if (textoNuevo === "27") {
            cadaTagg.textContent = "Terror"
             }
            if (textoNuevo === "96") {
            cadaTagg.textContent = "Misterio"
            }

            if (textoNuevo === "10") {
                cadaTagg.textContent = "Romance"
                }
                if (textoNuevo === "87") {
                cadaTagg.textContent = "Ciencia Ficcion"
                }  
                if (textoNuevo === "53") {
                cadaTagg.textContent = "Thriller"
                 }
                if (textoNuevo === "37") {
                cadaTagg.textContent = "Western"
                }
       
    
          
      
        
    });
        
    //console.log(jk)
}

cargarPeliculas(); 

