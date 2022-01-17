import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './pages/App/App';
import { GlobalStyles } from './styles/globalStyles';
import { theme } from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
