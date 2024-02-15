import { useTheme } from 'app/providers/theme-provider'
import React from 'react'
import { classNames } from 'shared/lib/classnames/class-names'
import styles from './theme-switcher.module.scss'
import ThemeDark from 'shared/config/assets/icons/theme-dark.svg'
import ThemeLight from 'shared/config/assets/icons/theme-light.svg'
import { Theme } from 'app/providers/theme-provider/lib/theme-context'
import { Button } from 'shared/ui/button/button'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button className={classNames(styles['theme-switcher'] as string, {}, [className])} onClick={toggleTheme} theme={theme}>
      {theme === Theme.Dark ? <ThemeDark /> : <ThemeLight />} Toggle Theme
    </Button>
  )
}
