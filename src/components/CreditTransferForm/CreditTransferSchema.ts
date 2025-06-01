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

export const UserSchema = object({
  name: string().required("Name is required"),
  email: string().email("Invalid email address").required("Email is required"),
});
