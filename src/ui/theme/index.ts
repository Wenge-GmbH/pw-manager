type theme = {
  color: {
    [key: string]: string;
  };
  font: {
    [key: string]: string;
  };
  japaneseEmojies: {
    [key: string]: string;
  };
  fontSize: {
    [key: string]: {
      [key: string]: string;
    };
  };
  mediaQuery: {
    [key: string]: number;
  };
};

export const theme: theme = {
  color: {
    purple: '#02004d',
    purpleAccent: '#6100ff',
    mainBg: '#fdf1f7',
    actualGrey: '#66738d'
  },
  font: {
    primary: 'Open Sans, sans-serif',
    secondary: 'Muli, sans-serif'
  },
  japaneseEmojies: {
    blub: '(づ｡◕__◕｡)づ',
    tableFlip: '(ノಠ益ಠ)ノ彡┻━┻'
  },
  fontSize: {
    h1: { sm: '16pt', md: '20pt', lg: '22pt', xl: '24pt' },
    h2: { sm: '15pt', md: '19pt', lg: '21pt', xl: '23pt' },
    h3: { sm: '14pt', md: '18pt', lg: '20pt', xl: '22pt' },
    h4: { sm: '13pt', md: '17pt', lg: '19pt', xl: '21pt' },
    h5: { sm: '12pt', md: '16pt', lg: '18pt', xl: '20pt' },
    h6: { sm: '11pt', md: '15pt', lg: '17pt', xl: '19pt' }
  },
  mediaQuery: {
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  }
};
