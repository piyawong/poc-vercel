'use client';

import { CssVarsProvider } from '@mui/joy/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import {
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID,
} from '@mui/material/styles';

import theme, { materialTheme } from './theme';

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <MaterialCssVarsProvider theme={{ [THEME_ID]: materialTheme }}>
        <CssVarsProvider theme={theme}>{children}</CssVarsProvider>
      </MaterialCssVarsProvider>
    </AppRouterCacheProvider>
  );
}
