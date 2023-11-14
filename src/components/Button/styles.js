import styled from "styled-components";

export const Container = styled.button`
  background: ${({ theme }) => theme.COLORS.BTN};
  border: none;
  border-radius: 10px;
  font-size: 1.5rem;
  font-weight: 500;
  padding: 1rem 2rem;
  transition: 0.3s;
`