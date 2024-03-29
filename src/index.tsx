import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/theme-provider'
import App from 'app/App'

import 'shared/config/i18n/i18n'
import { ErrorBoundary } from 'app/providers/error-bounder'

const elem = document.getElementById('root')

const root = createRoot(elem as Element)

root.render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>
)
