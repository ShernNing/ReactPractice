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
import {useTheme} from "../components/ThemeContext";

const Switch = () => {
  const { b, toggleTheme } = useTheme();
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={b === "light"}
        onChange={toggleTheme}
        />
      <span className="slider round" />
    </label>
  );
};

export default Switch;


// theme - b
// setTheme - cvb