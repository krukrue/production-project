import React from 'react'
import './page-loader.scss'
import { classNames } from 'shared/lib/classnames/class-names'
import { Loader } from 'shared/ui'

interface PageLoaderProps {
  className?: string
}

export const PageLoader: React.FC<PageLoaderProps> = ({ className }) => {
  return (
    <div className={classNames('page-loader', undefined, [className])}>
      <Loader />
    </div>
  )
}
