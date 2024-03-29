import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui'
import s from './error-page.module.scss'
import { classNames } from 'shared/lib/classnames/class-names'

interface ErrorPageProps {
  className?: string
}

export const ErrorPage: React.FC<ErrorPageProps> = ({ className }) => {
  const { t } = useTranslation('general')

  return (
    <div className={classNames(s.ErrorPage as string, {}, [className])}>
      <p>{t('error')}</p>
      <Button onClick={() => { window.location.reload() }}>{t('reload')}</Button>
    </div>
  )
}
