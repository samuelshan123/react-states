import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import ReactState from './React_States';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <App /> */}
    <ReactState/>
  </StrictMode>
);
