const express = require('express');
const cors = require('cors');
const app = express();
const port = 3002;

app.use(cors());
app.use(express.json());

const pacientes = []; // Array para armazenar os pacientes cadastrados
const medicamentos = []; // Array para armazenar os medicamentos cadastrados

// Endpoint POST para cadastrar pacientes
app.post('/cadastro-pacientes', (req, res) => {
    const paciente = req.body;
    pacientes.push(paciente);
    console.log('Paciente cadastrado:', paciente);
    res.status(201).json({ message: 'Paciente cadastrado com sucesso!', paciente });
});

// Endpoint para cadastro de medicamentos
app.post('/medicamentos', (req, res) => {
    const medicamento = req.body;
    medicamentos.push(medicamento);
  
    console.log('Medicamentos cadastrados:', medicamentos);
  
    res.status(201).json({ message: 'Medicamento cadastrado com sucesso!', medicamento });
  });

// Endpoint GET para listar pacientes
app.get('/pacientes', (req, res) => {
    res.json(pacientes);
});

// Endpoint para obter a lista de medicamentos
app.get('/medicamentos', (req, res) => {
    res.json(medicamentos);
  });

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});