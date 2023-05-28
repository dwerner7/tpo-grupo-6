// let libros=`
// <h2 class="title-productos">Descubre nuestros libros</h2>
// <div class="container-libros">`

// for(let elemento of data){
//     libros= libros+ `       
//                     <div class="libro">
//                         <img src= ${elemento.portada} alt=${elemento.titulo}>
//                         <div class="infoLibro">
//                             <h3 class="titulo-libro"> ${elemento.titulo} </h3>
//                             <p class="autor-libro"> ${elemento.autor}  </p>
//                             <p class="precio-libro"> ${elemento.precio} </p>
//                         </div>
//                     </div>
//                     `
//                 }


// libros=libros+`</div>`
// console.log(libros);
// document.querySelector(".main-productos").innerHTML=libros;

const busquedaPorDefecto = "fiction";

// function infoLibro(libroDiv){
//     window.open(libro-info.html,"Informacion","width=120,height=300,scrollbars=NO");

// }

function getBuscador(){
    let buscador = `<input  id="input-busqueda" type="search" autocomplete="off" placeholder="Ingresar título, autor, género o palabra clave">
    <button id="btn-busqueda" class="boton" onclick="buscarLibros()"> Buscar </button>
    <button id="btn-reset-busqueda" class="boton" type="reset" onclick="resetBusqueda()">Borrar</button>`
    document.querySelector(".buscador").innerHTML=buscador;
}

function buscarLibros(){
    let busqueda = document.getElementById("input-busqueda").value;
    if(busqueda != " "){
        busqueda = busqueda.toLowerCase();
        let search = "";
        for(const letra of busqueda){
            if(letra == " "){
                search += "+";
            }else {
                search += letra;
            }
        }
        console.log(search);
        getLibrosAxios(search);
    } else {
        getLibrosAxios(busquedaPorDefecto);
    }
}


function resetBusqueda(){
    getLibrosAxios(busquedaPorDefecto);
    document.getElementById("input-busqueda").value="";
}

function crearDivsLibros(cantidad){
    let divs = "";
    for (let i=1; i<=cantidad;i++){
        divs = divs + `<div id="libro-${i}"></div>`
    }
    document.querySelector(".container-libros").innerHTML=divs;
}

//Como la api no tiene precio, puse esta función para que al menos haya algun valor
function random(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

const getLibrosAxios = async(busqueda) => {
    try {
        //Juvenile Fiction     
        /*const*/let response = await axios(`https://www.googleapis.com/books/v1/volumes?q=${busqueda}&printType=books`);
        console.log("Libros: ",response);
        console.log("Cantidad de libros encontrados: ", response.data.items.length);
        const libros=response.data.items;
        // setDivs(response.data.items.length);
        
        //crea los divs de los libros
        crearDivsLibros(libros.length);

        //para cuando encuentra que a algun libro le falta info no deje un espacio vacio y siga con el siguiente
        let contadorLibros=1;
        // for(const libro of response.data.items){
            // for (let i = 1; i<=response.data.items.length;i++){
                for (let i = 1; i<=libros.length;i++){
            // const resLibro = await axios(response.data.items[i].selfLink);
            // const resLibro = await axios(libro.selfLink);
            // console.log(resLibro);
            // console.log(resLibro.data.volumeInfo.imageLinks.thumbnail);
            // console.log(resLibro.data.volumeInfo.title);
            // console.log(resLibro.data.volumeInfo.authors[0]);
            
            // const libro = `       
            // <div class="libro" >
            //     <img src= ${resLibro.data.volumeInfo.imageLinks.thumbnail} alt=${resLibro.data.volumeInfo.title}>
            //     <div class="infoLibro">
            //         <p class="titulo-libro"> ${resLibro.data.volumeInfo.title} </p>
            //         <p class="autor-libro"> ${resLibro.data.volumeInfo.authors[0]}  </p>
            //         <h5> ${resLibro.data.volumeInfo.publisher} </h5> 
            //         <p class="precio-libro">$${random(3000,8000)} </p> 
            //     </div>
            // </div>
            //  `   
            
            //validacion para que muestre más libros
            if(libros[i]===undefined){continue;}

             //validacion para que muestre más libros
            if(libros[i].volumeInfo.imageLinks===undefined){continue;}

            //lo hice para que queda mas prolijo pero no se si hace falta
            const portada = libros[i].volumeInfo.imageLinks.thumbnail;
            const titulo = libros[i].volumeInfo.title;
            const autor = libros[i].volumeInfo.authors[0];
            const editorial = libros[i].volumeInfo.publisher;
            
            let tituloAcortado = "";
            if(titulo.includes("/")){
                for (const letra of titulo){
                    if(letra=="/"){
                        break;
                    }else{
                        tituloAcortado+=letra;
                    }
                }
                console.log(tituloAcortado);
            }else{
                tituloAcortado=titulo;
            }

            
            //validacion
            // if(portada===undefined || titulo===undefined || autor===undefined || editorial===undefined){continue;}

            const libro = `       
            <div class="libro" >
                <img src= ${portada} alt=${tituloAcortado}>
                <div class="infoLibro">
                    <p class="titulo-libro info-padding"> ${tituloAcortado} </p>
                    <p class="autor-libro info-padding"> ${autor}  </p>
                    <h5 class="info-padding"> ${editorial} </h5> 
                    <p class="precio-libro info-padding">$${random(3000,8000)} </p> 
                </div>
            </div>
             `   

            // document.querySelector(`#libro-${i}`).innerHTML=  libro;
            document.querySelector(`#libro-${contadorLibros}`).innerHTML=  libro;
            
            contadorLibros++;
        }

    } catch (error) {
        console.log(error);
    }
}



getBuscador();

getLibrosAxios(busquedaPorDefecto);

