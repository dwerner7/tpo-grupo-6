 let suc = `<section class="tabla-sucursales">
 <table>
     <tr>
         <th>
             Suc.
         </th>
         <th>
             Localidad
         </th>
         <th>
             Dirección
         </th>
         <th>
             Teléfono
         </th>
         <th>
             
         </th>
     </tr>`;

for(const sucursal of sucursales){
    suc+=`<tr>
    <td  class="centrar">${sucursal.id}</td>
    <td>${sucursal.ciudad}</td>
    <td>${sucursal.direccion}</td>
    <td>${sucursal.telefono}</td>
    <td>
        <input type="radio" name="suc" value="${sucursal.id}" id="suc${sucursal.id}" class="col-radio" >
        <!--<a href="sucursal${sucursal.id}.html">+ Info</a>-->
        <!--<a href="sucursal.html" onclick="getSucursal(${sucursal.id})" >+ Info</a>-->
       <!-- <a href="sucursal.html" onclick="getSucursal()" class="sucursalMasInfo" id="${sucursal.id}">+ Info</a>-->
       <!--<input type="radio" name="suc" value="${sucursal.id}" id="suc${sucursal.id}">-->
    </td>
</tr>`;
}



const infoBtn = `
                    <tr class="noborder">
                        <td colspan="5" class="noborder">
                            <button class="boton" type="button" id="enviar_datos">Más Informacion</button>
                        </td>
                    </tr>
`
suc += infoBtn + ` </table>
    </section>`
    
const mapaSuc = `
    <section class="mapa-sucursales">
            <iframe src="${mapaSucursales}" width="480" height="360"></iframe>
            <!--<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1Gc56NLTblniRUVyaGsUV4Pb0CqMaAN4&ehbc=2E312F" width="640" height="480"></iframe>-->
    </section>`;

suc += mapaSuc;

// suc += mapaSuc;

console.log(suc);

document.querySelector(".principal-sucursales").innerHTML=suc;

