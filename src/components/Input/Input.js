// src/components/Input/Input.js
import React from "react";
import { FastField } from "formik";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Input = (props) => {
  const { label, name, isPassword, ...rest } = props;
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <FastField name={name}>
      {({ field, meta }) => {
        const error = meta.touched && Boolean(meta.error);
        const helperText = meta.touched && meta.error;

        const commonProps = {
          fullWidth: true,
          label,
          id: name,
          name,
          ...field,
          ...rest,
          error,
          helperText,
        };

        if (!isPassword) {
          return (
            <div style={{ marginTop: 8 }}>
              <TextField {...commonProps} />
            </div>
          );
        }

        return (
          <div style={{ marginTop: 8 }}>
            <TextField
              {...commonProps}
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword((s) => !s)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
        );
      }}
    </FastField>
  );
};

export default Input;
