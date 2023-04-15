import React from "react";
import { InputProps } from "../tools/interfaces";


const InputGeneral: React.FC<InputProps> = ({
    type,
    name,
    id,
    className,
    value,
    onChange,
}) => {
    return (
        <>
            <label htmlFor={name}
                className=" mt-2">{name}</label>
            <input
                type={type}
                name={name}
                id={id}
                //className="form-control mt-2 border border-success"
                value={value}
                onChange={onChange}
            />
        </>
    );
};

export default InputGeneral;

/* () => ({})  */