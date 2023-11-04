export interface TextInputPropsType {
    name: string;
    label: string;
    type: string;
    onChange: any; 
    onBlur: any;
    value: string;
    className?: string;
}

export interface ButtonPropsType {
    label: string;
    onClick: any; 
    type: "button" | "submit" | "reset";
    className?: string;
}

export interface CheckboxPropsType {
    name: string;
    label: string;
    onChange: any; 
    checked: boolean;
}