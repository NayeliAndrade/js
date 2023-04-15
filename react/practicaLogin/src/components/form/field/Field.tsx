import React from "react";

interface FieldProps {
    placeholder: string;
    type: string;
    name: string;
    loggerMethod: (value: string, name: string) => void;
}

const Field: React.FC<FieldProps>=({
    placeholder,
    type,
    loggerMethod,
    name,
})=>{
    return (
        <div>
            <input
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                const {name, value} = e.target;
                loggerMethod(value,name);
            }}
            />
        </div>
    );
};

export default Field;