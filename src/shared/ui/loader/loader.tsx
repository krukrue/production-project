import React from 'react'
import './loader.scss'
import { classNames } from 'shared/lib/classnames/class-names'

interface LoaderProps {
  className?: string
}

export const Loader: React.FC<LoaderProps> = ({ className }) => {
  return (
    <div className={classNames('lds-ring', undefined, [className])}><div></div><div></div><div></div><div></div></div>
  )
}
