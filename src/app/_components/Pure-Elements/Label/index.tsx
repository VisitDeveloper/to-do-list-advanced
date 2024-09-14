export interface LabelProps extends React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>{
    children : React.ReactNode | React.ReactElement | JSX.Element;
}

const Label = (props : LabelProps) => {
    return(
        <label {...props}>
            {props.children}
        </label>
    )
}
export default Label