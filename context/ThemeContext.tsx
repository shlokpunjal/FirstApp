import { createContext, useState, useContext, ReactNode } from "react";

const darkColors = {
  background: "#0e0e0e",
  card: "#1e1e1e",
  text: "#fff",
  subtext: "#a19f9f",
  header: "#111",
}

const lightColors = {
  background: "#f5f5f5",
  card: "#fff",
  text: "#000",
  subtext: "#555",
  header: "#e5e5e5",
}

type ThemeContext = {
    isDark: boolean
    colors: typeof darkColors
    toggleTheme: ()=> void
}

const ThemeContext = createContext<ThemeContext | null>(null)

export function ThemeProvider({children}: {children: ReactNode}){
    const [isDark, setIsDark] = useState(true)
    const colors = isDark ? darkColors : lightColors

    const toggleTheme = () => {
        setIsDark(prev => !prev)
    }

    return (
        <ThemeContext.Provider value = {{isDark, colors, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)

    if(!context){
        throw new Error("useTheme must be used inside ThemeProvider")
    }
    return context
}