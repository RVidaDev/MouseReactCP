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

    const [FormData, setFormData]d = useState<FormData>(initialFormState);
    const [submitteData, setSubmittedData] = useState<FormData | null>(null);


    const handleInputChange = (e: React.ChangeEvent<HTML InputElement>) => {
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
                    <input type="text" name="name" value={FormDataEvent.name} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    E-mail:
                    <input type="email" name="email" value={FormDataEvent.email} onChange={handleInputChange} />
                </label>
                <br />
                <button type="submit">Enviar</button>
            </form>
            {submittedData && (
                <div>
                    <p><b>Dados do formulário:</b></p>
                    <p>Nome: {submittedData.name}</p>
                    <p>E-mail: {submittedData.email}</p>
                </div>
            )}
        </>
    );

    export default Exemplo02;
            






}