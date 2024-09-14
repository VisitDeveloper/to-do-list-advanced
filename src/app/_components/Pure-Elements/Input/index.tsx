import React from "react"


export interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}


const Input = (props :InputProps ) => {
    return(
        <input {...props}/>
    )
}
export default Input