import { CheckboxPropsType } from "@/types/component.types"
import React from "react"


const Checkbox: React.FC<CheckboxPropsType> = ({ label, name, onChange, checked }) => {
    return(
        <div className="form-control w-max">
            <label className="flex flex-row items-center my-2">
                <input type="checkbox" checked={checked} onChange={onChange} className="checkbox checkbox-primary checkbox-sm" name={name} />
                <span className="label-text ml-2">{label}</span>
            </label>
        </div>
    )
}

export default Checkbox