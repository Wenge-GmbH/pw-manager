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
    blub: '(づ｡◕__◕｡)づ'
  },
  fontSize: {
    h1: { sm: '10pt', md: '12pt', lg: '14pt', xl: '16pt' },
    h2: { sm: '10pt', md: '12pt', lg: '14pt', xl: '16pt' },
    h3: { sm: '10pt', md: '12pt', lg: '14pt', xl: '16pt' },
    h4: { sm: '10pt', md: '12pt', lg: '14pt', xl: '16pt' },
    h5: { sm: '10pt', md: '12pt', lg: '14pt', xl: '16pt' },
    h6: { sm: '10pt', md: '12pt', lg: '14pt', xl: '16pt' }
  },
  mediaQuery: {
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  }
};
