import React, { useRef, useEffect } from "react"
import Sun from "../images/sun.svg"
import gsap from "gsap"

const style = {
  position: "absolute",
  zIndex: -5,
  top: "-20vh",
  left: "-20vh",
}

const Sunny = () => {
  const wrapper = useRef(null)

  useEffect(() => {
    const [elements] = wrapper.current.children
    console.log(elements)
    const sunrays = elements.getElementById("sunrays")
    const sun = elements.getElementById("sun")

    gsap.set([sun, sunrays], {
      autoAlpha: 0,
      zIndex: -5,
      transformOrigin: "50% 50%",
    })
    const tl = gsap.timeline({})
    tl.to([sun, sunrays], { duration: 1, autoAlpha: 1 })
    tl.to([sun, sunrays], {
      duration: 50,
      autoAlpha: 1,
      rotation: 360,
      repeat: -1,
      yoyo: true,
    })
  })

  return (
    <div ref={wrapper} style={style} className="Sun">
      <Sun name="sun" />
    </div>
  )
}

export default Sunny
