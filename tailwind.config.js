/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    drawer: {
      defaultProps: {
        size: 300,
        overlay: true,
        placement: 'left',
        overlayProps: undefined,
        className: '',
        dismiss: undefined,
        onClose: undefined,
        transition: {
          type: 'tween',
          duration: 0.3,
        },
      },
      styles: {
        base: {
          drawer: {
            position: 'fixed',
            zIndex: 'z-[9999]',
            pointerEvents: 'pointer-events-auto',
            backgroundColor: 'bg-white',
            boxSizing: 'box-border',
            width: 'w-full',
            boxShadow: 'shadow-2xl shadow-blue-gray-900/10',
          },
          overlay: {
            position: 'absolute',
            inset: 'inset-0',
            width: 'w-full',
            height: 'h-full',
            pointerEvents: 'pointer-events-auto',
            zIndex: 'z-[9995]',
            backgroundColor: 'bg-black',
            backgroundOpacity: 'bg-opacity-60',
            backdropBlur: 'backdrop-blur-sm',
          },
        },
      },
    },
    container: {
      center: true,
      padding: '1rem',
    },
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#090E34',
      dark: '#1D2144',
      primary: '#4A6CF7',
      yellow: '#FBB040',
      'body-color': '#959CB1',
    },
    screens: {
      xs: '450px',
      // => @media (min-width: 450px) { ... }

      sm: '575px',
      // => @media (min-width: 576px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '992px',
      // => @media (min-width: 992px) { ... }

      xl: '1200px',
      // => @media (min-width: 1200px) { ... }

      '2xl': '1400px',
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      boxShadow: {
        signUp: '0px 5px 10px rgba(4, 10, 34, 0.2)',
        one: '0px 2px 3px rgba(7, 7, 77, 0.05)',
        sticky: 'inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
