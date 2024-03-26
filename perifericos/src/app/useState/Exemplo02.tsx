import React, { useState } from 'react';

interface FormData {
    Nome: string;
    Email: string;
}

const Exemplo02: React.FC = () => {

    const initialFormState: FormData = {
        Nome: '',
        Email: '',
    };

    const [formData, setFormData] = useState<FormData>(initialFormState);
    const [submittedData, setSubmittedData] = useState<FormData | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setSubmittedData({ ...formData });

        setFormData(initialFormState);
    };

    return(
        <>
            <h1>Exemplo02</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" name="Nome" value={formData.Nome} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    E-mail:
                    <input type="email" name="Email" value={formData.Email} onChange={handleInputChange} />
                </label>
                <br />
                <button type="submit">Enviar</button>
            </form>
            {submittedData && (
                <div>
                    <p><b>Dados do formulário:</b></p>
                    <p>Nome: {submittedData.Nome}</p>
                    <p>E-mail: {submittedData.Email}</p>
                </div>
            )}
        </>
    );
}

export default Exemplo02;
