import { useState } from "react";

function App(){
    const [ aluno, setAluno] = useState<string>("");

    return(
        <>
            <h1> Exemplo01</h1>
            <p>
                <b>Aluno: </b> {aluno}
            </p>
            <button onClick={() => setAluno("José")}>Clique aqui!</button>
        </>
    );
}