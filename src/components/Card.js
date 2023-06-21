import styled from "styled-components";

export const CardWrapper = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 1rem;
`;
export const Card = styled.div`
  background: #cf6729;
  color: #252220;
  padding: 20px;
  height: fit-content;
  overflow: auto;
  border-radius: 10px;
  text-transform: capitalize;
  width: fit-content;
`;
