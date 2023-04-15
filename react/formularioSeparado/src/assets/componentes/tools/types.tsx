import React, { Dispatch, SetStateAction } from "react";
import { InputState } from "./interfaces";

export type HandleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    set: Dispatch<SetStateAction<InputState>>
) => void

export type HandleSubmitType = (
    e: React.FormEvent<HTMLFormElement>,
    x: InputState,
    set: React.Dispatch<React.SetStateAction<boolean>>
) => void