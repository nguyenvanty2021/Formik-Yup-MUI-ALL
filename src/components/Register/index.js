import { Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import FormikControl from "../FormikControl/FormikControl";
import "./index.css";
import { regex } from "../../utils";
const arraySelect = [
  // {
  //   key: "Select city",
  //   value: "",
  // },
  {
    key: "Ho Chi Minh",
    value: "hcm",
  },
  {
    key: "Ha Noi",
    value: "hn",
  },
];
const arrayRadio = [
  {
    key: "Male",
    value: "male",
  },
  {
    key: "Female",
    value: "female",
  },
];
const arrayCheckbox = [
  {
    key: "ReactJS",
    value: "reactJS",
  },
  {
    key: "NextJS",
    value: "nextJS",
  },
];
const Register = () => {
  const [formValue, setFormValue] = useState({});
  const initialValues = {
    email: "",
    url: "",
    description: "",
    select: "",
    radio: "male",
    checkbox: [], // 👈 quan trọng: mảng rỗng
    age: "",
    datePicker: null,
    password: "",
    rePassword: "",
  };
  const validationSchema = Yup.object({
    // nếu có 1 thuộc tính object thì phải lồng nhau tiếp 1 ({}) để check từng key bên trong nữa
    email: Yup.string()
      .matches(regex.email, "Invalid email format")
      .required("Required"),
    url: Yup.string()
      .matches(regex.url, "Invalid URL format")
      .required("Required"),
    password: Yup.string().required("Required"),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Password must match")
      .required("Required"),
    // là số - số dương - kiểu số nguyên
    // có: .matches(regex, message): nữa nha, ngoài ra còn có: lessThan(number, message), moreThan(number, message)
    // số thực thì .boolean()
    age: Yup.number()
      .max(100, "Too Old!")
      .required("Required")
      .positive()
      .integer(),
    // description: Yup.string().required("Required"),
    // check 1 trường hợp chơi VD: age nhập === 20 tuổi thì des required, !== 20 tuổi k cần required
    // description: Yup.string().when("age", {
    //   is: 20, // age = 20  thì mới required
    //   then: Yup.string().required("Required"),
    //   // !== 20 không required
    //   otherwise: Yup.string().notRequired(),
    // }),
    description: Yup.string().required("Required"),

    // select: Yup.string().required("Required"),
    // select: Yup.string().required("Required"),
    // select: Yup.string()
    //   .transform((value) => (value == null ? "" : value)) // null / undefined => ""
    //   .required("Required"),
    // select: Yup.string()
    //   .nullable()
    //   .transform((value) => (value == null ? "" : value))
    //   .required("Required"),
    // select: Yup.mixed()
    //   .nullable() // cho phép null
    //   .required("Required"), // null / undefined => lỗi
    // select: Yup.mixed().test("required-select", "Required", (value) => {
    //   return value !== null && value !== undefined && value !== "";
    // }),
    select: Yup.string().required("Required"),
    // select: Yup.string()
    //   .required("Required")
    //   .test("debug-select", "Required", function (value) {
    //     console.log("Yup debug select value =", value);
    //     // chỉ để debug, vẫn có thể return !!value
    //     return value !== "";
    //   }),
    radio: Yup.string().required("Required"),
    // array.length(length: number | Ref, message?: string | function): Schema
    // array.min(limit: number | Ref, message?: string | function): Schema
    // array.max(limit: number | Ref, message?: string | function): Schema
    // checkbox: Yup.array().length(2, "Too Length").required("Required"),
    // checkbox: Yup.array().required("Required"),
    checkbox: Yup.array()
      .min(1, "Please select at least one option")
      .required("Required"),
    // data nào khi khởi tạo = null thì mới thêm .nullable()
    datePicker: Yup.date().required("Required").nullable(),
    // datePicker: Yup.date().default(function() {
    //   return new Date();
    // }),
  });
  const onSubmit = (values) => {
    const dateFormat = values.datePicker;
    console.log(values);
    setFormValue({
      ...values,
      datePicker: dateFormat.format("YYYY-MM-DD, HH-mm-ss"),
    });
    alert("123");
  };
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {(formik) => {
        console.log(formik);
        console.log("values.select =", formik.values.select);
        console.log("errors.select =", formik.errors.select);
        console.log("touched.select =", formik.touched.select);
        console.log("-----------------------------------");
        return (
          <div className="register-main">
            {" "}
            <Form className="register">
              <div>
                {" "}
                <FormikControl
                  control="input"
                  type="email"
                  label="Email"
                  name="email"
                  placeholder="Input email"
                />
              </div>
              <div>
                {" "}
                <FormikControl
                  control="input"
                  type="text"
                  label="Url"
                  name="url"
                  placeholder="Input url. Example: https://google.com"
                />
              </div>

              <div>
                {" "}
                <FormikControl
                  control="input"
                  type="text"
                  label="Password"
                  name="password"
                  placeholder="Input password"
                  isPassword={true}
                />
              </div>
              <div>
                {" "}
                <FormikControl
                  control="input"
                  type="text"
                  label="Age"
                  name="age"
                  placeholder="Input age"
                />
              </div>
              <div>
                {" "}
                <FormikControl
                  control="input"
                  type="text"
                  label="Re-password"
                  name="rePassword"
                  placeholder="Input re-password"
                  isPassword={true}
                />
              </div>

              <div>
                {" "}
                <FormikControl
                  control="textarea"
                  type="text"
                  label="Description"
                  name="description"
                  placeholder="Input description"
                />
              </div>
              <div>
                {" "}
                <FormikControl
                  control="select"
                  type="text"
                  label="City"
                  options={arraySelect}
                  name="select"
                  placeholder="Choose select"
                />
              </div>
              <div>
                {" "}
                <FormikControl
                  control="radio"
                  type="text"
                  label="Radio"
                  name="radio"
                  options={arrayRadio}
                  placeholder="Choose radio"
                />
              </div>
              <div>
                {" "}
                <FormikControl
                  control="checkbox"
                  type="text"
                  label="Checkbox"
                  name="checkbox"
                  options={arrayCheckbox}
                  placeholder="Choose checkbox"
                />
              </div>
              <div>
                {" "}
                <FormikControl
                  control="date"
                  type="text"
                  label="Date"
                  name="datePicker"
                  options={arrayCheckbox}
                  placeholder="Choose date picker"
                />
              </div>
              <div className="btn-main">
                {" "}
                <button className="btn" type="submit">
                  Submit
                </button>
              </div>
            </Form>
            <div className="data"> {JSON.stringify(formValue)}</div>
          </div>
        );
      }}
    </Formik>
  );
};
export default Register;
