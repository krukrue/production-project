import React from 'react'
import { useTranslation } from 'react-i18next'
import i18n from 'shared/config/i18n/i18n'
import { Button } from '../button/button'
import { Theme } from 'app/providers/theme-provider/lib/theme-context'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher: React.FC<LangSwitcherProps> = ({ className }) => {
  const { t } = useTranslation('translation')
  const switchLang = async () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <Button theme={Theme.Clear} onClick={switchLang}>{t('translate')} {i18n.language === 'en' ? 'ru' : 'en'}</Button>

  )
}
