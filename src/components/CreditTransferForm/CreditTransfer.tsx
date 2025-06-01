import { Field, FieldArray, Form, Formik } from "formik";
import React, { useState } from "react";
import { RefundSchema, UserSchema } from "./CreditTransferSchema";
import type { InferType } from "yup";
import ReviewCreditTransfer from "./ReviewCreditTransfer";

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
          initialValues={initialVal}
          //   initialValues={user}
          // initialValues={UserSchema.cast((val) => {
          //   console.log(val);
          // })}
          validationSchema={RefundSchema}
          onSubmit={(values) => {
            console.log("Form submitted with values:", values);
            if (step === 2) {
              console.log("Form submitted with values:", values);
            }
          }}
        >
          {(formik) => {
            console.log("formik value", formik.values);
            return (
              <>
                <Form>
                  <FieldArray name="transactions">
                    {(val) => {
                      console.log("FieldArray values:", val);
                      return formik.values.payment.map((p, indx) => {
                        return (
                          <div key={p.paymentId}>
                            <label>
                              <Field
                                type="checkbox"
                                // name={`transactions.${p.paymentId}.selected`}
                                name={`transactions.${p.paymentId}.refundPaymentId`}
                                checked={
                                  val.form.values.transactions?.find(
                                    (el) => el.refundPaymentId === p.paymentId
                                  )
                                    ? true
                                    : false
                                }
                                onChange={(evt) =>
                                  evt.target.checked
                                    ? val.insert(indx, {
                                        refundPaymentId: p.paymentId,
                                        refundAmount: p.amount,
                                      })
                                    : val.remove(indx)
                                }
                                // checked={val.form.values.transactions[indx]?.selected || false}
                                // checked={
                                //   val.form.values.transactions.find(
                                //     (el) => el.refundPaymentId === p.paymentId
                                //   )
                                //     ? true
                                //     : false
                                // }
                                // onChange={(e) =>
                                //   //   handleToggle(e, p.paymentId, p.amount)
                                //   {
                                //     console.log(
                                //       "Checkbox changed:",
                                //       e.target.checked
                                //     );
                                //     // e.target.checked
                                //     //   ? val.form.values.transactions.push({
                                //     //       refundPaymentId: p.paymentId,
                                //     //       refundAmount: p.amount,
                                //     //     })
                                //     //   : val.form.values.transactions.splice(
                                //     //       indx,
                                //     //       1
                                //     //     );
                                //     formik.handleChange(e);
                                //   }
                                // }
                              />
                              {p.paymentMethod} - {p.amount}
                            </label>
                          </div>
                        );
                      });
                    }}
                  </FieldArray>
                  {/* {formik.values.transactions?.length > 0 && (
                              <div>hyy</div>
                              )} */}
                </Form>
                {/* {console.log(formik.values.transactions)} */}

                <form
                  //   onSubmit={formik.handleSubmit}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  {step === 1 && (
                    <>
                      <div>
                        <label htmlFor="name">Name:</label>
                        <Field
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email">Email:</label>
                        <Field
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email"
                        />
                      </div>
                    </>
                  )}
                  {step === 2 && <ReviewCreditTransfer />}
                  <div>
                    {/* <button type="submit">Submit</button> */}

                    {step === 1 ? (
                      <button
                        onClick={() => {
                          if (!formik.errors.name || !formik.errors.name) {
                            setStep(2);
                          }
                        }}
                      >
                        Continue
                      </button>
                    ) : (
                      <button type="submit">Sumbit</button>
                    )}

                    <button>Cancel</button>
                  </div>
                </form>
              </>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default CreditTransfer;
