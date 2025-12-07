import { Radio as RadioMain } from "antd";
import { ErrorMessage, FastField } from "formik";
import React from "react";
import TextErrors from "../TextErrors/TextErrors";

const Radio = (props) => {
  const { label, options, name, ...rest } = props;
  return (
    <div>
      <FastField as="select" id={name} name={name} {...rest}>
        {({ field }) => {
          return options.map((option, index) => {
            return (
              <React.Fragment key={index}>
                <RadioMain
                  // type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                >
                  {option.key}
                </RadioMain>
                {/* <div htmlFor={name}>{option.key}</div> */}
              </React.Fragment>
            );
          });
        }}
      </FastField>
      <ErrorMessage component={TextErrors} name={name} />
    </div>
  );
};
export default Radio;
