import { createContext } from "react";

export enum Theme {
  Light = 'light',
  Dark = 'dark'
}

export interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: Theme.Light,
  setTheme: () => {}
});

export const THEME_LOCAL_STORAGE_KEY = 'theme';