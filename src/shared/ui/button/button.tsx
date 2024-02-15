import { classNames } from 'shared/lib/classnames/class-names'
import cls from './Button.module.scss'
import { type ButtonHTMLAttributes, type FC } from 'react'
import { Theme } from 'app/providers/theme-provider/lib/theme-context'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: Theme
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme = Theme.Light,
    ...otherProps
  } = props

  return (
    <button
        className={classNames(cls.Button as string, { [cls[theme]]: true }, [className ?? ''])}
        {...otherProps}
        >
      {children}
    </button>
  )
}
