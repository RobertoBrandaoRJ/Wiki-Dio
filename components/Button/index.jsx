import React from 'react'
import { ButtonContainer } from './style'

const Button = ({ onClick }) => {
  return (
    <ButtonContainer onClick={onClick}>
      Pesquisar Github
    </ButtonContainer>
  )
}

export default Button
