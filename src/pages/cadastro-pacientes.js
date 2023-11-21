import { useState } from 'react';
import styles from 'src/styles/style-main.module.css';

export default function CadastroPacientes() {
  const [paciente, setPaciente] = useState({
    nome: '',
    dataNascimento: '',
    endereco: '',
    contato: '',
    historicoMedico: '',
    medicacoes: '',
    informacoesEmergencia: ''
  });

  const handleChange = (e) => {
    setPaciente({ ...paciente, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3002/cadastro-pacientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paciente),
      });

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }
      
      const responseData = await response.json();
      console.log(responseData);
      alert('Paciente cadastrado com sucesso!');
    } catch (error) {
        console.error("Erro ao cadastrar paciente:", error);
        alert(`Erro ao cadastrar paciente: ${error.message}`);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Cadastro de Pacientes</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
      <input
          type="text"
          name="nome"
          value={paciente.nome}
          onChange={handleChange}
          placeholder="Nome Completo"
          required
          className={styles.inputField}
        />
        <input
          type="date"
          name="dataNascimento"
          value={paciente.dataNascimento}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="endereco"
          value={paciente.endereco}
          onChange={handleChange}
          placeholder="Endereço"
          required
        />
        <input
          type="text"
          name="contato"
          value={paciente.contato}
          onChange={handleChange}
          placeholder="Contato"
          required
        />
        <textarea
          name="historicoMedico"
          value={paciente.historicoMedico}
          onChange={handleChange}
          placeholder="Histórico Médico"
          className={styles.textAreaField}
        />
        <textarea
          name="medicacoes"
          value={paciente.medicacoes}
          onChange={handleChange}
          placeholder="Medicações Atuais"
        />
        <textarea
          name="informacoesEmergencia"
          value={paciente.informacoesEmergencia}
          onChange={handleChange}
          placeholder="Informações de Emergência"
        />        
        <button type="submit" className={styles.button}>Cadastrar</button>
      </form>
    </div>
  );
}