import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './views/Login';
import RegistroEstudiante from './views/RegistroEstudiante';
import DatosAdicionales from './views/DatosAdicionales';
import ConfirmacionAdicionales from './views/ConfirmacionAdicionales';
import DashboardEmpresa from './views/DashboardEmpresa';
import RegistrarOportunidadPasantia from './views/RegistrarOportunidadPasantia';
import RegistrarEmpresa from './views/RegistrarEmpresa';
import VerificadorContrasena from './views/VerificadorContrasena';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<RegistroEstudiante />} />
        <Route path="/datos-adicionales" element={<DatosAdicionales />} />
        <Route path="/confirmacion" element={<ConfirmacionAdicionales />} />
        <Route path="/dashboard-empresa" element={<DashboardEmpresa />} />
        <Route path="/registrar-oportunidad-pasantia" element={<RegistrarOportunidadPasantia />} />
        <Route path="/registrar-empresa" element={<RegistrarEmpresa />} />
        <Route path="/verificador-contrasena" element={<VerificadorContrasena />} />
      </Routes>
    </Router>
  );
}

export default App;
