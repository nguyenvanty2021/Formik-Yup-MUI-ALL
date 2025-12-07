// src/components/Checkbox/Checkbox.js
import React from "react";
import { useField } from "formik";
import {
  Checkbox as MUICheckbox,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
  FormLabel,
} from "@mui/material";

const Checkbox = (props) => {
  const { label, options, name, ...rest } = props;

  // Lấy field state từ Formik
  const [field, meta, helpers] = useField(name);
  const { value } = field;
  const { setValue, setTouched } = helpers;

  // Đảm bảo luôn là mảng
  const currentValue = Array.isArray(value) ? value : [];
  const error = meta.touched && Boolean(meta.error);

  const handleChange = (optionValue) => (event) => {
    console.log("checkbox change", optionValue, event.target.checked);
    let newValue;
    if (event.target.checked) {
      newValue = [...currentValue, optionValue];
    } else {
      newValue = currentValue.filter((v) => v !== optionValue);
    }
    setValue(newValue);
    setTouched(true, false);
  };

  return (
    <FormControl component="fieldset" error={error} sx={{ mt: 2 }}>
      <FormLabel component="legend">{label}</FormLabel>
      <FormGroup>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            control={
              <MUICheckbox
                {...rest}
                name={name}
                value={option.value}
                checked={currentValue.includes(option.value)}
                onChange={handleChange(option.value)}
              />
            }
            label={option.key}
          />
        ))}
      </FormGroup>
      {error && <FormHelperText>{meta.error}</FormHelperText>}
    </FormControl>
  );
};

export default Checkbox;
