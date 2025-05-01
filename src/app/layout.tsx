'use client';

import "./globals.css";
import { ThemeProvider } from '@mui/material';
import theme from './theme/theme';
import { Provider } from 'react-redux';
import { store } from './store.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            {children}
            <ToastContainer position='top-right' autoClose={1500} closeOnClick/>
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}