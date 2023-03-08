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

const a = createContext();

export const ThemeProvider = ({children}) => {
  const [b, cvb] = useState("light");

  return (
    <a.Provider 
    value={{b, 
    toggleTheme: () => cvb(b === "light" ? "dark" : "light")}}>
      {children}
    </a.Provider>
  )
}

export const useTheme = () => useContext(a);