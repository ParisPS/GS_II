import React, { useEffect, useState } from 'react';
import styles from '../styles/listaMedicamentos.module.css';

export default function ListaMedicamentos() {
  // Estado para armazenar a lista de medicamentos
  const [medicamentos, setMedicamentos] = useState([]);

  // Efeito colateral para buscar medicamentos quando o componente é montado
  useEffect(() => {
    fetchMedicamentos();
  }, []);

  // Função assíncrona para buscar medicamentos do servidor
  async function fetchMedicamentos() {
    try {
      // Realiza uma requisição para obter a lista de medicamentos do servidor
      const response = await fetch('http://localhost:3002/medicamentos');

      // Verifica se a requisição foi bem-sucedida
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

  // Renderização do componente
  return (
    <div className={styles.listaMedicamentos}>
      <h1 className={styles.title}>Lista de Medicamentos</h1>
      {/* Mapeia a lista de medicamentos e renderiza cada um */}
      <ul className={styles.list}>
        {medicamentos.map((medicamento, index) => (
          <li key={index} className={styles.listItem}>
            {/* Exibe informações do medicamento */}
            <strong>Paciente:</strong> {medicamento.paciente}<br />
            <strong>Nome do Medicamento:</strong> {medicamento.nome}<br />
            <strong>Dosagem:</strong> {medicamento.dosagem}<br />
            <strong>Horário:</strong> {medicamento.horario}<br />
            <strong>Quantidade(dias):</strong> {medicamento.quantidade}<br />
          </li>
        ))}
      </ul>
    </div>
  );
}