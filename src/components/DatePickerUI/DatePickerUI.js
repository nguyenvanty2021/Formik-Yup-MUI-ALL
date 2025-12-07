// src/components/DatePickerUI/DatePickerUI.js
import { Field } from "formik";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import ClearIcon from "@mui/icons-material/Clear";
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
              <DatePicker
                label={label}
                value={field.value || null}
                onChange={(newValue) => {
                  form.setFieldValue(name, newValue);
                }}
                // ⚠️ v5 dùng inputFormat, không phải format
                inputFormat="DD/MM/YYYY"
                // v5 BẮT BUỘC phải có renderInput
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    error={Boolean(showError)}
                    // ❌ Không show helperText “Required” bên trong
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

              {/* Lỗi hiển thị bên ngoài bằng TextErrors */}
              {showError && <TextErrors>{meta.error}</TextErrors>}
            </div>
          );
        }}
      </Field>
    </LocalizationProvider>
  );
};

export default DatePickerUI;
