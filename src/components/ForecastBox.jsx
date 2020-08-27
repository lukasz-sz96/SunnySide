import styled from "styled-components"
import { motion } from "framer-motion"
import React, { useState } from "react"

const StyledDiv = styled(motion.div)`
  display: inline-block;
  padding: 0.45em;
  margin: 0.5em;
  background: white;
  border: 1px solid black;
  border-radius: 3px;
  width: auto;
  overflow: hidden;
`

const ForecastBox = props => {
  const {variant} = props

  const containerAnim = {
    hide: { y: "100px", opacity: 0 },
    show: {
      y: "0px",
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  }

  const itemAnim = {
    show: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2,
        duration: 0.4,
      },
    },
    hide: { opacity: 0, x: -50 },
  }

  return (
    <StyledDiv variants={containerAnim} initial="hide" animate={variant}>
      <motion.div variants={itemAnim} initial="hide" animate={variant}>
        {props.children}
      </motion.div>
    </StyledDiv>
  )
}

export default ForecastBox

