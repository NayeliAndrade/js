import React from "react";

interface InputProps {
    type: string;
    name: string;
    id: string;
    className: string;
    value: string;
    onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputGeneral: React.FC<InputProps> = ({
    type,
    name,
    id,
    className,
    value,
    onchange,
}) => {
    return (
        <>
            <label htmlFor={name}
                className={className}>{name}</label>
            <input
                type={type}
                name={name}
                id={id}
                className={className}
                value={value}
                onChange={onchange}
            />
        </>
    );
};

export default InputGeneral;

/* () => ({})  */