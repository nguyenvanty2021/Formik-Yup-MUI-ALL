import { Input as InputMain } from "antd";
import { ErrorMessage, FastField } from "formik";
import TextErrors from "../TextErrors/TextErrors";

const Input = (props) => {
  const { label, name, isPassword, ...rest } = props;
  // Chọn component: Input thường hoặc Input.Password
  const FieldComponent = isPassword ? InputMain.Password : InputMain;
  return (
    <div>
      <FastField name={name}>
        {({ field, form, props }) => {
          console.log(field);
          console.log(form);
          console.log(props);
          const { name } = field;
          const { errors, touched } = form;
          const showError = errors[name] && touched[name];
          return (
            <div>
              <div htmlFor={name}>{label}</div>
              <FieldComponent
                style={showError ? { border: "1px solid red" } : {}}
                {...rest}
                {...field}
                id={name}
              />
              <ErrorMessage component={TextErrors} name={name} />
            </div>
          );
        }}
      </FastField>
    </div>
  );
};
export default Input;
