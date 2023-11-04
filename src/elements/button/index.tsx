import { ButtonPropsType } from "@/types/component.types"
import React from "react"

const Button: React.FC<ButtonPropsType> = ({ label, onClick, type, className }) => {
    return <button 
        onClick={onClick} 
        type={type}
        className={`btn btn-primary w-full ${className && className}`}
    >{label}</button>
}

export default Button