import styled from "styled-components"
import { motion } from "framer-motion"
import React, { useState } from "react"

const StyledDiv = styled(motion.div)`
  display: inline-block;
  bottom: 0;
  padding: 0.5em;
  margin: 0.5em;
  background: white;
  border: 5px 5px 5px black;
  border-radius: 3px;
  width: 18.1%;
`

const ForecastBox = props => {
  const [variant, setVariant] = useState("show")
  const container = {
    hidden: { y: "-100px", opacity: 0 },
    show: {
      y: "0px",
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  }
  const item = {
    show: { opacity: 1, x: 0, transition: {
        delay: 0.2
    } },
    hidden: { opacity: 0, x: -50 }
  }
  return (
    <StyledDiv variants={container} initial="hidden" animate={variant}>
      <motion.div variants={item} initial="hidden" animate={variant}>{props.children}</motion.div>
    </StyledDiv>
  )
}

export default ForecastBox
