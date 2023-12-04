import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Formulario = ({ agregarColaborador }) => {
    
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [edad, setEdad] = useState('');
    const [cargo, setCargo] = useState('');
    const [telefono, setTelefono] = useState('');

    
    const [error, setError] = useState(null)

    
    const handleSubmit = (e) => {
        e.preventDefault();

    
        if (!nombre || !correo || !edad || !cargo || !telefono) {
            alert('Todos los campos son obligatorios');
            setError("Todos los campos son obligatorios")
            return;
        }

        
    const nuevoColaborador = { nombre, correo, edad, cargo, telefono };

    
        agregarColaborador(nuevoColaborador);

        
        setNombre('');
        setCorreo('');
        setEdad('');
        setCargo('');
        setTelefono('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <input 
                type="email"
                placeholder="Correo"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
            />
            <input 
                type="text"
                placeholder="Edad"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
            />
            <input 
                type="text"
                placeholder="Cargo"
                value={cargo}
                onChange={(e) => setCargo(e.target.value)}
            />
            <input 
                type="text"
                placeholder="Teléfono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">Agregar Colaborador</button>
        </form>
    );
};

export default Formulario;