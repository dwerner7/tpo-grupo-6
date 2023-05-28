// document.getElementById('enviar_datos').addEventListener('click', function(){
//     let nsucursal = esSucursal();
//     console.log(nsucursal);
// });

function esSucursal(){
    if(document.getElementById('suc1').checked){
        // return "1";
        console.log(1);
        getSucursal(1);
    }
    if(document.getElementById('suc2').checked){
        return "2";
    }
    if(document.getElementById('suc3').checked){
        return "3";
    }
    if(document.getElementById('suc4').checked){
        return "4";
    }
    if(document.getElementById('suc5').checked){
        return "5";
    }
}


function getSucursal(id){
    // function getSucursal(){
    window.open(sucursal.html,"Información Sucursal","height=100%&width=100%");
    // let id = document.getElementsByClassName("sucursalMasInfo")[0].id;
    // console.log(id);
    // console.log(sucursalID);
    // let id = sucursalID-1;
    let sucursal = sucursalesInfo[id-1];
    console.log(sucursalesInfo[id-1]);
    console.log(sucursal);
    let sucInfo=`<h2 class="title-sucursales">Sucursal ${sucursal.id}</h2>
    <div class="principal-sucursal">
        <section class="datos">
            <dl>
                <dt>Dirección</dt>
                    <dd>${sucursal.direccion}</dd>
                    <dd>${sucursal.provincia}</dd>
                    <dd>${sucursal.pais}</dd>
                <dt>Datos de contacto</dt>
                    <dd><span class="nombre-dato">TELEFONO: </span>${sucursal.telefono}</dd>
                    <dd><span class="nombre-dato">EMAIL: </span>${sucursal.email}</dd>
                    <dd><span class="nombre-dato">FACEBOOK: </span>${sucursal.facebook}</dd>
                    <dd><span class="nombre-dato">INSTAGRAM: </span>${sucursal.instagram}</dd>
                <dt>Horario</dt>
                    <dd>${sucursal.horarioLaV}</dd>
                    <dd>${sucursal.horarioSab}</dd>
            </dl>
        </section>
        <section id="foto">
            <img src=${sucursal.foto} alt=${sucursal.descripcionFoto} width="400" height="300">
        </section>
    
        <section id="mapa">
            <iframe src=${sucursal.mapa} width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
    </div>`

    console.log(sucInfo);
    document.querySelector(".main-sucursal").innerHTML = sucInfo;
    
}