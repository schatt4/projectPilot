import React, { useState } from "react";
import {
  SButtonWrapper,
  SCrdtTrnsfrButton,
} from "./CreditTransferButton.styled";
import CreditTransfer from "../CreditTransferForm/CreditTransfer";
import BalanceTransfer from "../BalanceTransferForm/BalanceTransfer";

// interface CreditTransferButtonProps {
//   flowType: string;
//   setFlowType: (flowtype:string) => void;
// }
const CreditTransferButton = () => {
  const [flowType, setFlowType] = useState<string>("balance-transfer");
  return (
    <SButtonWrapper>
      <SCrdtTrnsfrButton onClick={() => setFlowType("credit-refund")}>
        Transfer refund
      </SCrdtTrnsfrButton>
      <SCrdtTrnsfrButton onClick={() => setFlowType("balance-transfer")}>
        Balance transfer
      </SCrdtTrnsfrButton>

      {flowType === "credit-refund" && <CreditTransfer />}
      {flowType === "balance-transfer" && <BalanceTransfer />}
    </SButtonWrapper>
  );
};

export default CreditTransferButton;
