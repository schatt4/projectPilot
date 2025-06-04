import { Field, FieldArray, Form, Formik } from "formik";
import React, { useState } from "react";
import {
  RefundSchema,
  TransferServiceSchema,
  UserSchema,
} from "./CreditTransferSchema";
import type { InferType } from "yup";
import ReviewCreditTransfer from "./ReviewCreditTransfer";
import PaymentSelect from "./PaymentSelect";

type User = InferType<typeof UserSchema>;
interface Payment {
  paymentId: string;
  amount: number;
  paymentMethod: string;
  refrenceNumber: number;
  paymentDate: string;
}

const Paymnet_History: Payment[] = [
  {
    paymentId: "1",
    amount: 80,
    paymentMethod: "Credit Card",
    refrenceNumber: 12345678,
    paymentDate: "2024-05-16",
  },
  {
    paymentId: "2",
    amount: 180,
    paymentMethod: "Credit Card",
    refrenceNumber: 12345678,
    paymentDate: "2024-05-17",
  },
  {
    paymentId: "3",
    amount: 100,
    paymentMethod: "Credit Card",
    refrenceNumber: 12345678,
    paymentDate: "2024-05-19",
  },
];

const user: User = { name: "", email: "" };
// const user: User = { name: "" };
const CreditTransfer: React.FC = () => {
  const [step, setStep] = useState(1);

  //   const handleSubmit=(values: User) => {
  //     if(step===1){
  //         setStep(2);
  //     }
  //   }
  const initialVal = {
    payment: Paymnet_History.map((p) => ({
      paymentId: p.paymentId,
      amount: p.amount,
      paymentMethod: p.paymentMethod,
      refrenceNumber: p.refrenceNumber,
      paymentDate: p.paymentDate,
    })),
  };

  //   const handleToggle = (e, id, amount) => {
  //     e.target.checked
  //       ? val.insert(indx, { refundPaymentId: id, refundAmount: amount })
  //       : val.remove(indx);
  //     return;
  //   };
  return (
    <>
      <div>
        <Formik
          initialValues={TransferServiceSchema.cast({
            paymentHistory: Paymnet_History,
          })}
          //   initialValues={user}
          // initialValues={UserSchema.cast((val) => {
          //   console.log(val);
          // })}
          // validationSchema={}
          onSubmit={(values) => {
            console.log("Form submitted with values:", values);
            if (step === 2) {
              console.log("Form submitted with values:", values);
            }
          }}
        >
          <PaymentSelect />
        </Formik>
      </div>
    </>
  );
};

export default CreditTransfer;
