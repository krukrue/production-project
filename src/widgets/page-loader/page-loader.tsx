import React from 'react'
import './page-loader.scss'
import { classNames } from 'shared/lib/classnames/class-names'
import { Loader } from 'shared/ui'

interface PageLoaderProps {
  className?: string
}
function empty (arg: Set<number> | undefined) {
  return arg
}

export const PageLoader: React.FC<PageLoaderProps> = ({ className }) => {
  return (
    <div className={classNames('page-loader', undefined, [className])}>
      <Loader checkedIds={(a) => empty(a)} />
    </div>
  )
}
