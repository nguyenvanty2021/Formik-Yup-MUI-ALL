import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl/FormikControl";
const arraySelect = [
  {
    key: "Select an select",
    value: "",
  },
  {
    key: "Select 1",
    value: "select1",
  },
  {
    key: "Select 2",
    value: "select2",
  },
];
const arrayRadio = [
  {
    key: "Radio 1",
    value: "radio1",
  },
  {
    key: "Radio 2",
    value: "radio2",
  },
];
const arrayCheckbox = [
  {
    key: "Checkbox 1",
    value: "checkbox1",
  },
  {
    key: "Checkbox 2",
    value: "checkbox2",
  },
];
const FormikContainer = () => {
  const initialValues = {
    email: "",
    description: "",
    select: "",
    radio: "radio1",
    checkbox: "",
    age: "",
    url: "",
    datePicker: null,
  };
  const validationSchema = Yup.object({
    // nếu có 1 thuộc tính object thì phải lồng nhau tiếp 1 ({}) để check từng key bên trong nữa


    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
    rePassword: Yup.string().oneOf([Yup.ref("password"), ""], "Password must match").required("Required"),
    // là số - số dương - kiểu số nguyên
    // có: .matches(regex, message): nữa nha, ngoài ra còn có: lessThan(number, message), moreThan(number, message)
    // số thực thì .boolean()
    age: Yup.number()
      .max(5, "Too Large")
      .required("Required")
      .positive()
      .integer(),
    // description: Yup.string().required("Required"),
    // check 1 trường hợp chơi VD: age nhập === 20 tuổi thì des required, !== 20 tuổi k cần required
    description: Yup.string().when("age", {
      is: 20, // age = 20  thì mới required
      then: Yup.string().required("Required"),
      // !== 20 không required
      otherwise: Yup.string().notRequired(),
    }),
    url: Yup.string().url().required("Required"),
    select: Yup.string().required("Required"),
    radio: Yup.string().required("Required"),
    // array.length(length: number | Ref, message?: string | function): Schema
    // array.min(limit: number | Ref, message?: string | function): Schema
    // array.max(limit: number | Ref, message?: string | function): Schema
    checkbox: Yup.array().length(1, "Too Length").required("Required"),
    // data nào khi khởi tạo = null thì mới thêm .nullable()
    datePicker: Yup.date().required("Required").nullable(),
    // datePicker: Yup.date().default(function() {
    //   return new Date();
    // }),
  });
  const onSubmit = (values) => {
    console.log(values);
    console.log(JSON.parse(JSON.stringify(values.datePicker)));
  };
  return (
   
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {(formik) => {
        console.log(formik);
        return (
          <Form>
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
              placeholder="Input email"
            />
            <FormikControl
              control="input"
              type="text"
              label="Url"
              name="url"
              placeholder="Input url"
            />
            <FormikControl
              control="input"
              type="text"
              label="Age"
              name="age"
              placeholder="Input age"
            />
                        <FormikControl
              control="input"
              type="text"
              label="Password"
              name="password"
              placeholder="Input password"
            />
                        <FormikControl
              control="input"
              type="text"
              label="Re-password"
              name="rePassword"
              placeholder="Input re-password"
            />
            <FormikControl
              control="textarea"
              type="text"
              label="Description"
              name="description"
              placeholder="Input description"
            />
            <FormikControl
              control="select"
              type="text"
              label="Select"
              options={arraySelect}
              name="select"
              placeholder="Choose select"
            />
            <FormikControl
              control="radio"
              type="text"
              label="Radio"
              name="radio"
              options={arrayRadio}
              placeholder="Choose radio"
            />
            <FormikControl
              control="checkbox"
              type="text"
              label="Checkbox"
              name="checkbox"
              options={arrayCheckbox}
              placeholder="Choose checkbox"
            />
            <FormikControl
              control="date"
              type="text"
              label="DatePicker"
              name="datePicker"
              options={arrayCheckbox}
              placeholder="Choose date picker"
            />
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
 
 );
};
export default FormikContainer;
