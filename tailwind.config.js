module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    fontSize: {
      sm: ['14px', '21px'],
      base: ['16px', '24px'],
      lg: ['20px', '30px'],
      xl: ['24px', '36px'],
      '2xl': ['36px', '54px'],
      '3xl': ['48px', '72px'],
      '4xl': ['64px', '96px'],
    },
    container: {
      center: true, 
      padding: '12px',
    },
    extend: {
      colors:{
        'main': {
          light: '#FBF2F2',
          DEFAULT: '#AA0601',
          dark: '#650300',
        },
        'gray':'#707070',
      },
      boxShadow: {
        'base': '0 2px 6px #DEE2E6',
      },
      backgroundImage: {
        'h1-logo': "url('https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/logo-white.png?raw=true')",
        'index-banner': "url('https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-header-sm.png?raw=true')",
        'index-design': "url('https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/index-bg-sm.png?raw=true')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}