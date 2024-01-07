import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/theme-provider";
import App from "app/App";

const elem = document.getElementById('root')

const root = createRoot (elem)

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
)