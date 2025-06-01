import { useFormikContext } from "formik";
import React from "react";

const ReviewCreditTransfer = () => {
  const { values, submitForm } = useFormikContext();
  console.log("ReviewCreditTransfer values:", values);
  return <div>ReviewCreditTransfer</div>;
};

export default ReviewCreditTransfer;
