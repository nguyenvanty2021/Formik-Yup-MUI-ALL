// src/components/Select/Select.js
import { Field } from "formik";
import {
  Select as MUISelect,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@mui/material";

const Select1 = ({ label, name, options, placeholder, ...rest }) => {
  const labelId = `${name}-label`;

  return (
    <div style={{ marginTop: 8 }}>
      <Field name={name}>
        {({ field, form, meta }) => {
          const error = meta.touched && Boolean(meta.error);
          const helperText = meta.touched && meta.error;

          return (
            <FormControl fullWidth error={error}>
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
                {/* placeholder option */}
                <MenuItem value="">
                  <em>{placeholder || "Choose select"}</em>
                </MenuItem>
                {options.map((opt) => (
                  <MenuItem key={opt.value} value={opt.value}>
                    {opt.key}
                  </MenuItem>
                ))}
              </MUISelect>
              {helperText && <FormHelperText>{helperText}</FormHelperText>}
            </FormControl>
          );
        }}
      </Field>
    </div>
  );
};

export default Select1;
// // src/components/Select/Select.js
// import { Field } from "formik";
// import {
//   Select as MUISelect,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   FormHelperText,
// } from "@mui/material";

// const Select1 = ({ label, name, options, placeholder, ...rest }) => {
//   const labelId = `${name}-label`;

//   return (
//     <div style={{ marginTop: 16 }}>
//       <Field name={name}>
//         {({ field, form, meta }) => {
//           const error = meta.touched && Boolean(meta.error);
//           const helperText = meta.touched && meta.error;

//           return (
//             <FormControl fullWidth error={error}>
//               <InputLabel id={labelId}>{label}</InputLabel>
//               <MUISelect
//                 labelId={labelId}
//                 id={name}
//                 label={label}
//                 displayEmpty
//                 value={field.value}
//                 onChange={(e) => {
//                   form.setFieldValue(name, e.target.value);
//                   form.setFieldTouched(name, true, false);
//                 }}
//                 onBlur={() => form.setFieldTouched(name, true)}
//                 {...rest}
//               >
//                 {/* item rỗng = placeholder + để clear */}
//                 <MenuItem value="">
//                   <em>{placeholder || "Choose select"}</em>
//                 </MenuItem>

//                 {options.map((opt) => (
//                   <MenuItem key={opt.value} value={opt.value}>
//                     {opt.key}
//                   </MenuItem>
//                 ))}
//               </MUISelect>
//               {helperText && <FormHelperText>{helperText}</FormHelperText>}
//             </FormControl>
//           );
//         }}
//       </Field>
//     </div>
//   );
// };

// export default Select1;
