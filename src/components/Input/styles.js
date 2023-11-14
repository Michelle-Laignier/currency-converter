import styled from "styled-components";

export const Container = styled.input`
  border: none;
  border-radius: 10px;
  color: ${({ theme }) => theme.COLORS.TEXT_INPUT};
  height: 40px;
  padding-left: 1rem;
`