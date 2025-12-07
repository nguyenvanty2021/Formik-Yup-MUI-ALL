// src/components/Textarea/Textarea.js
import { FastField } from "formik";
import { TextField } from "@mui/material";
import TextErrors from "../TextErrors/TextErrors";

const Textarea = ({ label, name, ...rest }) => {
  return (
    <FastField name={name}>
      {({ field, meta }) => {
        const error = meta.touched && meta.error;

        return (
          <div style={{ marginTop: 8 }}>
            <TextField
              fullWidth
              multiline
              minRows={3}
              label={label}
              id={name}
              {...field}
              {...rest}
              error={Boolean(error)}
              helperText=""
            />

            {error && <TextErrors>{meta.error}</TextErrors>}
          </div>
        );
      }}
    </FastField>
  );
};

export default Textarea;
