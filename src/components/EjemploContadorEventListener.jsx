import { useEffect, useState } from "react"


const EjemploContadorEventListener = () => {
    const [contador, setContador] = useState(1)

    const handleClickButton = () => {
        setContador((prevContador)=>prevContador + 1)
    }

    useEffect(()=>{
        let botonSumar = document.getElementById("botonSumar")

        botonSumar.addEventListener("click", handleClickButton)

        return () => {
            botonSumar.removeEventListener("click", handleClickButton)
        }
    }, [])

  return (
    <div>
      <p>{contador}</p>
      <button id="botonSumar">+</button>
    </div>
  )
}

export default EjemploContadorEventListener
