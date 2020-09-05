import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const StyledButton = styled(motion.button)`
  height: 30px;
  min-width: 40%;
  background-color: #ffffff;
  border: 1px solid black;
  border-radius: 7px;
`

const Button = props => {
  return <StyledButton onClick={props.onClick}>{props.children}</StyledButton>
}

export default Button
