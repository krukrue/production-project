import React from 'react'
import './loader.scss'
import { classNames } from 'shared/lib/classnames/class-names'

interface LoaderProps {
  className?: string
  checkedIds?: CheckedIdsChangeFunc
}
export type CheckedIdsChangeFunc = (ids?: Set<number>) => void

export const Loader: React.FC<LoaderProps> = ({ className }) => {
  return (
    <div className={classNames('lds-ring', undefined, [className])}><div></div><div></div><div></div><div></div></div>
  )
}
