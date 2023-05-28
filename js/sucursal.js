
function getSucursal(sucursalID){
    // window.open(sucursal.html,"Información Sucursal");
    console.log(sucursalID);
    const id = sucursalID-1;
    const sucursal = sucursalesInfo[id];
    console.log(sucursalesInfo[id]);
    console.log(sucursal);
    let suc2=`<h2 class="title-sucursales">Sucursal ${sucursal.id}</h2>
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

    document.querySelector(".main-sucursal").innerHTML = suc2;
    
}