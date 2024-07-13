'use client';

import { auth as firebaseAuth } from '../../shared/firebase/firebase-setup';
import { useQueryClient } from '@tanstack/react-query';
import {
  signOut as firebaseSignOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  User,
} from 'firebase/auth';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

export interface AuthClaims {
  companyId?: string;
  role?: 'superAdmin' | 'admin' | 'manager' | 'cashier';
}

interface AuthContextType extends AuthClaims {
  user: User | null;
  loading: boolean;
  signin: (params: { email: string; password: string }) => Promise<void>;
  signOut: () => Promise<void>;
  isManagementRole: boolean;
}

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const ctx = React.useContext(AuthContext);
  if (!ctx) {
    throw new Error('`useAuth` must be called under AuthProvider');
  }
  return ctx;
}

export default function AuthProvider({
  children,
}: React.PropsWithChildren<{}>) {
  const queryClient = useQueryClient();
  const [loading, setLoading] = React.useState(true);
  const [claims, setClaims] = React.useState<undefined | AuthClaims>(undefined);
  const pathname = usePathname();
  const router = useRouter();

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, async (user) => {
      let hasNoClaims = true;
      if (user) {
        // let _claims: AuthClaims | undefined = undefined;
        try {
          const { claims } = await user.getIdTokenResult();
          hasNoClaims = false;
          //@ts-ignore
          // _claims = claims;
          // window.electron.store.set(
          //   'companyId',
          //   (claims?.companyId as string | undefined) ?? ''
          // );
          setClaims(claims as any);
          // if pathname == login redirect to dashbaord
          if (pathname == '/login') {
            router.push('/dashboard');
          }
        } catch (error) {}
        // Don't put `configureScope` in try catch block
        // Sentry.configureScope((scope) => {
        //   scope.setUser({
        //     id: user.uid,
        //     email: user.email || undefined,
        //     segment: _claims?.companyId,
        //     username: user.displayName || undefined,
        //   });
        // });
      } else {
        // Invalidate all queries, so that when user login with another `companyId`,
        // they don't see the previous company data.
        queryClient.clear();
      }
      if (hasNoClaims) {
        setClaims({});
      }
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, [queryClient]);

  const signin: AuthContextType['signin'] = async (params) => {
    try {
      await signInWithEmailAndPassword(
        firebaseAuth,
        params.email,
        params.password
      );
      router.push('/dashboard');
    } catch (error) {
      throw error;
    }
  };
  const signOut: AuthContextType['signOut'] = async () => {
    await firebaseSignOut(firebaseAuth);
  };

  const user = firebaseAuth.currentUser;

  const value: AuthContextType = {
    user,
    ...claims,
    loading,
    signin,
    signOut: signOut,
    isManagementRole: claims?.role === 'admin' || claims?.role === 'manager',
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
