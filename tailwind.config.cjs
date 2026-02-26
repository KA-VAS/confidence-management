module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3851FF',
        accent: '#7C5CFF',
        surface: '#FFFFFF',
        page: '#F7F9FC'
      },
      borderRadius: {
        lgcustom: '12px'
      },
      boxShadow: {
        soft: '0 4px 14px rgba(15,23,36,0.06)'
      }
    }
  },
  plugins: []
}
