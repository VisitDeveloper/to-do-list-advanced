import { title } from 'process'
import React from 'react'
import Button, { ButtonProps } from '../Button'

interface ButtonElementProps {
  title?: string;
  buttonProps?: ButtonProps
}


function ButtonElement(props: ButtonElementProps) {
  return (
    <Button  {...props.buttonProps}>
      {props.title}
    </Button>
  )
}
export default ButtonElement