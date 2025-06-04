import { useFormikContext } from "formik";
import React from "react";
import {
  SpaymentAmount,
  SPaymentCard,
  SpaymentDetails,
  SpaymentSelect,
  SPaymntWrapper,
} from "./PaymentSelect.styled";
import type { TransferType } from "./CreditTransfer.types";

const PaymentSelect = () => {
  const { values } :TransferType= useFormikContext();
  console.log(values.paymentHistory);
  return (
    <SPaymntWrapper>
      {values.paymentHistory.map((pmnt:any,) => (
        <SPaymentCard key={pmnt.paymentId}>
        <SpaymentSelect>
          <input type="checkbox" name="paymentSelect" />
        </SpaymentSelect>
        <SpaymentDetails>
          <p className="method-info">{pmnt.paymentDate}</p>
          <p className="method-title">{pmnt.paymentMethod}</p>
          <p className="method-info">Refrence number : {pmnt.refrenceNumber}</p>
        </SpaymentDetails>
        <SpaymentAmount>
          <p>${pmnt.amount}</p>
        </SpaymentAmount>
      </SPaymentCard>
      )}
    </SPaymntWrapper>
  );
};

export default PaymentSelect;
