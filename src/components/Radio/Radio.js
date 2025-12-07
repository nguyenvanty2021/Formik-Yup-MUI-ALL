// src/components/Radio/Radio.js
import React from "react";
import { useField } from "formik";
import {
  Radio as MUIRadio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import TextErrors from "../TextErrors/TextErrors";

const Radio = ({ label, options, name, ...rest }) => {
  const [field, meta, helpers] = useField(name);
  const { value } = field;
  const { setValue, setTouched } = helpers;

  const error = meta.touched && meta.error;

  const handleChange = (e) => {
    setValue(e.target.value);
    setTouched(true, false);
  };

  return (
    <FormControl component="fieldset" sx={{ mt: 2 }}>
      <FormLabel>{label}</FormLabel>

      <RadioGroup row name={name} value={value} onChange={handleChange}>
        {options.map((opt) => (
          <FormControlLabel
            key={opt.value}
            value={opt.value}
            control={<MUIRadio {...rest} />}
            label={opt.key}
          />
        ))}
      </RadioGroup>

      {error && <TextErrors>{meta.error}</TextErrors>}
    </FormControl>
  );
};

export default Radio;
