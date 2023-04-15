import { InputProps } from "../tools/interfaces"

import React from "react";

export type EventSubmit = React.FormEvent<HTMLFormElement>;
export type EventChangeInput = React.ChangeEvent<HTMLInputElement>;

export interface iUser {
  gender: string;
}

interface FieldRadioProps {
  name: string;
  onChecked: (e: EventChangeInput) => void;
  value: string;
  id: string;
}

export const FieldRadio: React.FC<FieldRadioProps> = ({
  name,
  value,
  id,
  onChecked,
}) => {
  return (
    <>
      <input
        id={id}
        type="radio"
        value={value}
        name={name}
        onChange={onChecked}
      />
      <label htmlFor={id}>{value}</label>
    </>
  );
};