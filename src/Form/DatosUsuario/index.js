import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarEmail, validarPassword } from "./validaciones";

const DatosUsuario = ({updateStep}) =>{ 
  const [email, setEmail] = useState({ value: "", valid: null})
  const [password, setPassword] = useState({ value: "", valid: null})

  return (
    <Box
      component="form"
      autocomplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}

      onSubmit={ (e) => {
        e.preventDefault()
        if(email.valid && password.valid){
          console.log("siguiente formulario")
          console.log(email, password)
          updateStep(1)
        }else{
          console.log("no hacer nada")
        }
      }}
    >
      <TextField
        label="Correo electrónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="email"
        error={email.valid === false}
        helperText={email.valid === false && "Ingresa un correo electrónico válido"}
        value={email.value}
        onChange={(input) => {
          const email = input.target.value
          const valido = validarEmail(email)
          setEmail({value: email, valid:valido })} 

        }
      />
      <TextField
        label="Contraseña"
        variant="outlined"
        fullWidth
        margin="dense"
        type="password"
        error={password.valid === false}
        helperText={password.valid === false && "ingrese una contraseña valida (entre 8 y 20 caracteres)"}
        value={password.value}
        onChange={(input) => {
          const password = input.target.value
          const valido = validarPassword(password)
          setPassword({value: password, valid: valido})}
        }
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
  
}

export default DatosUsuario;
