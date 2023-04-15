import React from "react";
import MostrarError from "./MostrarError";
import {  HandleSubmitType } from "../componentes/tools/types";


const HandleSubmit:HandleSubmitType = (e,x,set) => {
    e.preventDefault()
    if (!x.apellido.trim() || !x.nombre.trim() || !x.email.trim()) {
      //alert("campo vacio")
      set(true)
      return;
    } else {
      set(false)
      console.log(x.asunto, x.apellido, x.nombre, x.CURP, x.email, x.telefono);
    }
  }

export default HandleSubmit


