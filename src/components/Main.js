import react from "react";
import Entradas from "./Entradas.js"
import Final from "./Final.js"
import calcularPromedioPonderado from "../calcularPromedioPonedrado.js";
import Error from "./Error.js";

export default function Main(){
    const [Datos, setDatos] = react.useState([{
        value: "",
        percentage: "",
        key:  Date.now()
    }])
    const [isWriting,setIsWriting] = react.useState(true);
    const [completed,setCompleted] = react.useState(false);
    const [errorText, setErrorText] = react.useState("");

    react.useEffect(() => {
        let isComplete = true;
        console.table(Datos)
        for(let i=0; i<Datos.length; i++){
            if(Datos[i].value == ""  || Datos[i].percentage == ""){
                console.log("Cai",Datos[i].value,Datos[i].percentage)
                isComplete = false;
            }
        }
        if(isComplete === true){
            setCompleted(true);
        }else{
            setCompleted(false);
        }
    },[isWriting])

    const displayedEntradas = Datos.map( dato => {
        return <Entradas setIsWriting={setIsWriting} Datos={Datos} crearNuevoCampo={crearNuevoCampo} setDatos={setDatos} id={dato.key}/>
    })


    function crearNuevoCampo(){
        setDatos( (datos) => {
            return[ ...datos, {
                value: "",
                percentage: "",
                key: Date.now()
            }]
        })
    }

    const [final, setFinal] = react.useState(0);

    function calcularFinal(){
        setErrorText("");
        
        if(completed){
            setFinal(calcularPromedioPonderado(Datos));
        }else{
            setErrorText( error => error + "-Hay campos vacios");
        }

        let sumaPorcentages = 0
        for (let i=0; i<Datos.length;  i++){
            sumaPorcentages = sumaPorcentages + parseInt(Datos[i].percentage)
        }

        if(sumaPorcentages !== 100){
            setErrorText(error => error + "\t-La suma de porcentajes debe ser 100%")
        }
    }

    return(
        <div className="main">
            <p>Calculadora Ponderada</p>
            <form>
                {displayedEntradas}
            </form>
            <input className="calcular" type="button" value="Calcular" onClick={calcularFinal}></input>
            {!errorText && final!=0 ? <Final final={final}/> : ""}
            {errorText && <Error error={errorText}/>}
        </div>
    )
}

