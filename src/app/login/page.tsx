'use client';

import { useAuth } from '../../module/auth/AuthProvider';
import styles from './page.module.css';
import LoginForm from '@/components/LoginForm';

export default function Home() {
  const { signin } = useAuth();

  return (
    <main className={styles.main}>
      <LoginForm signin={signin} />
    </main>
  );
}
