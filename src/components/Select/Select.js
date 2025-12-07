// src/components/Select/Select.js
import { Field } from "formik";
import {
  Select as MUISelect,
  MenuItem,
  FormControl,
  FormLabel,
} from "@mui/material";
import TextErrors from "../TextErrors/TextErrors";

const Select1 = ({ label, name, options, placeholder, ...rest }) => {
  return (
    <div style={{ marginTop: 8 }}>
      <Field name={name}>
        {({ field, form, meta }) => {
          const showError = meta.touched && meta.error;

          return (
            <>
              <FormControl fullWidth error={Boolean(showError)}>
                <FormLabel
                  sx={{ color: showError ? "error.main" : "text.primary" }}
                >
                  {label}
                </FormLabel>

                <MUISelect
                  id={name}
                  value={field.value}
                  onChange={(e) => {
                    form.setFieldValue(name, e.target.value);
                    form.setFieldTouched(name, true, false);
                  }}
                  onBlur={() => form.setFieldTouched(name, true)}
                  displayEmpty
                  // tự tô viền đỏ khi lỗi
                  sx={
                    showError
                      ? {
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "error.main",
                          },
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "error.main",
                          },
                        }
                      : {}
                  }
                  {...rest}
                >
                  <MenuItem value="">
                    <em>{placeholder || "Choose select 1"}</em>
                  </MenuItem>

                  {options.map((opt) => (
                    <MenuItem key={opt.value} value={opt.value}>
                      {opt.key}
                    </MenuItem>
                  ))}
                </MUISelect>
              </FormControl>

              {showError && <TextErrors>{meta.error}</TextErrors>}
            </>
          );
        }}
      </Field>
    </div>
  );
};

export default Select1;
