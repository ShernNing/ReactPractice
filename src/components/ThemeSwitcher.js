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




import { ThemeProvider, useTheme } from "./ThemeContext";
import Switch from "../Switch";

const Title = ({children}) => {
  const {b} = useTheme();
  return (
    <h2 style={{color: b === "light" ? "black" : "white",}}>
      {children}
    </h2>
  );
}

const Paragraph = ({children}) => {
  const {b} = useTheme();
  return (
    <p style={{color: b === "light"? "black" : "white",}}>
      {children}
    </p>
  );
}

const Content = () => {
  return (
    <div>
      <Paragraph>
        We are a pizza loving family. And for years, I searched and searched and
        searched for the perfect pizza dough recipe. I tried dozens, or more.
        And while some were good, none of them were that recipe that would
        make me stop trying all of the others.
      </Paragraph>  
    </div>
  )
}

const Header = () => {
  return (
    <header>
      <Switch/>
      <Title>Little Lemons</Title>
    </header>
  )
}

const Page = () => {
  return (
    <div className="page">
      <Title>When it comes to dough</Title>
      <Content />
    </div>
  )
}

function ThemeSwitcher() {
  const {b} = useTheme();
  return (
    <div className="ThemeSwitcher"
      style={{backgroundColor: b === "light" ? "white" : "black",}}> 
      <Header/>
      <Page/>
    </div>
  )
}

function Root() {
  return (
    <ThemeProvider>
      <ThemeSwitcher/>
    </ThemeProvider>
  )
}

export default Root;