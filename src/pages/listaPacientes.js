import { useEffect, useState } from 'react';
import styles from '../styles/listaPacientes.module.css'; // Importe seu arquivo CSS

export default function ListaPacientes() {
  const [pacientes, setPacientes] = useState([]);

  async function fetchPacientes() {
    try {
      const response = await fetch('http://localhost:3002/pacientes', {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }
      const pacientesData = await response.json();
      setPacientes(pacientesData);
    } catch (error) {
      console.error("Erro ao buscar pacientes:", error);
    }
  }

  useEffect(() => {
    fetchPacientes();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lista de Pacientes</h1>
      <ul className={styles.patientList}>
        {pacientes.map((paciente, index) => (
          <li key={index} className={styles.patientItem}>
            <strong>Nome:</strong> {paciente.nome}<br />
            <strong>Data de Nascimento:</strong> {paciente.dataNascimento}<br />
            <strong>Endereço:</strong> {paciente.endereco}<br />
            <strong>Contato:</strong> {paciente.contato}<br />
            <strong>Histórico Médico:</strong> {paciente.historicoMedico}<br />
            <strong>Medicações Atuais:</strong> {paciente.medicacoes}<br />
            <strong>Informações de Emergência:</strong> {paciente.informacoesEmergencia}
          </li>
        ))}
      </ul>
    </div>
  );
}