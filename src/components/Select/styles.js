import styled from "styled-components";

export const Container = styled.select`
  border: none;
  border-radius: 10px;
  height: 40px;
  padding-left: 1rem;
  width: -webkit-fill-available;

  @media (max-width: 768px) {
    width: -webkit-fill-available;
  }

  &:hover,
  &:focus {
    outline: 3px solid ${({ theme }) => theme.COLORS.INPUT};
  }
`