import { useState } from "react"





export default function NuevaReceta() {
    const [tituloReceta, setTituloReceta] = useState("")
    const [ingredientes, setIngredientes] = useState([""])
    const [preparacion, setPreparacion] = useState([""])

    const recopilar = () => {
        const nuevaReceta = {}
        nuevaReceta.nombreReceta = tituloReceta;

        console.log("nueva receta: ", nuevaReceta)
    }

    const anadirInput = () => {

        return (
            <div>{preparacion.map(item => (
                <input value={""} placeholder="Preparacion" ></input>

            ))}</div>
        )
    }

    const agrandarHook = () => {
        preparacion.push("")
    }



    return (
        <div id="div-nueva-receta">
            <div id="nueva-receta">
                <h1>
                    Compartí tu receta!
                </h1>
                <div>
                    <p>Titulo de la receta</p>
                    <input className="input-nueva-receta" value={tituloReceta} onChange={(event) => { setTituloReceta(event.target.value) }} placeholder={"Título"}></input>
                    <p>Ingredientes</p>
                    <input className="input-nueva-receta" value={ingredientes} onChange={(event) => { setIngredientes(event.target.value) }} placeholder={"Ingredientes"}></input>
                    <p>Preparación</p>
                    {anadirInput()}
                    <button className="añadir-div" onClick={agrandarHook()}> +  </button><br /><br />

                    <button onClick={() => recopilar()}>Publicar!</button>
                </div>
            </div>
        </div>

    )
}


/*
en vez de poner el input de ingredientes tiene que haber una llamada a la funcion anadirIngredientes(), que cree divs a medida que se toque el boton + */