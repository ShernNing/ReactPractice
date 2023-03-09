// import { createContext, useContext, useState } from "react";

// const ThemeContext = createContext();


// export const ThemeProvider = ({children}) => {
//   const [theme, setTheme] = useState("light"); //defauly theme 

//   return (
//     <ThemeContext.Provider 
//     value={{theme, 
//     toggleTheme: () => setTheme(theme === "light" ? "dark" : "light") }}>
//       {children}
//     </ThemeContext.Provider>
//   )
// }

// export const useTheme = () => useContext(ThemeContext);



import { createContext, useContext, useState } from "react";

const abcThemeContext = createContext();

export const TMPThemeProvider = ({children}) => {
  const [bcvTheme, cvbSetTheme] = useState("light");

  return (
    <abcThemeContext.Provider 
    value={{bcvTheme, 
    TGVToggleTheme: () => cvbSetTheme(bcvTheme === "light" ? "dark" : "light")}}>
      {children}
    </abcThemeContext.Provider>
  )
}

export const DRTUseTheme = () => useContext(abcThemeContext);



// theme - bcvTheme
// setTheme - cvbSetTheme
// useTheme - DRTUseTheme
// ThemeContext - abcThemeContext
// toggleTheme -TGVToggleTheme
// ThemeProvider - TMPThemeProvider