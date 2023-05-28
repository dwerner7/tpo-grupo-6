// // document.getElementById('enviar_datos').addEventListener('click', function(){
// //     let nsucursal = esSucursal();
// //     console.log(nsucursal);
// // });

// function esSucursal(){
//     if(document.getElementById('suc1').checked){
//         // return "1";
//         console.log(1);
//         getSucursal(1);
//     }
//     if(document.getElementById('suc2').checked){
//         return "2";
//     }
//     if(document.getElementById('suc3').checked){
//         return "3";
//     }
//     if(document.getElementById('suc4').checked){
//         return "4";
//     }
//     if(document.getElementById('suc5').checked){
//         return "5";
//     }
// }


function getSucursal(id){
    // function getSucursal(){
    // window.open(sucursal.html,"Información Sucursal","height=100%&width=100%");
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
    // document.querySelector(".main-sucursal").innerHTML = sucInfo;
    return sucInfo;
    
}



document.getElementById('enviar_datos').addEventListener('click', function(){
    let nsucursal = esSucursal();

    let suc1 = `<h2 class="title-sucursales">Sucursal 1</h2>
        <div class="principal-sucursal">
            <section class="datos">
                <dl>
                    <dt>Dirección</dt>
                        <dd>Calle 28 N° 1200 - La Plata</dd>
                        <dd>Buenos Aires</dd>
                        <dd>Argentina</dd>
                    <dt>Datos de contacto</dt>
                        <dd><span class="nombre-dato">TELEFONO: </span>+54 (221) 555-0101</dd>
                        <dd><span class="nombre-dato">EMAIL: </span>sucursal1@bookshop.com.ar</dd>
                        <dd><span class="nombre-dato">FACEBOOK: </span>https://www.facebook.com/bookshop_suc1</dd>
                        <dd><span class="nombre-dato">INSTAGRAM: </span>https://www.instagram.com/bookshop_suc1</dd>
                    <dt>Horario</dt>
                        <dd>Lunes a Viernes de 8hs a 20hs</dd>
                        <dd>Sabados de 9hs a 13hs</dd>
                </dl>
            </section>
            <section id="foto">
                <img src="img/sucursal-1.jpg" alt="Foto Sucursal 1" width="400" height="300">
            </section>
        
            <section id="mapa">
                <!--<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.7337684356653!2d-57.9688784249848!3d-34.938213375239286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e87c21a9b80b%3A0x27edc80b2246cd31!2sCalle%2028%201200%2C%20La%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1682035483921!5m2!1ses-419!2sar" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>-->
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1635.368901025!2d-57.96759096534714!3d-34.938112230627766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e87c21a9b80b%3A0x27edc80b2246cd31!2sCalle%2028%201200%2C%20La%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1685078762271!5m2!1ses!2sar" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>
        </div>`;

    let suc2 = `<br>
    <h2 class="title-sucursales">Sucursal 2</h2>
    <div class="principal-sucursal">
        <section class="datos">
            <dl>
                <dt>Dirección</dt>
                    <dd>Calle 32 N° 600 - La Plata</dd>
                    <dd>Buenos Aires</dd>
                    <dd>Argentina</dd>
                <dt>Datos de contacto</dt>
                    <dd><span class="nombre-dato">TELEFONO: </span>+54 (221) 544-8800</dd>
                    <dd><span class="nombre-dato">EMAIL: </span>sucursal2@bookshop.com.ar</dd>
                    <dd><span class="nombre-dato">FACEBOOK: </span>https://www.facebook.com/bookshop_suc2</dd>
                    <dd><span class="nombre-dato">INSTAGRAM: </span>https://www.instagram.com/bookshop_suc2</dd>
                <dt>Horario</dt>
                    <dd>Lunes a Viernes de 9hs a 21hs</dd>
                    <dd>Sabados de 9hs a 12:30hs</dd>
            </dl>
        </section>
        <section id="foto">
            <img src="img/sucursal-2.jpg" alt="Foto Sucursal 2" width="400" height="300">
        </section>

        <section id="mapa">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.522778189219!2d-57.96290472566501!3d-34.893328072851794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e65547f98b47%3A0x6b40d40eb5dcfefe!2sAv.%2032%20600%2C%20La%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1685079632820!5m2!1ses!2sar" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
    </div>`;

    let suc3 = `<br>
    <h2 class="title-sucursales">Sucursal 3</h2>
    <div class="principal-sucursal">
        <section class="datos">
            <dl>
                <dt>Dirección</dt>
                    <dd>Calle 7 N° 1500 - La Plata</dd>
                    <dd>Buenos Aires</dd>
                    <dd>Argentina</dd>
                <dt>Datos de contacto</dt>
                    <dd><span class="nombre-dato">TELEFONO: </span>+54 (221) 594-9000</dd>
                    <dd><span class="nombre-dato">EMAIL: </span>sucursal3@bookshop.com.ar</dd>
                    <dd><span class="nombre-dato">FACEBOOK: </span>https://www.facebook.com/bookshop_suc3</dd>
                    <dd><span class="nombre-dato">INSTAGRAM: </span>https://www.instagram.com/bookshop_suc3</dd>
                <dt>Horario</dt>
                    <dd>Lunes a Sabados de 9hs a 20hs</dd>
            </dl>
        </section>
        <section id="foto">
            <img src="img/sucursal-3.jpg" alt="Foto Sucursal 3" width="400" height="300">
        </section>
    
        <section id="mapa">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.3251510500704!2d-57.94071542566311!3d-34.92338147284138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e61f7f68ed4f%3A0xe434ddb55963c0a6!2sAv.%207%201500%2C%20B1904CLO%20La%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1685101942681!5m2!1ses!2sar" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
    </div>`;

    let suc4 = `<br>
    <h2 class="title-sucursales">Sucursal 4</h2>
    <div class="principal-sucursal">
        <section class="datos">
            <dl>
                <dt>Dirección</dt>
                    <dd>Camino Parque Centenario y 508 - Gonnet</dd>
                    <dd>Buenos Aires</dd>
                    <dd>Argentina</dd>
                <dt>Datos de contacto</dt>
                    <dd><span class="nombre-dato">TELEFONO: </span>+54 (221) 598-1000</dd>
                    <dd><span class="nombre-dato">EMAIL: </span>sucursal4@bookshop.com.ar</dd>
                    <dd><span class="nombre-dato">FACEBOOK: </span>https://www.facebook.com/bookshop_suc4</dd>
                    <dd><span class="nombre-dato">INSTAGRAM: </span>https://www.instagram.com/bookshop_suc4</dd>
                <dt>Horario</dt>
                    <dd>Lunes a Viernes de 8hs a 12hs y de 16hs a 20hs</dd>
            </dl>
        </section>
        <section id="foto">
            <img src="img/sucursal-4.jpg" alt="Foto Sucursal 3" width="400" height="300">
        </section>
    
        <section id="mapa">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.8184697804163!2d-58.00492722566536!3d-34.88590447285433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e760b83a0669%3A0x728691d12e72bfee!2sC.%20508%20%26%20Cam.%20Parque%20Centenario%2C%20B1897%20Gonnet%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1685103587615!5m2!1ses!2sar" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
    </div>`;

    let suc5 = `<br>
    <h2 class="title-sucursales">Sucursal 5</h2>
    <div class="principal-sucursal">
        <section class="datos">
            <dl>
                <dt>Dirección</dt>
                    <dd>Calle Cantilo N° 500 - City Bell</dd>
                    <dd>Buenos Aires</dd>
                    <dd>Argentina</dd>
                <dt>Datos de contacto</dt>
                    <dd><span class="nombre-dato">TELEFONO: </span>+54 (221) 578-4444</dd>
                    <dd><span class="nombre-dato">EMAIL: </span>sucursal5@bookshop.com.ar</dd>
                    <dd><span class="nombre-dato">FACEBOOK: </span>https://www.facebook.com/bookshop_suc5</dd>
                    <dd><span class="nombre-dato">INSTAGRAM: </span>https://www.instagram.com/bookshop_suc5</dd>
                <dt>Horario</dt>
                    <dd>Lunes a Viernes de 10hs a 19hs</dd>
                    <dd>Sabados de 9hs a 13hs</dd>
            </dl>
        </section>
        <section id="foto">
            <img src="img/sucursal-5.jpg" alt="Foto Sucursal 2" width="400" height="300">
        </section>
    
        <section id="mapa">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.428189027117!2d-58.04814742566636!3d-34.87059257285978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2de7ba0c4b09f%3A0xd01ad54cdb718cea!2sC.%20Cantilo%20500%2C%20B1896%20City%20Bell%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1685104246554!5m2!1ses!2sar" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
    </div>`;

    document.querySelector(".main-sucursales").innerHTML="";
    switch (nsucursal) {
        case 1:
            document.querySelector(".main-sucursales").innerHTML=getSucursal(1);//suc1;
            break;
        case 2:
            document.querySelector(".main-sucursales").innerHTML=getSucursal(2);//suc2;
            break;
        case 3:
            document.querySelector(".main-sucursales").innerHTML=getSucursal(3);//suc3;
            break;
        case 4:
            document.querySelector(".main-sucursales").innerHTML=getSucursal(4);//suc4;
            break;
        case 5:
            document.querySelector(".main-sucursales").innerHTML=getSucursal(5);//suc5;
            break;
    }

/*if (nsucursal==1){
    document.querySelector(".main-sucursales").innerHTML="";
    document.querySelector(".main-sucursales").innerHTML=suc1;
} else if (nsucursal==2){
    document.querySelector(".main-sucursales").innerHTML=suc2;
}*/

})
function esSucursal(){
    if(document.getElementById('suc1').checked){
        return 1;
    }
    if(document.getElementById('suc2').checked){
        return 2;
    }
    if(document.getElementById('suc3').checked){
        return 3;
    }
    if(document.getElementById('suc4').checked){
        return 4;
    }
    if(document.getElementById('suc5').checked){
        return 5;
    }
}