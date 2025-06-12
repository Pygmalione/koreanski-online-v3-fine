// Font loading and configuration
export const fontFamily = {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  heading: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
};

// Font weights
export const fontWeight = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
};

// Font sizes with clamp for responsive typography
export const fontSize = {
  xs: 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
  sm: 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
  base: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
  lg: 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',
  xl: 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
  '2xl': 'clamp(1.5rem, 1.3rem + 1vw, 1.875rem)',
  '3xl': 'clamp(1.875rem, 1.6rem + 1.375vw, 2.25rem)',
  '4xl': 'clamp(2.25rem, 1.9rem + 1.75vw, 3rem)',
  '5xl': 'clamp(3rem, 2.5rem + 2.5vw, 4rem)',
};