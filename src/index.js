import { ChakraBaseProvider, ColorModeScript , theme} from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraBaseProvider theme={theme}>
    <App />
    </ChakraBaseProvider>
  </StrictMode>
);


export const server = `https://api.coingecko.com/api/v3`;