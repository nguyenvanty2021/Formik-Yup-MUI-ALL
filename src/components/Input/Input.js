// src/components/Input/Input.js
import React from "react";
import { Field } from "formik";
import {
  TextField,
  IconButton,
  InputAdornment,
  FormControl,
  FormLabel,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import TextErrors from "../TextErrors/TextErrors";

const Input = ({ label, name, isPassword, ...rest }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <Field name={name}>
      {({ field, meta }) => {
        const error = meta.touched && meta.error;

        return (
          <div style={{ marginTop: 8 }}>
            <FormControl fullWidth error={Boolean(error)}>
              <FormLabel sx={{ color: error ? "error.main" : "text.primary" }}>
                {label}
              </FormLabel>

              <TextField
                fullWidth
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
            </FormControl>

            {error && <TextErrors>{meta.error}</TextErrors>}
          </div>
        );
      }}
    </Field>
  );
};

export default Input;
