// src/components/DatePickerUI/DatePickerUI.js
import { Field } from "formik";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import ClearIcon from "@mui/icons-material/Clear";
import { FormControl, FormLabel } from "@mui/material";
import TextErrors from "../TextErrors/TextErrors";

const DatePickerUI = (props) => {
  const { label, name, ...rest } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Field name={name}>
        {({ field, form, meta }) => {
          const showError = meta.touched && meta.error;

          return (
            <div style={{ marginTop: 10 }}>
              <FormControl fullWidth error={Boolean(showError)}>
                <FormLabel
                  sx={{ color: showError ? "error.main" : "text.primary" }}
                >
                  {label}
                </FormLabel>

                <DatePicker
                  value={field.value || null}
                  onChange={(newValue) => {
                    form.setFieldValue(name, newValue);
                  }}
                  inputFormat="DD/MM/YYYY"
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      fullWidth
                      error={Boolean(showError)}
                      helperText=""
                      InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                          <InputAdornment position="end">
                            {field.value && (
                              <IconButton
                                size="small"
                                onClick={() => {
                                  form.setFieldValue(name, null);
                                  form.setFieldTouched(name, true, false);
                                }}
                              >
                                <ClearIcon fontSize="small" />
                              </IconButton>
                            )}
                            {params.InputProps?.endAdornment}
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                  {...rest}
                />
              </FormControl>

              {showError && <TextErrors>{meta.error}</TextErrors>}
            </div>
          );
        }}
      </Field>
    </LocalizationProvider>
  );
};

export default DatePickerUI;
