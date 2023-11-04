import { TextInputPropsType } from "@/types/component.types"
import React from "react"


const TextInput: React.FC<TextInputPropsType> = ({ name, label, type, onChange, onBlur, value, className }) => {
    return(
        <div className="">
            { label && 
                <label 
                    htmlFor={name}
                    className="label"
                >
                    {label}
                </label> }
            <input 
                type={type}
                name={name}
                id={name}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                className={`input input-bordered input-primary w-full bg-white ${ className && className }`}
            />
        </div>
    )
}

export default TextInput