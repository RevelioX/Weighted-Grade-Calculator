export default function calcularPromedioPonderado(Datos){
    let acumulador = 0
    for(let i = 0; i<Datos.length; i++){
        acumulador = acumulador + Datos[i].value * (Datos[i].percentage / 100)
    }
    return acumulador;
}