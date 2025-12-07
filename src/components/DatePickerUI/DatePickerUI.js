import { ErrorMessage, FastField } from "formik";
import { DatePicker } from "antd";
import TextErrors from "../TextErrors/TextErrors";
const DatePickerUI = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div>
      <div htmlFor={name}>{label}</div>
      <FastField name={name}>
        {({ form, field }) => {
          const { name, value } = field;
          const { errors, setFieldValue, touched } = form;
          const showError = errors[name] && touched[name];
          return (
            <DatePicker
              style={showError ? { border: "1px solid red" } : {}}
              // ranges={{
              //   Today: [moment(), moment()],
              //   "This Month": [
              //     moment().startOf("month"),
              //     moment().endOf("month"),
              //   ],
              // }}
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
            />
          );
        }}
      </FastField>
      <ErrorMessage component={TextErrors} name={name} />
    </div>
  );
};
export default DatePickerUI;
