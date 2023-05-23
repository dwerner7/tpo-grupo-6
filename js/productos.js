// let data2=fetch("https://www.googleapis.com/books/v1/volumes?q=harry+potter");
// let data2=response.json();

let libros=`
<h2 class="title-productos">Descubre nuestros libros</h2>
<div class="container-libros">`

for(let elemento of data){
    libros= libros+ `       
                    <div class="libro">
                        <img src= ${elemento.portada} alt=${elemento.titulo}>
                        <div class="infoLibro">
                            <h3 class="titulo-libro"> ${elemento.titulo} </h3>
                            <p class="autor-libro"> ${elemento.autor}  </p>
                            <p class="precio-libro"> ${elemento.precio} </p>
                        </div>
                    </div>
                    `
                }

// for(let libro of data2){
    // libros = libros + `       
    //                 <div class="libro">
    //                     <img src= ${libro.volumeInfo.imageLinks.thumbnail} alt=${libro.volumeInfo.title}>
    //                     <div class="infoLibro">
    //                         <h3 class="titulo-libro"> ${libro.volumeInfo.title} </h3>
    //                         <p class="autor-libro"> ${libro.volumeInfo.authors[0]}  </p>
    //                         <p class="precio-libro"> Editorial: ${libro.volumeInfo.publisher} </p> //en realidad iria el precio
    //                     </div>
    //                 </div>
    //                 `
// }
libros=libros+`</div>`
console.log(libros);
document.querySelector(".main-productos").innerHTML=libros