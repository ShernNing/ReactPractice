import React, {useState, useEffect} from "react"

export default function useEffectScreenSize() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
    setWindowHeight(window.innerHeight)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

return (
    <div>Width: {windowWidth} Height: {windowHeight}</div>
)}