import type { Config } from "tailwindcss";

export const theme: Config["theme"] = {
  extend: {
    colors: {
      background: "var(--background)",
      foreground: "var(--foreground)",
      primary: {
        50: '#eef3fb',
        100: '#d5e1f5',
        200: '#abbfe9',
        300: '#7a99d9',
        400: '#4e75c9',
        500: '#2b56b5',
        600: '#1E4E8C', // Brand Deep Blue
        700: '#1a4279',
        800: '#163665',
        900: '#112a50',
        950: '#0b1b33',
        DEFAULT: '#1E4E8C',
      },
      secondary: {
        50: '#f8f9fa',
        100: '#f1f3f5',
        200: '#e9ecef',
        300: '#dee2e6',
        400: '#ced4da',
        500: '#adb5bd',
        600: '#6c757d',
        700: '#495057',
        800: '#343a40',
        900: '#212529',
        950: '#121416',
        DEFAULT: '#f1f3f5',
      },
      accent: {
        50: '#f0faf1',
        100: '#dcf5de',
        200: '#b9eabd',
        300: '#88d98e',
        400: '#57c45f',
        500: '#4CAF50', // Brand Green
        600: '#3d9940',
        700: '#2f7a32',
        800: '#265e28',
        900: '#1e4b20',
        950: '#0f2a11',
        DEFAULT: '#4CAF50',
      },
    },
    keyframes: {
      'announcement': {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-50%)' },
      },
      'shimmer': {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(200%)' },
      },
    },
    animation: {
      'announcement': 'announcement 25s linear infinite',
      'shimmer': 'shimmer 3s ease-in-out infinite',
    },
  },
};
