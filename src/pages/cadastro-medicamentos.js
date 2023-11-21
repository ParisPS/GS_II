import { useState } from 'react';
import styles from 'src/styles/style-main.module.css';

export default function CadastroMedicamentos() {
    // Estado para armazenar os dados do medicamento a ser cadastrado
  const [medicamento, setMedicamento] = useState({
    paciente: '',
    nome: '',
    dosagem: '',
    horario: '',
    quantidade: ''
  });

    // Função para lidar com a mudança nos campos do formulário
  const handleChange = (e) => {
    // Atualiza o estado do medicamento com os valores inseridos nos campos do formulário
    setMedicamento({ ...medicamento, [e.target.name]: e.target.value });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    // Previne o comportamento padrão de envio do formulário
    e.preventDefault();
  
    try {
      // Realiza uma requisição POST para cadastrar o medicamento no servidor
      const response = await fetch('http://localhost:3002/medicamentos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(medicamento),
      });
  
      // Verifica se a requisição foi bem-sucedida
      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }
  
      const responseData = await response.json();
      console.log(responseData);
      // Exibe um alerta informando que o medicamento foi cadastrado com sucesso
      alert('Medicamento cadastrado com sucesso!');
    } catch (error) {
       // Exibe um erro no console se ocorrer algum problema no cadastro do medicamento
      console.error("Erro ao cadastrar medicamento:", error);
      // Exibe um alerta informando o erro ocorrido
      alert(`Erro ao cadastrar medicamento: ${error.message}`);
    }
  };

    // Renderização do componente
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Cadastro de Medicamentos</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.labelField}>Paciente</label>
        <input
          type="text"
          name="paciente"
          value={medicamento.paciente}
          onChange={handleChange}
          required
          className={styles.inputField}
        />
        <label className={styles.labelField}>Nome do Medicamento</label>
        <input
          type="text"
          name="nome"
          value={medicamento.nome}
          onChange={handleChange}
          required
          className={styles.inputField}
        />
        <label className={styles.labelField}>Dosagem</label>
        <input
          type="text"
          name="dosagem"
          value={medicamento.dosagem}
          onChange={handleChange}
          required
          className={styles.inputField}
        />
        <label className={styles.labelField}>Horário</label>
        <input
          type="time"
          name="horario"
          value={medicamento.horario}
          onChange={handleChange}
          required
          className={styles.inputField}
        />
        <label className={styles.labelField}>Quantidade(dias)</label>
        <input
          type="number"
          name="quantidade"
          value={medicamento.quantidade}
          onChange={handleChange}
          required
          className={styles.inputField}
        />
        <button type="submit" className={styles.button}>Cadastrar</button>
      </form>
    </div>
  );
}