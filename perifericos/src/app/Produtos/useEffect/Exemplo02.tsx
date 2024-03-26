import { useState, useEffect } from "react";

const Exemplo02 = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (loading) {
            try {
                const response = await fetch('');
                const data = await response.json();
                setUsuarios(data);
            } catch (error) {
                console.error("Erro ao buscar dados da API:", error);
            } finally {
                setLoading(false);
            }
        }
    }
};

