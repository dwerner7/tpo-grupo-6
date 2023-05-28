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
    <td  class="centrar">1</td>
    <td>${sucursal.ciudad}</td>
    <td>${sucursal.direccion}</td>
    <td>${sucursal.telefono}</td>
    <td>
        <!--<a href="sucursal${sucursal.id}.html">+ Info</a>-->
        <a href="sucursal.html" onclick="getSucursal(${sucursal.id})">+ Info</a>
    </td>
</tr>`;
}

suc += ` </table>
    </section>
    <section class="mapa-sucursales">
            <iframe src="${mapaSucursales}" width="480" height="360"></iframe>
            <!--<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1Gc56NLTblniRUVyaGsUV4Pb0CqMaAN4&ehbc=2E312F" width="640" height="480"></iframe>-->
    </section>`;

document.querySelector(".principal-sucursales").innerHTML=suc;

