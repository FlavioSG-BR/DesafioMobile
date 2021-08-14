import 'styled-components';

interface IPalette {
  main: string;
  contrastText: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    sizes: {
      borderRadius: string;
    };
    colors: {
      title: string;
      text: string;
      error: string;
      primary: string;
      secondary: string;
      page: string;
    };
  }
}
