import Link from 'next/link';
import styles from '../styles/index.module.css'; // Certifique-se de importar seu arquivo CSS

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Aplicativo de Cuidados Médicos</h1>
      <nav className={styles.nav}>
        <Link href="/cadastro-pacientes" className={styles.link}>
          Cadastro de Pacientes
        </Link>
        <Link href="/cadastro-medicamentos" className={styles.link}>
          Cadastro de Medicamentos
        </Link>
        <Link href="/acompanhamento" className={styles.link}>
          Acompanhamento
        </Link>
        <Link href="/listaPacientes" className={styles.link}>
          Ver Lista de Pacientes
        </Link>
        <Link href="/listaMedicamentos" className={styles.link}>
          Ver Lista de Medicamentos
        </Link>
        <div className={styles.signInButton}> {/* Aplicando a classe de estilo ao botão */}
          <Link href="/loginMedico">Sign In</Link>
        </div>
      </nav>
    </div>
  );
}