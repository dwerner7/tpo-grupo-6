let libros=`
<h2 class="title-productos">Descubre nuestros libros</h2>
<div class="container-libros">`

for(let elemento of data){
    libros= libros+ `       
                    <div class="libro">
                        <img src= ${elemento.portada} alt=${elemento.titulo}>
                        <div class="infoLibro">
                            <h3> ${elemento.titulo} </h3>
                            <p> ${elemento.autor}  </p>
                            <p> ${elemento.precio} </p>
                        </div>
                    </div>
                    `
}
libros=libros+`</div>`
console.log(libros);
document.querySelector(".main-productos").innerHTML=libros