import styled from "styled-components";

export const Container = styled.select`
  border: none;
  border-radius: 10px;
  height: 40px;
  width: 15vw;

  @media (max-width: 768px) {
    width: -webkit-fill-available;
  }

  &:hover,
  &:focus {
    outline: 3px solid ${({ theme }) => theme.COLORS.INPUT};
  }
`