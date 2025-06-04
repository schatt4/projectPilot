type credittransfer = {
  refundAmount: number;
  refundPaymentId: string;
};

interface Payment {
  paymentId: string;
  amount: number;
  paymentMethod: string;
  refrenceNumber: number;
  paymentDate: string;
}
export interface TransferType {
  creditTransfer: credittransfer;
  paymentHistory: Payment[];
}

// export type { TransferType, Payment, credittransfer };
