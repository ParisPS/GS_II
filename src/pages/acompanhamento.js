import { useEffect, useState } from 'react';
import styles from '../styles/acompanhamento.module.css';

export default function Acompanhamento() {
    // Estado para armazenar a lista de medicamentos
  const [medicamentos, setMedicamentos] = useState([]);

  // Efeito colateral para buscar medicamentos quando o componente é montado
  useEffect(() => {
    fetchMedicamentos();
  }, []);

  // Função assíncrona para buscar medicamentos do servidor
  async function fetchMedicamentos() {
    try {
      // Substitua a URL abaixo pela URL correta do seu servidor
      const response = await fetch('http://localhost:3002/medicamentos');

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }
      
      // Parse da resposta para obter os dados dos medicamentos
      const medicamentosData = await response.json();
      // Atualiza o estado com os medicamentos obtidos
      setMedicamentos(medicamentosData);
    } catch (error) {
      // Exibe um erro no console se ocorrer algum problema na busca dos medicamentos
      console.error("Erro ao buscar medicamentos:", error);
    }
  }

  // Função para lidar com a administração de um medicamento
  const handleAdministrarMedicamento = (medicamento) => {
    // Adicione a lógica para notificar a administração do medicamento aqui
    alert(`Administrar ${medicamento.nome}`);
  };

  // Renderização do componente
  return (
    <div className={styles.acompanhamento}>
      <h1 className={styles.title}>Acompanhamento da Administração de Medicamentos</h1>
      <ul className={styles.list}>
        {medicamentos.map((medicamento, index) => (
          <li key={index} className={styles.listItem}>
            <strong>Nome do Paciente:</strong> {medicamento.paciente}<br />
            <strong>Nome do Medicamento:</strong> {medicamento.nome}<br />
            <strong>Dosagem:</strong> {medicamento.dosagem}<br />
            <strong>Horário:</strong> {medicamento.horario}<br />
            <strong>Quantidade(dias):</strong> {medicamento.quantidade}<br />
            <button onClick={() => handleAdministrarMedicamento(medicamento)}>Administrar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}