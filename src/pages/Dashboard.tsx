import React from "react";
import CreditTransferButton from "../components/CreditTransfer/CreditTransferButton";
import { SContentWrapper } from "../components/shared/Common.styled";

const Dashboard = () => {
  return (
    <SContentWrapper>
      <CreditTransferButton />
    </SContentWrapper>
  );
};

export default Dashboard;
