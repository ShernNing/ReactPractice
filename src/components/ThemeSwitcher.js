// import { ThemeProvider, useTheme } from "./ThemeContext";
// import Switch from "../Switch";

// const Title = ({children}) => {
//   const {theme} = useTheme();
//   return (
//     <h2 style={{color: theme === "light" ? "black" : "white",}}>
//       {children}
//     </h2>
//   );
// }

// const Paragraph = ({children}) => {
//   const {theme} = useTheme();
//   return (
//     <p style={{color: theme === "light"? "black" : "white",}}>
//       {children}
//     </p>
//   );
// }

// const Content = () => {
//   return (
//     <div>
//       <Paragraph>
//         We are a pizza loving family. And for years, I searched and searched and
//         searched for the perfect pizza dough recipe. I tried dozens, or more.
//         And while some were good, none of them were that recipe that would
//         make me stop trying all of the others.
//       </Paragraph>  
//     </div>
//   )
// }

// const Header = () => {
//   return (
//     <header>
//       <Switch/>
//       <Title>Little Lemons</Title>
//     </header>
//   )
// }

// const Page = () => {
//   return (
//     <div className="page">
//       <Title>When it comes to dough</Title>
//       <Content />
//     </div>
//   )
// }

// function ThemeSwitcher() {
//   const {theme} = useTheme();
//   return (
//     <div className="ThemeSwitcher"
//       style={{backgroundColor: theme === "light" ? "white" : "black",}}> 
//       <Header/>
//       <Page/>
//     </div>
//   )
// }

// function Root() {
//   return (
//     <ThemeProvider>
//       <ThemeSwitcher/>
//     </ThemeProvider>
//   )
// }

// export default Root;




import { TMPThemeProvider, DRTUseTheme } from "./ThemeContext";
import GHJSwitch from "../Switch";

const Tit = ({children}) => {
  const {bcvTheme} = DRTUseTheme();
  return (
    <h2 style={{color: bcvTheme === "light" ? "black" : "white",}}>
      {children}
    </h2>
  );
}

const Paragh = ({children}) => {
  const {bcvTheme} = DRTUseTheme();
  return (
    <p style={{color: bcvTheme === "light"? "black" : "white",}}>
      {children}
    </p>
  );
}

const Contet = () => {
  return (
    <div>
      <Paragh>
        We are a pizza loving family. And for years, I searched and searched and
        searched for the perfect pizza dough recipe. I tried dozens, or more.
        And while some were good, none of them were that recipe that would
        make me stop trying all of the others.
      </Paragh>  
    </div>
  )
}

const Hedr = () => {
  return (
    <header>
      <GHJSwitch/>
      <Tit>Little Lemons</Tit>
    </header>
  )
}

const Page = () => {
  return (
    <div className="page">
      <Tit>When it comes to dough</Tit>
      <Contet />
    </div>
  )
}

function ThemSwit() {
  const {bcvTheme} = DRTUseTheme();
  return (
    <div className="ThemeSwitcher"
      style={{backgroundColor: bcvTheme === "light" ? "white" : "black",}}> 
      <Hedr/>
      <Page/>
    </div>
  )
}

function Root() {
  return (
    <TMPThemeProvider>
      <ThemSwit/>
    </TMPThemeProvider>
  )
}

export default Root;



// theme - bcvTheme
// setTheme - cvbSetTheme
// useTheme - DRTUseTheme
// ThemeContext - abcThemeContext
// Switch - GHJSwitch
// toggleTheme -TGVToggleTheme
// ThemeProvider - TMPThemeProvider