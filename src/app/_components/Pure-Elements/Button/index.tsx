import React from 'react'

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    children?: React.ReactElement | React.ReactNode | JSX.Element
}

function Button(props : ButtonProps) {
  return (
    <button {...props} className={`w-fit px-2 py-1 rounded-md text-white ${props.className}`}>
        {props.children}
    </button>
  )
}
export default Button