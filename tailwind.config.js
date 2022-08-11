module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    fontSize: {
      sm: ['14px', '21px'],
      base: ['16px', '24px'],
      'pageNum': ['18px', '27px'],
      'pageBtn': ['19px', '29px'],
      lg: ['20px', '30px'],
      xl: ['24px', '36px'],
      '32px': ['32px', '48px'],
      '2xl': ['36px', '54px'],
      '42px': ['42px', '63px'],
      '3xl': ['48px', '72px'],
      '4xl': ['64px', '96px'],
    }, 
    container: {
      center: true, 
      padding: '12px',
      screens: {
        sm: '640px',
        md: '720px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1320px',
      },
    },
    extend: {
      colors:{
        'main': {
          light: '#FBF2F2',
          DEFAULT: '#AA0601',
          dark: '#650300',
        },
        'gray': {
          light: '#DCDCDC',
          DEFAULT: '#707070',
          dark: '#555555',
          ground: '#F2F2F2',
          shop: '#00000020',
          place:'#CED4DA',
          text:'#495057',
        },
        'brown':{
          light: '#B75929',
          DEFAULT: '#5F3E2D',
        },
        'black':{
          light:'#212529',
          DEFAULT: '#000000',
        }
      },
      boxShadow: {
        'base': '0 2px 6px #DEE2E6',
      },
      backgroundImage: {
        'h1-logo': "url('https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/logo-white.png?raw=true')",
        'index-banner': "url('https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-header-sm.png?raw=true')",
        'index-design': "url('https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/index-bg-sm.png?raw=true')",
      },
      margin: {
        '15': '60px',
        '31': '124px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}