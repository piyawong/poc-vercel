'use client';

import { useAuth } from '@/module/auth/AuthProvider';
import PrivateRoute from '@/module/auth/PrivateRoute';

import Dashboard from './dashboard';

export default function Home() {
  const { signOut } = useAuth();
  return (
    <main>
      <PrivateRoute>
        <Dashboard signOut={signOut} />
      </PrivateRoute>
    </main>
  );
}
