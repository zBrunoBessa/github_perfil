import { useState, useEffect } from "react"

const Formulario = () => {
    let [materiaA, setMateriaA] = useState(0);
    let [materiaB, setMateriaB] = useState(0);
    let [materiaC, setMateriaC] = useState(0);
    let [nome, setNome] = useState('');


    useEffect(() => {
        console.log('o estado iniciou')
        return() => {
            console.log('o estado finalizou')
        }   
        
    }, []);

    useEffect(() => {
        console.log('o estado nome mudou')
    }, [nome]);

    useEffect(() => {
        console.log('materia A mudou para : ' + materiaA);
    },[materiaA])

    const alteraNome = (evento) => {
        //console.log(evento.target.value)
        // s etNome(evento.target.value);
        setNome(estadoAnterior => {

            return evento.target.value;
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;



        if (media >= 7) {
            return (
                <p>Olá {nome}, foi aprovado</p>
            ) 
        }else {
            return(
                <p>Olá {nome}, Você não foi aprovado</p>
            )
            }
        
    }
    return(
        <form>
            <input type="text" placeholder="Seu nome" onChange={alteraNome}/>
            <input type="number" placeholder="Nota materia A" onChange={evento => setMateriaA(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota materia B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota materia C" onChange={evento => setMateriaC(parseInt(evento.target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario