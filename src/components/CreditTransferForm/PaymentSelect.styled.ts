import styled from "styled-components";

export const SPaymntWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  background-color: #fbfaef;
`;

export const SPaymentCard = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  padding: 18px 21px;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin: 12px 0;
  flex-wrap: wrap; /* Enables responsiveness */
  @media (max-width: 600px) {
    /* flex-direction: column;
    align-items: flex-start; */
  }
`;

export const SpaymentDetails = styled.div`
  flex: 2;
  min-width: 200px;
  .method-title {
    font-weight: bold;
    font-size: 1rem;
    margin-bottom: 4px;
  }
  .method-info {
    color: #666;
    font-size: 0.9rem;
  }
`;
export const SpaymentAmount = styled.div`
  /* flex: 1; */
  flex: 0 0 auto;
  min-width: 100px;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
`;

export const SpaymentSelect = styled.div`
  /* flex: 0 0 auto; */
  flex: 1;
  min-width: 50px;
  text-align: left;
  display: flex;
  align-items: center;
  input {
    width: 24px;
    height: 24px;
  }
`;
