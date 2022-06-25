import { createContext, useState } from 'react'

export const ThemeContext = createContext()

export function ThemeProvider(props) {
  const [theme, setTheme] = useState('dark')
  const value = { theme, setTheme }
  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  )
}
