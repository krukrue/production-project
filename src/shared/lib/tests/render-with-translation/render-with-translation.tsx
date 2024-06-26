import { type ReactNode } from 'react'
import { render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import i18nForTest from 'shared/config/i18n/i18n-test-config'

export function renderWithTranslation (node: ReactNode) {
  return render(
    <I18nextProvider i18n={i18nForTest}>
      {node}
    </I18nextProvider>
  )
}
