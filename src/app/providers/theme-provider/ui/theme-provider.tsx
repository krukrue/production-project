import React, { type FC, type ReactNode } from 'react'
import { THEME_LOCAL_STORAGE_KEY, Theme, ThemeContext } from 'app/providers/theme-provider/lib/theme-context'

const defaultTheme = localStorage.getItem(THEME_LOCAL_STORAGE_KEY) as Theme ?? Theme.Light

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = React.useState<Theme>(defaultTheme)

  const toggleTheme = () => {
    setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light)
  }

  const defaultProps = React.useMemo(() => ({
    theme,
    setTheme: toggleTheme
  }), [theme])

  return <ThemeContext.Provider value={defaultProps}>
    {children}
  </ThemeContext.Provider>
}
