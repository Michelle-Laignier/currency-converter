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
  display: grid;
  grid-template-columns: 20% 35% 35%;
  width: -webkit-fill-available;
  margin: 0 1rem;
  grid-template-rows: 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: none;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 1rem;
  }

  .inputName {

    p {
      font-size: 1.2rem;
      margin-bottom: 12px;
    }

    input {
      width: -webkit-fill-available;
    }
  }
`

export const Result = styled.div`
  p {
    font-size: 3rem;
    font-weight: 500;
  }
`