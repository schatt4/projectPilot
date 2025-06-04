import { object, string, number, boolean, array } from "yup";

export const RefundSchema = object().shape({
  transactions: array().of(
    object().shape({
      refundPaymentId: string(),
      //   selected: boolean(),
      refundAmount: number(),
    })
  ),
});

const payment = array().of(
  object().shape({
    paymentId: string().required("Payment ID is required"),
    amount: number()
      .required("Amount is required")
      .positive("Amount must be positive"),
    paymentMethod: string().required("Payment method is required"),
    refrenceNumber: number().required("Reference number is required"),
    paymentDate: string().required("Payment date is required"),
  })
);

export const TransferServiceSchema = object().shape({
  payment: payment,
  CreditTransfer: RefundSchema,
});

export const UserSchema = object({
  name: string().required("Name is required"),
  email: string().email("Invalid email address").required("Email is required"),
});
