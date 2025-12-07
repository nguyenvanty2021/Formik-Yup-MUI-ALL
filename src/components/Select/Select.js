import { Field } from "formik";
import { Select } from "antd";
import TextErrors from "../TextErrors/TextErrors";

const Select1 = ({ label, name, options, placeholder, ...rest }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>

      <Field name={name}>
        {({ field, form, meta }) => (
          <>
            <Select
              allowClear
              placeholder={placeholder || "Choose select"}
              id={name}
              {...rest}
              // "" => undefined để Antd hiện placeholder
              value={field.value === "" ? undefined : field.value}
              onChange={(value) => {
                form.setFieldValue(name, value ?? ""); // khi clear bằng menu (không phải icon X)
                form.setFieldTouched(name, true, false);
              }}
              onClear={() => {
                form.setFieldValue(name, ""); // Yup thấy ""
                form.setFieldTouched(name, true, false);
                form.validateField(name); // ép validate ngay
              }}
              onBlur={() => form.setFieldTouched(name, true)}
              style={{ width: "100%" }}
              options={options.map((opt) => ({
                label: opt.key,
                value: opt.value,
              }))}
            />

            {/* 🔥 Tự render lỗi luôn, bỏ ErrorMessage */}
            {meta.touched && meta.error && (
              <TextErrors>{meta.error}</TextErrors>
            )}
          </>
        )}
      </Field>
    </div>
  );
};

export default Select1;
// import { ErrorMessage, FastField } from "formik";
// import TextErrors from "../TextErrors/TextErrors";
// const Select1 = (props) => {
//   const { label, options, name, ...rest } = props;
//   console.log(options);
//   return (
//     <div>
//       <div htmlFor={name}>{label}</div>
//       <FastField as="select" id={name} name={name} {...rest}>
//         {options.map((option, index) => {
//           return (
//             <option key={index} value={option.value}>
//               {option.key}
//             </option>
//           );
//         })}
//       </FastField>
//       <ErrorMessage component={TextErrors} name={name} />
//     </div>
//   );
// };
// export default Select1;
