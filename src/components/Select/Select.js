// src/components/Select/Select.js
import { Field } from "formik";
import {
  Select as MUISelect,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import TextErrors from "../TextErrors/TextErrors";

const Select1 = ({ label, name, options, placeholder, ...rest }) => {
  const labelId = `${name}-label`;

  return (
    <div style={{ marginTop: 8 }}>
      <Field name={name}>
        {({ field, form, meta }) => {
          const showError = meta.touched && meta.error;

          return (
            <FormControl fullWidth>
              <InputLabel id={labelId}>{label}</InputLabel>

              <MUISelect
                labelId={labelId}
                id={name}
                label={label}
                value={field.value}
                onChange={(e) => {
                  form.setFieldValue(name, e.target.value);
                  form.setFieldTouched(name, true, false);
                }}
                onBlur={() => form.setFieldTouched(name, true)}
                {...rest}
              >
                {/* placeholder */}
                <MenuItem value="">
                  <em>{placeholder || "Choose select"}</em>
                </MenuItem>

                {options.map((opt) => (
                  <MenuItem key={opt.value} value={opt.value}>
                    {opt.key}
                  </MenuItem>
                ))}
              </MUISelect>

              {showError && <TextErrors>{meta.error}</TextErrors>}
            </FormControl>
          );
        }}
      </Field>
    </div>
  );
};

export default Select1;
