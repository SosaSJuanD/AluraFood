import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const DatosUsuario = () =>{ 
  const [email, setEmail] = useState({ value: "sss@ss.com", valid: true})
  const [password, setPassword] = useState({ value: "assasdas", valid: true})
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     email: {
  //       value: "",
  //       valid: true,
  //     },
  //     password: {
  //       value: "",
  //       valid: true,
  //     }
  //   };
  // }

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
        console.log(email, password)
      }}
    >
      <TextField
        label="Correo electrónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="email"
        error={false}
        helperText={false && "Ingresa un correo electrónico válido"}
        value={email.value}
        onChange={(input) => setEmail({value: input.target.value, valid:true })} 
      />
      <TextField
        label="Contraseña"
        variant="outlined"
        fullWidth
        margin="dense"
        type="password"
        value={password.value}
        onChange={(input) => setPassword({value: input.target.value, valid: true})}
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
  
}

export default DatosUsuario;
