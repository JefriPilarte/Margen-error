iniciar = () => {

let resultados = document.getElementById('resultados');
resultados.innerHTML = "";

let numPaquetes = Number(document.getElementById('paquetes').value);
let numPiezas = Number(document.getElementById('piezas').value);
let probError = Number(document.getElementById('error').value);

let contPaquetes = 0;
let eTotales = 0;

let contenedor = document.getElementById('contenedorResultaos');

comprobarDefecto = () => Math.random() < probError;

    for(let i = 0; i < numPaquetes; i++){

        contPaquetes++
        let numErrores = 0;

        resultados.innerHTML = resultados.innerHTML + `Fabricacion numero ${contPaquetes} Iniciada` + `<br>`;

        for (let i = 1; i <= numPiezas; i++) {
            const defectuosa = comprobarDefecto();
        
            try {
                if(defectuosa) throw `Pieza ${i} <font color="red">DEFECTUOSA</font>`;
            } catch (error) {
                resultados.innerHTML = resultados.innerHTML + error + `<br>`;
                numErrores++
                eTotales++
            }
        
            resultados.innerHTML = resultados.innerHTML + `Pieza ${i} <font color="green">FABRICADA</font>` + `<br>`;
        }

        if (numErrores == 0) {
            resultados.innerHTML = resultados.innerHTML + `Fabricacion numero ${contPaquetes} Completada` + `<br>` + `<font color="green">SIN PIEZAS DEFECTUOSAS</font>` + `<br>` + `<br>`;
        } else {
            resultados.innerHTML = resultados.innerHTML + `Fabricacion numero ${contPaquetes} Completada` + `<br>` + `<font color="red">PIEZAS DEFECTUOSAS: ${numErrores}</font>` + `<br>` + `<br>`;
        }

    }

    if (eTotales == 0) {
        resultados.innerHTML = resultados.innerHTML + `<br>` + `Fabricacion completada <font color="green">SIN ERRORES</font>` + `<br>` + `<br>`;
    } else {
        resultados.innerHTML = resultados.innerHTML + `<br>` + `Produccion completada` + `<br>` +  `<font color="red">TOTAL DE PIEZAS DEFECTUOSAS: ${eTotales}</font>` + `<br>` + `<br>`;
    }

contenedor.scrollTop = contenedor.scrollHeight;

}