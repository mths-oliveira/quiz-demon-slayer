import styled from "styled-components";

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding: 12px;
  margin: 0 5% 24px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: linear-gradient(
    to bottom,
    transparent,
    ${({ theme }) => theme.colors.mainBg}EE 25%
  );
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default QuizContainer;
