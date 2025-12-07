// src/components/Radio/Radio.js
import React from "react";
import { useField } from "formik";
import {
  Radio as MUIRadio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  FormHelperText,
} from "@mui/material";

const Radio = (props) => {
  const { label, options, name, ...rest } = props;

  const [field, meta, helpers] = useField(name);
  const { value } = field;
  const { setValue, setTouched } = helpers;

  const error = meta.touched && Boolean(meta.error);

  const handleChange = (event) => {
    console.log("radio change", event.target.value);
    setValue(event.target.value);
    setTouched(true, false);
  };

  return (
    <FormControl component="fieldset" error={error} sx={{ mt: 2 }}>
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup row name={name} value={value} onChange={handleChange}>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<MUIRadio {...rest} />}
            label={option.key}
          />
        ))}
      </RadioGroup>
      {error && <FormHelperText>{meta.error}</FormHelperText>}
    </FormControl>
  );
};

export default Radio;
