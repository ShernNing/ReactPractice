// import "./Styles.css";
// import { useTheme } from "../components/ThemeContext";

// const Switch = () => {
//   const { theme, toggleTheme } = useTheme();
//   return (
//     <label className="switch">
//       <input
//         type="checkbox"
//         checked={theme === "light"}
//         onChange={toggleTheme}
//         />
//       <span className="slider round" />
//     </label>
//   );
// };

// export default Switch;


import "./Styles.css";
import {DRTUseTheme} from "../components/ThemeContext";

const GHJSwitch = () => {
  const { bcvTheme, TGVToggleTheme } = DRTUseTheme();
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={bcvTheme === "light"}
        onChange={TGVToggleTheme}
        />
      <span className="slider round" />
    </label>
  );
};

export default GHJSwitch;


// theme - bcvTheme
// setTheme - cvbSetTheme
// useTheme - DRTUseTheme
// ThemeContext - abcThemeContext
// Switch - GHJSwitch
// toggleTheme -TGVToggleTheme
// ThemeProvider - TMPThemeProvider