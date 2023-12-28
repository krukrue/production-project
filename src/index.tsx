import { createRoot } from 'react-dom/client';
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./theme/theme-provider";

const elem = document.getElementById('root')

const root = createRoot (elem)

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
)