import React from 'react'
import Label, { LabelProps } from '../Label'
import Input, { InputProps } from '../Input'

interface InputElementProps {
    connectLabelToInput?: string;
    title?: string;
    labelProps?: LabelProps
    inputProps?: InputProps
}


function InputElement(props: InputElementProps) {
    return (
        <div className='flex flex-col gap-1'>
            <Label htmlFor={props.connectLabelToInput} {...props.labelProps} >
                {props.title}
            </Label>
            <Input {...props.inputProps} className='border-2 border-solid border-[#434343] w-full rounded-md outline-none px-2' id={props.connectLabelToInput} />
            <span className='text-red-500 text-[12px] mt-[-5px] ml-1 w-full'>
                this is error
            </span>
        </div>
    )
}
export default InputElement