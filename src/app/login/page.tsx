'use client';

import LoginForm from '@/components/LoginForm';

import { useAuth } from '../../module/auth/AuthProvider';
import styles from './page.module.css';

export default function Home() {
  const { signin } = useAuth();

  return (
    <main className={styles.main}>
      <LoginForm signin={signin} />
    </main>
  );
}
