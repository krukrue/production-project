import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/theme-provider";
import App from "app/App";

import "shared/config/i18n/i18n";

const elem = document.getElementById('root')

const root = createRoot (elem)

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
)