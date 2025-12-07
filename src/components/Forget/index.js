import React, { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import "./index.css";
import * as Yup from "yup";
import FormikControl from "../FormikControl/FormikControl";
import { Form, Formik } from "formik";
const Forget = () => {
  const [modal, setModal] = useState(true);
  const initialValues = {
    email: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
  });
  const onSubmit = (values) => {
      console.log(values)
  };
  return (
    <div className="parent">
      <div className="open">
        <button onClick={() => setModal(true)} className="btn">
          Forget Password
        </button>
      </div>
      {modal ? (
        <div className="forget-main">
          <div className="forget">
            <div className="forget-title">
              <div className="title">Forgot password </div>
              <div>
                <CloseOutlined
                  onClick={() => setModal(false)}
                  className="close"
                />
              </div>
            </div>

            <Formik
            style={{width:"100%"}}
              onSubmit={onSubmit}
              initialValues={initialValues}
              validationSchema={validationSchema}
            >
              {(formik) => {
                console.log(formik);
                return (
                  <Form className="form">
                    <FormikControl
                      control="input"
                      type="email"
                      label="Email"
                      name="email"
                      placeholder="Input email"
                    />
                    <div className="btn-forget-main">
                      <button className="btn" type="submit">
                        Submit
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default Forget;
