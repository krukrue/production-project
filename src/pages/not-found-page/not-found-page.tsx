import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './not-found-page.module.scss'
import { classNames } from 'shared/lib/classnames/class-names'

interface NotFoundPageProps {
  className?: string
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({ className }) => {
  const { t } = useTranslation('not-found')

  return (
    <div className={classNames(styles['not-found-page'] as string, undefined, [className])}>
      <h1>{t('notFoundPage')}</h1>
    </div>
  )
}

export default NotFoundPage
