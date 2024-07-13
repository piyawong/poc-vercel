'use client';

import type {} from '@mui/material/themeCssVarsAugmentation';
import type {} from '@mui/material/SvgIcon';

import colors from '@mui/joy/colors';
import { extendTheme, FontSize, type PaletteRange } from '@mui/joy/styles';
import { experimental_extendTheme as extendMaterialTheme } from '@mui/material/styles';

import type {} from '@mui/joy/Button';

// extends Joy theme to include tokens from Material UI
declare module '@mui/joy/styles' {
  interface TypographySystemOverrides {
    dialogTitle: true;
    // legacy Joy alpha
    display1: true;
    display2: true;
    h5: true;
    h6: true;
    body1: true;
    body2: true;
    body3: true;
    body4: true;
    body5: true;
  }

  interface ColorPalettePropOverrides {
    // legacy Joy alpha
    // apply to all Joy UI components that support `color` prop
    info: true;
  }

  interface Palette {
    // legacy Joy alpha
    // this will make the node `info` configurable in `extendTheme`
    // and add `info` to the theme's palette.
    info: PaletteRange;
  }

  interface FontSizeOverrides {
    // legacy Joy alpha
    xl7: true;
    xl6: true;
    xl5: true;
    xs2: true;
    xs3: true;
  }

  interface FontWeightOverrides {
    // legacy Joy alpha
    xs: true;
    xl2: true;
    xl3: true;
  }
}

// legacy Joy alpha
const purple = {
  50: '#FDF7FF',
  100: '#F4EAFF',
  200: '#E1CBFF',
  300: '#C69EFF',
  400: '#A374F9',
  500: '#814DDE',
  600: '#5F35AE',
  700: '#452382',
  800: '#301761',
  900: '#1D0A42',
};

// legacy Joy alpha
const info = purple;

export const materialTheme = extendMaterialTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#0284c7',
        },
        grey: colors.grey,
        error: {
          main: '#dc2626',
        },
        info: {
          main: purple[500],
        },
        success: {
          main: '#059669',
        },
        warning: {
          main: '#facc15',
        },
        common: {
          white: '#FFF',
          black: '#09090D',
        },
        divider: '#cbd5e1',
        text: {
          primary: colors.grey[800],
          secondary: colors.grey[600],
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#0284c7',
        },
        grey: colors.grey,
        error: {
          main: '#dc2626',
        },
        info: {
          main: purple[500],
        },
        success: {
          main: '#059669',
        },
        warning: {
          main: '#facc15',
        },
        common: {
          white: '#FFF',
          black: '#09090D',
        },
        divider: colors.grey[800],
        text: {
          primary: colors.grey[100],
          secondary: colors.grey[300],
        },
      },
    },
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: ({ ownerState, theme }) => {
          // @ts-ignore
          const palette = theme.vars.palette[ownerState.color];
          return {
            ...(ownerState.fontSize &&
              ownerState.fontSize !== 'inherit' && {
                fontSize: `var(--Icon-fontSize, var(--joy-fontSize-${ownerState.fontSize}))`,
              }),
            color: `var(--Icon-color, ${palette ? palette.main : 'inherit'})`,
            margin: 'var(--Icon-margin)',
          };
        },
      },
    },
    MuiStack: {
      defaultProps: {
        useFlexGap: true,
      },
    },
  },
});

declare module '@mui/joy/Button' {
  interface ButtonPropsSizeOverrides {
    xl: true;
  }

  interface ButtonPropsVariantOverrides {
    crumb: true;
  }
}

declare module '@mui/material/SvgIcon' {
  interface SvgIconPropsSizeOverrides extends Record<keyof FontSize, true> {
    small: false;
    medium: false;
    large: false;
  }

  interface SvgIconPropsColorOverrides {
    danger: true;
    neutral: true;
  }
}

// Create a theme instance.
const scrappyTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          '50': '#f0f9ff',
          '100': '#e0f2fe',
          '200': '#bae6fd',
          '300': '#7dd3fc',
          '400': '#38bdf8',
          '500': '#0ea5e9',
          '600': '#0284c7',
          '700': '#0369a1',
          '800': '#075985',
          '900': '#0c4a6e',
          solidBg: 'var(--joy-palette-primary-600)',
          softBg: 'var(--joy-palette-primary-200)',
          softColor: 'var(--joy-palette-primary-900)',
        },
        danger: {
          '50': '#fef2f2',
          '100': '#fee2e2',
          '200': '#fecaca',
          '300': '#fca5a5',
          '400': '#f87171',
          '500': '#ef4444',
          '600': '#dc2626',
          '700': '#b91c1c',
          '800': '#991b1b',
          '900': '#7f1d1d',
          solidBg: 'var(--joy-palette-danger-600)',
          softBg: 'var(--joy-palette-danger-200)',
          softColor: 'var(--joy-palette-danger-900)',
        },
        success: {
          '50': '#ecfdf5',
          '100': '#d1fae5',
          '200': '#a7f3d0',
          '300': '#6ee7b7',
          '400': '#34d399',
          '500': '#10b981',
          '600': '#059669',
          '700': '#047857',
          '800': '#065f46',
          '900': '#064e3b',
          solidBg: 'var(--joy-palette-success-600)',
          softBg: 'var(--joy-palette-success-200)',
          softColor: 'var(--joy-palette-success-900)',
        },
        warning: {
          '50': '#fefce8',
          '100': '#fef9c3',
          '200': '#fef08a',
          '300': '#fde047',
          '400': '#facc15',
          '500': '#eab308',
          '600': '#ca8a04',
          '700': '#a16207',
          '800': '#854d0e',
          '900': '#713f12',
          solidBg: 'var(--joy-palette-warning-400)',
          solidColor: '#000',
          softBg: 'var(--joy-palette-warning-100)',
          softColor: 'var(--joy-palette-warning-800)',
        },
        neutral: {
          '50': '#f8fafc',
          '100': '#f1f5f9',
          '200': '#e2e8f0',
          '300': '#cbd5e1',
          '400': '#94a3b8',
          '500': '#64748b',
          '600': '#475569',
          '700': '#334155',
          '800': '#1e293b',
          '900': '#0f172a',
          solidBg: 'var(--joy-palette-neutral-800)',
          solidDisabledBg: 'var(--joy-palette-neutral-500)',
          solidDisabledColor: 'var(--joy-palette-neutral-300)',
          softBg: 'var(--joy-palette-neutral-300)',
          softColor: 'var(--joy-palette-neutral-900)',
          softDisabledBg: 'var(--joy-palette-neutral-300)',
          softDisabledColor: 'var(--joy-palette-neutral-500)',
          outlinedBorder: 'var(--joy-palette-neutral-300)',
          outlinedColor: 'var(--joy-palette-neutral-900)',
          outlinedBg: '#fff',
          outlinedDisabledBg: 'var(--joy-palette-neutral-200)',
          outlinedDisabledBorder: 'var(--joy-palette-neutral-300)',
          outlinedDisabledColor: 'var(--joy-palette-neutral-400)',
        },
        info: {
          ...info,
          plainColor: `var(--joy-palette-info-600)`,
          plainHoverBg: `var(--joy-palette-info-100)`,
          plainActiveBg: `var(--joy-palette-info-200)`,
          plainDisabledColor: `var(--joy-palette-info-200)`,
          outlinedColor: `var(--joy-palette-info-500)`,
          outlinedBorder: `var(--joy-palette-info-200)`,
          outlinedHoverBg: `var(--joy-palette-info-100)`,
          outlinedHoverBorder: `var(--joy-palette-info-300)`,
          outlinedActiveBg: `var(--joy-palette-info-200)`,
          outlinedDisabledColor: `var(--joy-palette-info-100)`,
          outlinedDisabledBorder: `var(--joy-palette-info-100)`,
          softColor: `var(--joy-palette-info-600)`,
          softBg: `var(--joy-palette-info-100)`,
          softHoverBg: `var(--joy-palette-info-200)`,
          softActiveBg: `var(--joy-palette-info-300)`,
          softDisabledColor: `var(--joy-palette-info-300)`,
          softDisabledBg: `var(--joy-paletteinfo}-50)`,
          solidColor: '#fff',
          solidBg: `var(--joy-palette-info-500)`,
          solidHoverBg: `var(--joy-palette-info-600)`,
          solidActiveBg: `var(--joy-palette-info-700)`,
          solidDisabledColor: `#fff`,
          solidDisabledBg: `var(--joy-palette-info-200)`,
        },
        background: {
          body: 'var(--joy-palette-neutral-50)',
          surface: 'var(--joy-palette-common-white)',
        },
        text: {
          icon: 'var(--joy-palette-neutral-600)',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          '50': '#f0f9ff',
          '100': '#e0f2fe',
          '200': '#bae6fd',
          '300': '#7dd3fc',
          '400': '#38bdf8',
          '500': '#0ea5e9',
          '600': '#0284c7',
          '700': '#0369a1',
          '800': '#075985',
          '900': '#0c4a6e',
        },
        danger: {
          '50': '#fef2f2',
          '100': '#fee2e2',
          '200': '#fecaca',
          '300': '#fca5a5',
          '400': '#f87171',
          '500': '#ef4444',
          '600': '#dc2626',
          '700': '#b91c1c',
          '800': '#991b1b',
          '900': '#7f1d1d',
        },
        success: {
          '50': '#ecfdf5',
          '100': '#d1fae5',
          '200': '#a7f3d0',
          '300': '#6ee7b7',
          '400': '#34d399',
          '500': '#10b981',
          '600': '#059669',
          '700': '#047857',
          '800': '#065f46',
          '900': '#064e3b',
        },
        warning: {
          '50': '#fefce8',
          '100': '#fef9c3',
          '200': '#fef08a',
          '300': '#fde047',
          '400': '#facc15',
          '500': '#eab308',
          '600': '#ca8a04',
          '700': '#a16207',
          '800': '#854d0e',
          '900': '#713f12',
        },
        neutral: {
          '50': '#f8fafc',
          '100': '#f1f5f9',
          '200': '#e2e8f0',
          '300': '#cbd5e1',
          '400': '#94a3b8',
          '500': '#64748b',
          '600': '#475569',
          '700': '#334155',
          '800': '#1e293b',
          '900': '#0f172a',
          outlinedBg: 'var(--joy-palette-neutral-900)',
        },
        info: {
          ...info,
          plainColor: `var(--joy-palette-info-300)`,
          plainHoverBg: `var(--joy-palette-info-800)`,
          plainActiveBg: `var(--joy-palette-info-700)`,
          plainDisabledColor: `var(--joy-palette-info-800)`,
          outlinedColor: `var(--joy-palette-info-200)`,
          outlinedBorder: `var(--joy-palette-info-700)`,
          outlinedHoverBg: `var(--joy-palette-info-800)`,
          outlinedHoverBorder: `var(--joy-palette-info-600)`,
          outlinedActiveBg: `var(--joy-palette-info-900)`,
          outlinedDisabledColor: `var(--joy-palette-info-800)`,
          outlinedDisabledBorder: `var(--joy-palette-info-800)`,
          softColor: `var(--joy-palette-info-200)`,
          softBg: `var(--joy-palette-info-900)`,
          softHoverBg: `var(--joy-palette-info-800)`,
          softActiveBg: `var(--joy-palette-info-700)`,
          softDisabledColor: `var(--joy-palette-info-800)`,
          softDisabledBg: `var(--joy-palette-info-900)`,
          solidColor: `#fff`,
          solidBg: `var(--joy-palette-info-600)`,
          solidHoverBg: `var(--joy-palette-info-700)`,
          solidActiveBg: `var(--joy-palette-info-800)`,
          solidDisabledColor: `var(--joy-palette-info-700)`,
          solidDisabledBg: `var(--joy-palette-info-900)`,
        },
      },
    },
  },
  fontFamily: {
    display: "'Sarabun', var(--joy-fontFamily-fallback)",
    body: "'Sarabun', var(--joy-fontFamily-fallback)",
  },
  fontSize: {
    // legacy Joy alpha
    xl7: '4.5rem',
    xl6: '3.75rem',
    xl5: '3rem',
    xs2: '0.625rem',
    xs3: '0.5rem',
  },
  fontWeight: {
    md: '500',
    lg: '700',
    // legacy Joy alpha
    xs: '200',
    xl2: '800',
    xl3: '900',
  },
  typography: {
    dialogTitle: {
      fontSize: 'var(--joy-fontSize-xl2)',
      fontWeight: 'var(--joy-fontWeight-xl)',
      lineHeight: 1.4,
    },
  },
  components: {
    JoyContainer: {
      defaultProps: {
        maxWidth: 'xl',
      },
      styleOverrides: {
        root: ({ theme }) => ({
          [theme.breakpoints.up('xl')]: {
            maxWidth: 1728,
          },
        }),
      },
    },
    JoyButton: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          fontWeight: 700,
          ...(ownerState.size === 'xl' && {
            '--Icon-fontSize': '1.75rem',
            '--Button-gap': '0.5rem',
            minHeight: 'var(--Button-minHeight, 4rem)',
            fontSize: theme.vars.fontSize.xl,
            fontWeight: theme.vars.fontWeight.lg,
            paddingBlock: '0.5rem',
            paddingInline: '1rem',
            lineHeight: '1.4',
          }),
          ...(ownerState.variant !== 'crumb' && {
            '&:hover:not(:active)': {
              '@media (hover: none)': {
                backgroundColor:
                  theme.variants[ownerState.variant!]?.[ownerState.color!]
                    ?.backgroundColor,
              },
            },
          }),
          ...(ownerState.variant === 'crumb' && {
            ...theme.variants.outlined.neutral,
            '&:hover': theme.variants.outlinedHover.neutral,
            '&:active': theme.variants.outlinedActive.neutral,
            borderRadius: '2rem',
            backgroundColor: theme.vars.palette.background.surface,
          }),
        }),
      },
    },
    JoyIconButton: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          '&:hover:not(:active)': {
            '@media (hover: none)': {
              backgroundColor:
                theme.variants[ownerState.variant!]?.[ownerState.color!]
                  ?.backgroundColor,
            },
          },
        }),
      },
    },
    JoyInput: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.size === 'lg' && {
            fontSize: '20px',
          }),
        }),
        endDecorator: ({ ownerState }) => ({
          ...(ownerState.size === 'lg' && {
            '--Typography-fontSize': 18,
          }),
        }),
      },
    },
    JoyTable: {
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          ...(ownerState.size === 'lg' && {
            fontSize: theme.vars.fontSize.lg,
          }),
        }),
      },
    },
    JoyTextarea: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.size === 'lg' && {
            fontSize: '20px',
          }),
        }),
      },
    },
    JoySelect: {
      styleOverrides: {
        button: ({ ownerState }) => ({
          whiteSpace: 'nowrap',
          ...(ownerState.size === 'lg' && {
            fontSize: '20px',
          }),
        }),
        listbox: ({ ownerState }) => ({
          ...(ownerState.size === 'lg' && {
            '--ListItem-fontSize': '20px',
          }),
        }),
      },
    },
    JoyFormLabel: {
      styleOverrides: {
        root: {
          fontWeight: 'bold',
        },
      },
    },
    JoyFormControl: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.size === 'lg' && {
            '--FormLabel-fontSize': '18px',
          }),
        }),
      },
    },
    JoyRadio: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(ownerState.size === 'lg' && {
            fontSize: theme.vars.fontSize.xl,
          }),
        }),
      },
    },
    JoyStack: {
      defaultProps: {
        useFlexGap: true,
      },
    },
  },
});

// legacy Joy alpha
scrappyTheme.typography.display1 = scrappyTheme.typography['h1'];
scrappyTheme.typography.display2 = scrappyTheme.typography['h2'];
scrappyTheme.typography.h5 = scrappyTheme.typography['title-lg'];
scrappyTheme.typography.h6 = scrappyTheme.typography['title-md'];
scrappyTheme.typography.body1 = scrappyTheme.typography['body-md'];
scrappyTheme.typography.body2 = scrappyTheme.typography['body-sm'];
scrappyTheme.typography.body3 = scrappyTheme.typography['body-xs'];

export default scrappyTheme;
