// login.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/login.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    // Lógica de autenticação (você pode implementar sua própria lógica de autenticação aqui)
    
    // Após a autenticação bem-sucedida, redirecione para a página index.js
    router.push('/');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Aplicativo de Cuidados Médicos</h1>
      <form className={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.inputField}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.inputField}
        />
        <button
          type="button"
          onClick={handleLogin}
          className={styles.button}
        >
          Entrar
        </button>
      </form>
    </div>
  );
}