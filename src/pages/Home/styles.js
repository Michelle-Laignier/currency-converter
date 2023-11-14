import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.HOME};
  border-radius: 10px;

  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  height: 70vh;
  width: 70vw;
  position: relative;

  @media (max-width: 768px) {
    height: 100vh;
  }

  h1 {
    position: absolute;
    top: 2rem;
    font-size: 2.5rem;
    text-align: center;
  }
`

export const Convert = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }

  .inputName p {
    font-size: 1.2rem;
    margin-bottom: 12px;
  }
`