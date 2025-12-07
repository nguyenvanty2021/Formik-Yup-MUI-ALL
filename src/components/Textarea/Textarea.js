// src/components/Textarea/Textarea.js
import { FastField } from "formik";
import { TextField, FormControl, FormLabel } from "@mui/material";
import TextErrors from "../TextErrors/TextErrors";

const Textarea = ({ label, name, ...rest }) => {
  return (
    <FastField name={name}>
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
                multiline
                minRows={3}
                id={name}
                {...field}
                {...rest}
                error={Boolean(error)}
                helperText=""
              />
            </FormControl>

            {error && <TextErrors>{meta.error}</TextErrors>}
          </div>
        );
      }}
    </FastField>
  );
};

export default Textarea;
