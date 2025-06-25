module.exports = {
  content: ["./pages/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#D1B280", // camel leather
          50: "#FAF8F4",
          100: "#F4F0E8",
          200: "#E8DCC8",
          300: "#DCC8A8",
          400: "#D1B280",
          500: "#C5A670",
          600: "#B99A60",
          700: "#A68850",
          800: "#937640",
          900: "#806430",
        },
        secondary: {
          DEFAULT: "#0A192F", // deep navy
          50: "#F0F2F5",
          100: "#E1E6EB",
          200: "#C3CDD7",
          300: "#A5B4C3",
          400: "#879BAF",
          500: "#69829B",
          600: "#4B6987",
          700: "#2D5073",
          800: "#1A3A5F",
          900: "#0A192F",
        },
        accent: {
          DEFAULT: "#D4AF37", // rich gold
          50: "#FDFBF4",
          100: "#FAF6E9",
          200: "#F5EDD3",
          300: "#F0E4BD",
          400: "#EBDBA7",
          500: "#E6D291",
          600: "#E1C97B",
          700: "#DCC065",
          800: "#D7B74F",
          900: "#D4AF37",
        },
        background: "#FFFFF0", // warm ivory
        surface: "#F8F6F0", // subtle off-white
        textPrimary: "#2C3E50", // charcoal gray
        textSecondary: "#6B7280", // medium gray
        success: {
          DEFAULT: "#10B981", // emerald green
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
          800: "#065F46",
          900: "#064E3B",
        },
        warning: {
          DEFAULT: "#F59E0B", // topaz amber
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
        },
        error: {
          DEFAULT: "#800020", // deep burgundy
          50: "#FDF2F8",
          100: "#FCE7F3",
          200: "#FBCFE8",
          300: "#F9A8D4",
          400: "#F472B6",
          500: "#EC4899",
          600: "#DB2777",
          700: "#BE185D",
          800: "#9D174D",
          900: "#800020",
        },
        border: "#E5E7EB", // muted tone
        borderLight: "#F3F4F6",
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Montserrat', 'sans-serif'],
        caption: ['Inter', 'sans-serif'],
        data: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'luxury-xs': ['0.75rem', { lineHeight: '1rem' }],
        'luxury-sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'luxury-base': ['1rem', { lineHeight: '1.5rem' }],
        'luxury-lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'luxury-xl': ['1.25rem', { lineHeight: '1.75rem' }],
        'luxury-2xl': ['1.5rem', { lineHeight: '2rem' }],
        'luxury-3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        'luxury-4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      },
      boxShadow: {
        'luxury': '0 4px 20px rgba(209, 178, 128, 0.15)',
        'luxury-lg': '0 8px 32px rgba(209, 178, 128, 0.25)',
        'luxury-xl': '0 12px 48px rgba(209, 178, 128, 0.25)',
        'glass': '0 8px 32px rgba(31, 38, 135, 0.37)',
      },
      backdropBlur: {
        'luxury': '16px',
      },
      animation: {
        'confetti-fall': 'confetti-fall 3s ease-out forwards',
        'micro-scale': 'micro-scale 200ms ease-out',
      },
      keyframes: {
        'confetti-fall': {
          '0%': {
            transform: 'translateY(-100vh) rotate(0deg)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(100vh) rotate(720deg)',
            opacity: '0',
          },
        },
        'micro-scale': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.02)' },
        },
      },
      spacing: {
        'luxury-xs': 'clamp(0.5rem, 2vw, 0.75rem)',
        'luxury-sm': 'clamp(0.75rem, 3vw, 1rem)',
        'luxury-md': 'clamp(1rem, 4vw, 1.5rem)',
        'luxury-lg': 'clamp(1.5rem, 6vw, 2rem)',
        'luxury-xl': 'clamp(2rem, 8vw, 3rem)',
      },
      borderRadius: {
        'luxury': '12px',
        'luxury-lg': '16px',
        'luxury-xl': '24px',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '2000': '2000ms',
        '3000': '3000ms',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'luxury-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'luxury-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}