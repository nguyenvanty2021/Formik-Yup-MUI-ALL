// src/components/Input/Input.js
import React from "react";
import { FastField } from "formik";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import TextErrors from "../TextErrors/TextErrors";

const Input = ({ label, name, isPassword, ...rest }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <FastField name={name}>
      {({ field, meta }) => {
        const error = meta.touched && meta.error;

        return (
          <div style={{ marginTop: 8 }}>
            <TextField
              fullWidth
              label={label}
              id={name}
              name={name}
              {...field}
              {...rest}
              type={isPassword && !showPassword ? "password" : "text"}
              error={Boolean(error)}
              helperText=""
              InputProps={{
                endAdornment: isPassword && (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword((v) => !v)}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {error && <TextErrors>{meta.error}</TextErrors>}
          </div>
        );
      }}
    </FastField>
  );
};

export default Input;
