import { useState, useEffect } from "react";

const Exemplo01 = () += {
    const [tamanhoJanela, setTamanhoJanela] = useState({
        largura: window.innnerWidth,
        altura: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setTamanhoJanela({
                largura: window.innerWidth,
                altura: window.innerHeight,
            });

            window.addEventListener("resize", handleResize);
        
                return() => {
                window.addEventListener("resize", handleResize);
            };
        }, [];

        return (
            <div>
                <h2>Redimensionamento da Jabnela</h2>
                <p>
                    Largura da Janela: {tamanhoJanela.largura}px, Altura da Janela: {tamanhoJanela.altura}px
                </p>
            </div>
        );
    
            export default Exemplo01;
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
        };  
};