export interface InputProps {
    type: string;
    name: string;
    id: string;
    className?: string;
    checked?: boolean;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface InputState {
    asunto: string,
    apellido: string,
    nombre: string,
    CURP: string,
    email: string,
    telefono: string,
    priority?: boolean,
    animales: string,
    opcionMultiple: string,
    genero: string
}

export interface selectProps {
    title: string,
    name:string,
    className:string,
    value:string,
    opciones:string[],
    onChange:(e: React.ChangeEvent<HTMLSelectElement>) => void;    
}

export interface OpcionesProps {
    text: string,
}