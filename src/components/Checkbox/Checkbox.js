// src/components/Checkbox/Checkbox.js
import React from "react";
import { useField } from "formik";
import {
  Checkbox as MUICheckbox,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import TextErrors from "../TextErrors/TextErrors";

const Checkbox = (props) => {
  const { label, options, name, ...rest } = props;

  const [field, meta, helpers] = useField(name);
  const value = Array.isArray(field.value) ? field.value : [];
  const { setValue, setTouched } = helpers;

  const handleChange = (optionValue) => (e) => {
    let newValue;
    if (e.target.checked) newValue = [...value, optionValue];
    else newValue = value.filter((v) => v !== optionValue);
    setValue(newValue);
    setTouched(true, false);
  };

  const showError = meta.touched && meta.error;

  return (
    <FormControl component="fieldset" error={Boolean(showError)} sx={{ mt: 2 }}>
      <FormLabel sx={{ color: showError ? "error.main" : "text.primary" }}>
        {label}
      </FormLabel>

      <FormGroup>
        {options.map((opt) => (
          <FormControlLabel
            key={opt.value}
            control={
              <MUICheckbox
                {...rest}
                checked={value.includes(opt.value)}
                onChange={handleChange(opt.value)}
              />
            }
            label={opt.key}
          />
        ))}
      </FormGroup>

      {showError && <TextErrors>{meta.error}</TextErrors>}
    </FormControl>
  );
};

export default Checkbox;
