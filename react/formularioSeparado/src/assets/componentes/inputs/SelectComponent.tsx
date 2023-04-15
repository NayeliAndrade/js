import React from "react";
import { selectProps, OpcionesProps } from "../tools/interfaces";


const Opciones: React.FC<OpcionesProps> = ({ text }) => <option value={text}>{text}</option>;

const SelectG: React.FC<selectProps> = ({
    title,
    name,
    className,
    value,
    opciones,
    onChange
}) => {
    return (
        <>
            <select
                title={title}
                name={name}
                className={className}
                value={value}
                onChange={onChange}
            >
              {
                opciones.map((opction, index)=>(
                    <Opciones text = {opction} key={index}/>
                ))
              }
            </select>

        </>
    );
};

export default SelectG;