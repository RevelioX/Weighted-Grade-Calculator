import react from "react";

export default function Entradas({setIsWriting, Datos, crearNuevoCampo, setDatos, id}){

    function eliminarElemento(){
        setDatos(datos => {
            return datos.filter( dato => dato.key !== id)
        })
    }

    function ActualizarDatos(e){
        const {name, value} = e.target
        console.log(name, value)
        setDatos( datos => {
            const a = datos.findIndex( dato => dato.key == id)
            if(name == "value"){
                datos[a].value = value;
            }
            if(name == "percentage"){
                datos[a].percentage = value;
            }
            return datos;
        })
    }

    const number = Datos.findIndex( dato => dato.key == id)
    console.log(Datos[number].value);

    let valorcete
    let porcentete

    react.useEffect(() => {
        valorcete = Datos[number].value;
        porcentete = Datos[number].value;
    },[Datos])

    return(
        <div className="entradas">
            <input value={valorcete} onChange={ (e ) => {setIsWriting(a => !a); ActualizarDatos(e)}} className="value" name="value" type="number" placeholder="Value"></input>
            <input value={porcentete} onChange={ ( e) => {setIsWriting(a => !a); ActualizarDatos(e)}} className ="percentage" name="percentage" type="number" placeholder="Percentage"></input>
            <div className="buttons">
                {Datos.length !== 1 && <p className="delete" onClick={ (e) => {eliminarElemento(e); setIsWriting(a => !a)}}><i class="tiny material-icons">close</i></p>}
                {id === Datos[Datos.length -1].key && <p className="create" onClick={(e) => {crearNuevoCampo(e); setIsWriting(a => !a)}}><i class="tiny material-icons">add</i></p>}
            </div>
        </div>
    )
}