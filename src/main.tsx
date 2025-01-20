import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App'
import AppTheme from "./components/theme/AppTheme";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <AppTheme>
              <App />
          </AppTheme>
      </BrowserRouter>
  </StrictMode>,
)
