import styled from "styled-components";

export const SCrdtTrnsfrButton = styled.button`
  width: 15rem;
  height: 4rem;
  background-color: aliceblue;
  border: 1px solid gray;
  border-radius: 6px;

  &:hover {
    /* background-color: lightblue; */
    border: 1px solid lightblue;
    cursor: pointer;
  }
`;

export const SButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
