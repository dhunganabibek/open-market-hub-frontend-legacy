// //Applying module augmentation to override MUI theme in TS
declare module "@mui/material/styles" {
  interface ThemeOptions {
    custom: {
      light: string;
      main: string;
      dark: string;
      contrastText: string;
    };
  }
}
