import { useContext } from 'react'
import { THEME_LOCAL_STORAGE_KEY, Theme, ThemeContext } from 'app/providers/theme-provider/lib/theme-context'

interface UseThemeResult {
  theme: Theme
  toggleTheme: () => void
}

export function useTheme (): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme = theme === Theme.Light ? Theme.Dark : Theme.Light
    setTheme(newTheme)
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, newTheme)
  }

  return { theme, toggleTheme }
}
