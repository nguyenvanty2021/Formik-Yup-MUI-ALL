// src/components/Textarea/Textarea.js
import { FastField } from "formik";
import { TextField } from "@mui/material";

const Textarea = (props) => {
  const { label, name, ...rest } = props;

  return (
    <FastField name={name}>
      {({ field, meta }) => {
        const error = meta.touched && Boolean(meta.error);
        const helperText = meta.touched && meta.error;

        return (
          <div style={{ marginTop: 8 }}>
            <TextField
              fullWidth
              multiline
              minRows={3}
              label={label}
              id={name}
              name={name}
              {...field}
              {...rest}
              error={error}
              helperText={helperText}
            />
          </div>
        );
      }}
    </FastField>
  );
};

export default Textarea;
